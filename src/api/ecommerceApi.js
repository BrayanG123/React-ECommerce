import axios from 'axios';
import { getEnvVariables } from '../helpers';




const { VITE_API_URL } = getEnvVariables();

const ecommerceApi = axios.create({

    baseURL: VITE_API_URL

});

//TODO: Configurar interceptores
ecommerceApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        // 'x-token': localStorage.getItem('token') // todavia no tengo tokens
    }

    return config;
} )

export default ecommerceApi;
