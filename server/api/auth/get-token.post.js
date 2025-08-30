// server/api/auth/get-token.post.js

export default defineEventHandler(async (event) => {


    const {
        backendBaseUrl
    } = useRuntimeConfig();

    const backendUrl =`${backendBaseUrl}/api/auth/get-token`;

    try {
        const response = await $fetch(backendUrl, {
            method: event.method,
            headers: {
                'Content-Type': 'application/json'
            }
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