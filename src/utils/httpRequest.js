import axios from 'axios';

console.log(process.env);
const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
export const get = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};

export default httpRequest;
