import { createError } from 'h3';
import { getQuery } from 'h3';

export default defineEventHandler(async (event) => {

    const {
        backendBaseUrl
    } = useRuntimeConfig();

    const backendUrl =`${backendBaseUrl}/api/marketing/verify-lead`;
    console.log('Backend URL:', backendUrl);
    const query = getQuery(event);

    if (!query.token) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            message: 'Missing required token parameter in URL.'
        });
    }

    try {
        const response = await $fetch(backendUrl, {
            method: 'GET',
            query: query
        });

        return response;

    } catch (error) {
        console.error('Error in forwarding request to backend:', error);
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Internal Server Error',
            message: error.message || 'An unexpected error occurred while communicating with the backend.',
            data: { originalError: error.message }
        });
    }
});