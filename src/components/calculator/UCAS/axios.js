import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.ucas.com/api/tariff/v1/view/670c6d53',
    headers: {
        headerType: 'example header type'
    }
});

export default instance;