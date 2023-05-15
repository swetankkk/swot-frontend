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
	//console.log('Running register User');
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
		return res;
	} catch (err) {
		return err.response;
	}
};
export const saveToken = async (tokens) => {
	if (tokens.access) {
		sessionStorage.setItem('access', JSON.stringify(tokens.access));
		if (tokens.refresh)
			sessionStorage.setItem('refresh', JSON.stringify(tokens.refresh));
	} else clearAll();
};

export const clearAll = async () => {
	sessionStorage.clear();
};

export const readAccessToken = async () => {
	const accessToken = JSON.parse(sessionStorage.getItem('access'));
	if (accessToken) return accessToken;
	else return false;
};

export const checkAccessToken = async () => {
	const accessToken = await readAccessToken();
	if (accessToken) {
		if (accessToken.expires) {
			const accessTokenExpire = new Date(accessToken.expires);
			const formattedAccessTokenExpire = accessTokenExpire.getTime();
			const currentDateTime = new Date().getTime();
			if (formattedAccessTokenExpire > currentDateTime) return true;
			else return false;
		} else return false;
	} else return false;
};
export const readRefreshToken = async () => {
	const refreshToken = JSON.parse(sessionStorage.getItem('refresh'));
	if (refreshToken) return refreshToken;
	else return false;
};
export const checkRefreshToken = async () => {
	const refreshToken = await readRefreshToken();
	if (refreshToken) {
		if (refreshToken.expires) {
			const refreshTokenExpire = new Date(refreshToken.expires);
			const formattedRefreshTokenExpire = refreshTokenExpire.getTime();
			const currentDateTime = new Date().getTime();
			if (formattedRefreshTokenExpire > currentDateTime) return true;
			else return false;
		} else return false;
	} else return false;
};
export const checkAuth = async () => {
	const accessTokenValid = await checkAccessToken();

	if (accessTokenValid) return true;
	else {
		const refreshTokenValid = await checkRefreshToken();

		if (refreshTokenValid)
			//call new access token from api /refresh-tokens
			return true;
		return false;
	}
	//check refresh token if its valid ask new login token , if not send to register to reauthenticate
	//
};
