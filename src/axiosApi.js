import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://burgerjs1011-default-rtdb.firebaseio.com/'
});

export default axiosApi