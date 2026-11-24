<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  preselectedArea: {
    type: String,
    default: '',
  },
});

const route = useRoute();

const formData = ref({
  name: '',
  email: '',
  phone: '',
  area: '',
  caseDescription: '',
});

const errors = ref({
  name: null,
  email: null,
  phone: null,
  area: null,
});

const areaOptions = [
  'Fraude Bancario',
  'Sucesiones',
  'Planificación Patrimonial',
  'Civil',
  'Otro tema legal',
];

const emailOk = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const validateField = (field) => {
  const value = formData.value[field];
  errors.value[field] = null;

  if (field === 'name') {
    if (!value.trim()) errors.value.name = 'Por favor ingrese su nombre completo.';
    else if (value.trim().length < 2) errors.value.name = 'Debe tener al menos 2 caracteres.';
  }

  if (field === 'email') {
    if (!value.trim()) errors.value.email = 'Por favor ingrese su correo electrónico.';
    else if (!emailOk(value.trim())) errors.value.email = 'Ingrese un formato de correo válido (ej. nombre@correo.com).';
  }

  if (field === 'phone') {
    const digits = value.replace(/\D/g, '');
    if (!digits) errors.value.phone = 'Por favor ingrese su número de WhatsApp.';
    else if (!/^\d{10}$/.test(digits)) errors.value.phone = 'Ingrese un número válido de 10 dígitos (Colombia).';
  }

  if (field === 'area') {
    if (!value) errors.value.area = 'Seleccione el área jurídica de su consulta.';
  }
};

const validateAll = () => {
  validateField('name');
  validateField('email');
  validateField('phone');
  validateField('area');
  return Object.values(errors.value).every((e) => e === null);
};

const serverError = ref(null);
const isSubmitting = ref(false);

const setArea = (areaName) => {
  if (areaOptions.includes(areaName)) {
    formData.value.area = areaName;
    errors.value.area = null;
  }
};

onMounted(() => {
  if (props.preselectedArea && areaOptions.includes(props.preselectedArea)) {
    formData.value.area = props.preselectedArea;
    return;
  }

  const queryParam = String(route.query.area || route.query.campaignSlug || route.query.campaign_slug || '').toLowerCase();
  if (queryParam) {
    if (queryParam.includes('fraude') || queryParam.includes('vishing') || queryParam.includes('phishing') || queryParam.includes('banc') || queryParam.includes('2573')) {
      formData.value.area = 'Fraude Bancario';
    } else if (queryParam.includes('sucesion') || queryParam.includes('herencia') || queryParam.includes('307')) {
      formData.value.area = 'Sucesiones';
    } else if (queryParam.includes('patrimon') || queryParam.includes('fideicomiso') || queryParam.includes('testamento')) {
      formData.value.area = 'Planificación Patrimonial';
    } else if (queryParam.includes('datacredito') || queryParam.includes('reporte') || queryParam.includes('centrales') || queryParam.includes('cifin') || queryParam.includes('1266') || queryParam.includes('2157')) {
      formData.value.area = 'Civil';
    } else if (queryParam.includes('civil') || queryParam.includes('contrato')) {
      formData.value.area = 'Civil';
    }
  }
});

defineExpose({
  setArea,
  formData,
});

const submitLead = async () => {
  serverError.value = null;
  if (!validateAll()) return;

  isSubmitting.value = true;
  try {
    await $fetch('/api/marketing/asesoria-inicial-lead', {
      method: 'POST',
      body: {
        name: formData.value.name.trim(),
        email: formData.value.email.trim(),
        phone: formData.value.phone.replace(/\D/g, ''),
        area: formData.value.area,
        caseDescription: formData.value.caseDescription.trim(),
      },
    });

    await navigateTo('/thankyou/asesoria-inicial', { replace: true });
  } catch (error) {
    serverError.value =
      error?.data?.message ||
      'No fue posible enviar su consulta en este momento. Por favor verifique sus datos e intente de nuevo.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <form class="w-full flex flex-col gap-4" @submit.prevent="submitLead" novalidate>
    <!-- Server error alert -->
    <div
      v-if="serverError"
      class="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900"
      role="alert"
    >
      <svg class="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <span>{{ serverError }}</span>
    </div>

    <!-- Nombre -->
    <div class="flex flex-col gap-1">
      <label for="ai-name" class="text-xs font-bold uppercase tracking-wider text-ink flex items-center justify-between h-5">
        <span>Nombre y apellidos</span>
        <span class="text-[11px] font-normal text-action font-sans shrink-0">Requerido</span>
      </label>
      <input
        id="ai-name"
        v-model="formData.name"
        type="text"
        autocomplete="name"
        placeholder="Ej. Andrés Morales Peña"
        :class="[
          'w-full rounded-xl border bg-surface/50 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/50 transition-all duration-150 focus:bg-surface-elevated focus:outline-none focus:ring-2',
          errors.name
            ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
            : 'border-line focus:border-action focus:ring-action/20'
        ]"
        @blur="validateField('name')"
      >
      <p class="min-h-[18px] text-xs font-medium leading-none pt-1" :class="errors.name ? 'text-red-600' : 'text-transparent select-none'" aria-live="polite">{{ errors.name || '—' }}</p>
    </div>

    <!-- Correo y Teléfono (Grid on sm+) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
      <!-- Correo -->
      <div class="flex flex-col gap-1">
        <label for="ai-email" class="text-xs font-bold uppercase tracking-wider text-ink flex items-center justify-between h-5 gap-2">
          <span>Correo</span>
          <span class="text-[11px] font-normal text-action font-sans shrink-0 whitespace-nowrap">Requerido</span>
        </label>
        <input
          id="ai-email"
          v-model="formData.email"
          type="email"
          autocomplete="email"
          placeholder="nombre@ejemplo.com"
          :class="[
            'w-full rounded-xl border bg-surface/50 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/50 transition-all duration-150 focus:bg-surface-elevated focus:outline-none focus:ring-2',
            errors.email
              ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
              : 'border-line focus:border-action focus:ring-action/20'
          ]"
          @blur="validateField('email')"
        >
        <p class="min-h-[18px] text-xs font-medium leading-none pt-1" :class="errors.email ? 'text-red-600' : 'text-transparent select-none'" aria-live="polite">{{ errors.email || '—' }}</p>
      </div>

      <!-- Teléfono WhatsApp -->
      <div class="flex flex-col gap-1">
        <label for="ai-phone" class="text-xs font-bold uppercase tracking-wider text-ink flex items-center justify-between h-5 gap-2">
          <span class="whitespace-nowrap">Celular / WhatsApp</span>
          <span class="text-[11px] font-normal text-ink-muted font-sans shrink-0 whitespace-nowrap">10 dígitos</span>
        </label>
        <input
          id="ai-phone"
          v-model="formData.phone"
          type="tel"
          inputmode="numeric"
          autocomplete="tel"
          placeholder="310 123 4567"
          :class="[
            'w-full rounded-xl border bg-surface/50 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/50 transition-all duration-150 focus:bg-surface-elevated focus:outline-none focus:ring-2',
            errors.phone
              ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
              : 'border-line focus:border-action focus:ring-action/20'
          ]"
          @blur="validateField('phone')"
        >
        <p class="min-h-[18px] text-xs font-medium leading-none pt-1" :class="errors.phone ? 'text-red-600' : 'text-transparent select-none'" aria-live="polite">{{ errors.phone || '—' }}</p>
      </div>
    </div>

    <!-- Área de consulta -->
    <div class="flex flex-col gap-1">
      <label for="ai-area" class="text-xs font-bold uppercase tracking-wider text-ink flex items-center justify-between h-5">
        <span>Área jurídica de su caso</span>
        <span class="text-[11px] font-normal text-action font-sans shrink-0">Requerido</span>
      </label>
      <div class="relative">
        <select
          id="ai-area"
          v-model="formData.area"
          :class="[
            'w-full appearance-none rounded-xl border bg-surface/50 px-4 py-3 text-sm text-ink transition-all duration-150 focus:bg-surface-elevated focus:outline-none focus:ring-2 pr-10',
            errors.area
              ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
              : 'border-line focus:border-action focus:ring-action/20',
            !formData.area ? 'text-ink-muted/60' : 'text-ink font-medium'
          ]"
          @change="validateField('area')"
        >
          <option disabled value="">Seleccione el área jurídica...</option>
          <option v-for="option in areaOptions" :key="option" :value="option" class="text-ink">
            {{ option }}
          </option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-ink-muted">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <p class="min-h-[18px] text-xs font-medium leading-none pt-1" :class="errors.area ? 'text-red-600' : 'text-transparent select-none'">{{ errors.area || '—' }}</p>
    </div>

    <!-- Descripción del caso -->
    <div class="flex flex-col gap-1">
      <div class="flex items-center justify-between h-5">
        <label for="ai-case" class="text-xs font-bold uppercase tracking-wider text-ink">
          Resumen de los hechos
        </label>
        <span class="text-[11px] text-ink-muted shrink-0">Opcional</span>
      </div>
      <textarea
        id="ai-case"
        v-model="formData.caseDescription"
        rows="3"
        maxlength="1000"
        placeholder="Indique fechas aproximadas, entidad financiera o personas involucradas y la situación que desea resolver..."
        class="w-full rounded-xl border border-line bg-surface/50 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/50 transition-all duration-150 focus:bg-surface-elevated focus:outline-none focus:ring-2 focus:border-action focus:ring-action/20 resize-y"
      />
      <div class="flex justify-between items-center text-[11px] text-ink-muted px-0.5">
        <span>No incluya contraseñas ni claves confidenciales.</span>
        <span>{{ formData.caseDescription.length }}/1000</span>
      </div>
    </div>

    <!-- Botón de radicación -->
    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-action text-white font-bold text-sm sm:text-base rounded-xl hover:bg-action-hover active:scale-[0.99] transition-all duration-200 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
    >
      <svg
        v-if="isSubmitting"
        class="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      <span>{{ isSubmitting ? 'Radicando consulta…' : 'Radicar consulta para valoración' }}</span>
      <svg v-if="!isSubmitting" class="w-4 h-4 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>

    <!-- Trust microcopy -->
    <div class="flex items-center justify-center gap-2 pt-1 text-center text-xs text-ink-muted">
      <svg class="w-4 h-4 text-action shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <span>Secreto profesional (Art. 74 C.P.). Primer contacto por escrito.</span>
    </div>
  </form>
</template>
