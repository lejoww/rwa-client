import axios from 'axios';

let baseURL;

if (window.location.href.toString().startsWith('http://localhost:8080')) {
	baseURL = 'http://127.0.0.1:8000/';
} else {
	baseURL = 'https://rwaapirest.herokuapp.com/';
}

const accessToken = localStorage.getItem('access_token');

const axiosAPI = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: accessToken ? `JWT ${accessToken}` : null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

export function setNewHeaders(response) {
	axiosAPI.defaults.headers['Authorization'] = `JWT ${response.access}`;
	localStorage.setItem('access_token', response.access);
	localStorage.setItem('refresh_token', response.refresh);
}

export default axiosAPI;
