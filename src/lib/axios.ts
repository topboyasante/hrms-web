import { BASE_API_URL } from '$env/static/private';
import axios from 'axios';

const axiosfn = axios.create({
	baseURL: BASE_API_URL
});

export default axiosfn;
