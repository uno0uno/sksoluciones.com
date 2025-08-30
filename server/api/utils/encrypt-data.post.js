// server/api/utils/encrypt-data.post.js

export default defineEventHandler(async (event) => {

    const {
        backendBaseUrl
    } = useRuntimeConfig();

    const backendUrl = `${backendBaseUrl}/api/utils/encrypt-data`;
    const authorizationHeader = getHeader(event, 'authorization');
    const requestBody = await readBody(event);

    console.log('Received request backend URL:', backendUrl);

    if (!requestBody || !requestBody.leadEmail) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            message: 'Missing required parameter: leadEmail.'
        });
    }

    try {
        const fetchOptions = {
            method: 'POST',
            body: requestBody, 
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (authorizationHeader) {
            fetchOptions.headers['Authorization'] = authorizationHeader;
        }
        const response = await $fetch(backendUrl, fetchOptions);

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