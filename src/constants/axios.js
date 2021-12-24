import axios from 'axios';
import {baseUrl} from '../constants/contants'

const instance = axios.create({
    baseURL: baseUrl,
});

export default instance;