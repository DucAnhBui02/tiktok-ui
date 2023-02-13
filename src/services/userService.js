import * as httpRequest from '~/utils/httpRequest';

export const getSuggeted = async (page, perPage) => {
    try {
        const result = await httpRequest.get(`users/suggested`, {
            params: {
                page,
                per_page: perPage,
            },
        });

        return result.data;
    } catch (e) {
        console.error(e);
    }
};
