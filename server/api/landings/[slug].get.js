// server/api/landings/[slug].get.js

export default defineEventHandler(async (event) => {

    const {
        backendBaseUrl
    } = useRuntimeConfig();

    const slug = getRouterParam(event, 'slug');

    console.log('Requested slug:', slug);
    console.log('Backend Base URL:', backendBaseUrl);
    if (!slug) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            message: 'Missing slug parameter in URL.'
        });
    }

    const authorizationHeader = getHeader(event, 'authorization');
    const backendUrl = `${backendBaseUrl}/api/landings/${slug}`;

    try {
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (authorizationHeader) {
            fetchOptions.headers['Authorization'] = authorizationHeader;
        }

        const response = await $fetch(`${backendUrl}`, fetchOptions);
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