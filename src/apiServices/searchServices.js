import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const result = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });

        return result.data;
    } catch (e) {
        console.error(e);
    }
};
