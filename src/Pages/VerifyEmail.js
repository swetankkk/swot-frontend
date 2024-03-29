import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyEmail } from '../Utils/auth';
import { Container, Typography, Button } from '@mui/material';
import { AuthenticatedHeader } from '../Components/AuthenticatedHeader';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
	//backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	//...theme.typography.body2,
	//padding: theme.spacing(2),
	textAlign: 'center',
	backgroundColor: '#999999',
	height: '100%',

	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-around',
	padding: '10px',
}));

export function VerifyEmail() {
	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const bValue = queryParams.get('token');
	const [success, setSuccess] = useState();
	useEffect(() => {
		const res = verifyEmail(bValue);

		res.then((res) => {
			//console.log('Res :', res);
			if (res?.data?.success) setSuccess(true);
		});
	});
	const handleLogin = () => {
		navigate('/login');
	};
	return (
		<Container
			disableGutters={true}
			sx={{
				bgcolor: '#2F3438',
				padding: 10,
				flexGrow: 1,

				display: 'flex',
				margin: 0,
				minHeight: '100vh',
				justifyContent: 'center',
			}}
			maxWidth={false}
		>
			<AuthenticatedHeader />
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
				sx={{ padding: '50px' }}
			>
				<Grid
					xs={12}
					sm={12}
					md={12}
					xl={12}
					style={{
						height: '400px',
						display: 'flex',
					}}
				>
					<Item
						sx={{
							backgroundColor: 'white',
						}}
					>
						{success && <Typography variant='h4'>Email verified</Typography>}
						<Typography variant='h6'>
							Please login again to proceed furth
						</Typography>

						<Button variant='contained' onClick={handleLogin}>
							Login
						</Button>
					</Item>
				</Grid>
			</Grid>
		</Container>
	);
}
