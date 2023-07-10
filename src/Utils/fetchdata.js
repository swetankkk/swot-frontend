import axios from 'axios';
import { readAccessToken } from './auth';
import { ContentPasteSearchOutlined } from '@mui/icons-material';

export const fetchSwots = async () => {
	const accessToken = await readAccessToken();
	console.log('Access Token: ', accessToken);
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
