import axios from 'axios';
import { readAccessToken } from './auth';

export const fetchSwots = async () => {
	const accessToken = await readAccessToken();
	try {
		const res = await axios({
			method: 'GET',
			url: `${process.env.REACT_APP_API_URL}/v1/auth/getswots`,
			headers: {
				Authorization: `Bearer ${accessToken.token}`,
			},
		});
		return res;
	} catch (err) {
		return err.response;
	}
};
export const fetchSwot = async (id) => {
	const accessToken = await readAccessToken();
	try {
		const res = await axios({
			method: 'GET',
			url: `${process.env.REACT_APP_API_URL}/v1/auth/individualswot/${id}`,
			headers: {
				Authorization: `Bearer ${accessToken.token}`,
			},
		});
		return res;
	} catch (err) {
		return err.response;
	}
};
export const updateSwot = async (id, points) => {
	const accessToken = await readAccessToken();
	//console.log('Points :', points);
	try {
		const res = await axios({
			method: 'PATCH',
			url: `${process.env.REACT_APP_API_URL}/v1/auth/individualswot/${id}`,
			headers: {
				Authorization: `Bearer ${accessToken.token}`,
			},
			data: points,
		});
		return res;
	} catch (err) {
		return err.response;
	}
};
