import axios from 'axios';

export const loginUser = async (email, password) => {
	try {
		const res = await axios({
			method: 'POST',
			url: `${process.env.REACT_APP_API_URL}/v1/auth/login`,
			data: {
				email: email,
				password: password,
			},
		});
		return res;
	} catch (err) {
		return err.response;
	}
};

export const registerUser = async (name, email, password) => {
	//console.log('Running register User');
	try {
		const res = await axios({
			method: 'POST',
			url: `${process.env.REACT_APP_API_URL}/v1/auth/register`,
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
	const refreshToken = await readRefreshToken();

	if (accessTokenValid) return true;
	else {
		const refreshTokenValid = await checkRefreshToken();

		if (refreshTokenValid) {
			try {
				const res = await axios({
					method: 'POST',
					url: `${process.env.REACT_APP_API_URL}/v1/auth/refresh-tokens`,
					headers: { 'Content-Type': 'application/json' },
					data: {
						refreshToken: refreshToken.token,
					},
				});
				saveToken(res.data);
				return true;
			} catch (err) {
				return err.response;
			}
		}
		return false;
	}
};

export const renameSwot = async (name, boardId) => {
	try {
		const token = await readAccessToken();

		const res = await axios({
			method: 'PATCH',
			url: `${process.env.REACT_APP_API_URL}/v1/auth/renameswot/${boardId}`,
			headers: { Authorization: `Bearer ${token.token}` },
			data: {
				name: name,
			},
		});
		return res;
	} catch (err) {
		return err.response;
	}
};
