// server/api/landings/[slug].get.js

import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {

    const {
        backendBaseUrl,
        jwtSecret,
        tokenBackend
    } = useRuntimeConfig();

    const slug = getRouterParam(event, 'slug');

    if (!slug) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            message: 'Missing slug parameter in URL.'
        });
    }

    const serviceToken = jwt.sign({ backendId: tokenBackend }, jwtSecret, { expiresIn: '5m' });
    const backendUrl = `${backendBaseUrl}/api/landings/${slug}`;

    try {
        const response = await $fetch(backendUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${serviceToken}`
            },
        });
        return response;

    } catch (error) {
        console.error('Error fetching data from backend:', error);
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Internal Server Error',
            message: error.message || 'An unexpected error occurred while communicating with the backend API.',
            data: { originalError: error.message }
        });
    }
});