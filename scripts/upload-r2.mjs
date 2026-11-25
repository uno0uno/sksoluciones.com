#!/usr/bin/env node
// scripts/upload-r2.mjs — Subida a Cloudflare R2 (S3-compatible) para SK/WARO
// Uso: node scripts/upload-r2.mjs <local-webp> [r2-key]
// Si no pasas key, la deduce de content/blog/<slug>/meta.md
// Credenciales: NUXT_PRIVATE_R2_* en api_warocol.com/.env.prod o .env (fallback a AWS SES si no hay R2)

import { readFileSync, existsSync } from "fs";
import { resolve, basename, dirname } from "path";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

function loadEnvFile(p){
  const env={};
  if(!existsSync(p)) return env;
  for(const line of readFileSync(p,"utf8").split("\n")){
    const m=line.match(/^\s*([^#=]+?)\s*=\s*"?([^"]*?)"?\s*$/);
    if(m) env[m[1].trim()]=m[2].replace(/^"|"$/g,"");
  }
  return env;
}
function loadEnv(){
  const candidates = [
    resolve(".env"),
    resolve("../.env"),
    "/Users/saifer/Documents/ANDERSON/WEBS/WARO COLOMBIA/api_warocol.com/.env.prod",
    "/Users/saifer/Documents/ANDERSON/WEBS/sksoluciones.com/.env",
  ];
  const merged={};
  for(const p of candidates){
    Object.assign(merged, loadEnvFile(p));
  }
  Object.assign(merged, process.env);
  return merged;
}

async function main(){
  const env = loadEnv();
  const accessKeyId = env.NUXT_PRIVATE_R2_ACCESS_KEY_ID || env.NUXT_PRIVATE_AWS_ACCES_KEY_ID || env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = env.NUXT_PRIVATE_R2_SECRET_ACCESS_KEY || env.NUXT_PRIVATE_AWS_SECRET_ACCESS_KEY || env.AWS_SECRET_ACCESS_KEY;
  const endpoint = env.NUXT_PRIVATE_R2_ENDPOINT || "https://24ae2a1f9e9866494c219441b1feff11.r2.cloudflarestorage.com";
  const bucket = env.NUXT_PRIVATE_R2_PUBLIC_BUCKET || "warocol-public-assets";
  const publicBase = env.NUXT_PRIVATE_R2_PUBLIC_URL || "https://pub-bc8bb06ab87643fb88805fdddf1cab70.r2.dev";

  if(!accessKeyId || !secretAccessKey){
    console.error("Falta NUXT_PRIVATE_R2_ACCESS_KEY_ID en .env / api_warocol.com/.env.prod");
    process.exit(1);
  }
  const localArg = process.argv[2];
  const keyArg = process.argv[3];
  if(!localArg){
    console.error("Uso: node scripts/upload-r2.mjs <local-webp> [r2-key]");
    process.exit(1);
  }
  const localPath = resolve(localArg);
  if(!existsSync(localPath)){
    console.error("No existe:", localPath);
    process.exit(1);
  }
  let key = keyArg;
  if(!key){
    const dir = dirname(localPath);
    const metaPath = resolve(dir, "meta.md");
    let slug = basename(dir);
    if(existsSync(metaPath)){
      const m = readFileSync(metaPath,"utf8").match(/^slug:\s*([^\s]+)/m);
      if(m) slug = m[1].trim();
    }
    const file = basename(localPath);
    key = file.startsWith(slug) ? `blog/${slug}/${file}` : `blog/${slug}/${file}`;
  }

  const client = new S3Client({
    region: "auto",
    endpoint,
    credentials: { accessKeyId, secretAccessKey },
    forcePathStyle: false,
  });

  const body = readFileSync(localPath);
  const cmd = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: body,
    ContentType: "image/webp",
    CacheControl: "public, max-age=31536000, immutable",
  });
  const res = await client.send(cmd);
  console.log(`✓ Upload OK: s3://${bucket}/${key} → ${publicBase}/${key} (status ${res.$metadata.httpStatusCode})`);
  // Verifica HEAD público
  const pubUrl = `${publicBase}/${key}`;
  console.log(`  Verifica: curl -I ${pubUrl}`);
  try{
    const r = await fetch(pubUrl, {method:"HEAD"});
    console.log(`  HEAD ${r.status} ${r.statusText} — ${r.headers.get("content-type")} ${r.headers.get("content-length")} bytes`);
  }catch(e){
    console.warn("  HEAD check falló:", e.message);
  }
}
main().catch(e=>{ console.error(e); process.exit(1); });
