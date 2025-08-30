// server/api/marketing/createLeadCampain.js    

export default defineEventHandler(async (event) => {

    const {
        backendBaseUrl
    } = useRuntimeConfig();
 
    const backendUrl =`${backendBaseUrl}/api/marketing/createLeadCampain`;
    const authorizationHeader = getHeader(event, 'authorization');
    const requestBody = await readBody(event);

    console.log('Received request backend URL:', backendUrl);

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
        console.log('Error in forwarding request to backend:', error.data);
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.data?.message || 'Error en la solicitud al backend',
            data: error.data
        });
    }
});