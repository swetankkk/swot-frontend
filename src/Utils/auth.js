import axios from 'axios';
import Config from '../config.json';

export const loginUser = async (email, password) => {
	try {
		const res = await axios({
			method: 'POST',
			url: Config.BACKEND_URL + `/v1/auth/login`,
			data: {
				email: email,
				password: password,
			},
		});
		console.log('Response from Login :', res);
		if (res.data.status === 'success') {
			alert('Logged in successfully!');
			/*window.setTimeout(() => {
				location.assign("/");
			}, 1500);*/
		}
	} catch (err) {
		alert(err.response.data.message);
	}
};

export const registerUser = async (name, email, password) => {
	try {
		const res = await axios({
			method: 'POST',
			url: Config.BACKEND_URL + `/v1/auth/register`,
			headers: { 'Content-Type': 'application/json' },

			data: {
				name: name,
				email: email,
				password: password,
			},
		});
		console.log('Response from Register :', res);
		if (res.data.status === 'success') {
			alert('Register successful');
		}
	} catch (err) {
		alert(err.response.data.message);
	}
};
