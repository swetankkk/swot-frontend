import React, { useCallback, useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { AuthenticatedHeader } from '../Components/AuthenticatedHeader';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../Utils/auth';
import IconButton from '@mui/material/IconButton';
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';
import { fetchSwots } from '../Utils/manipulatedata';

const Item = styled(Paper)(({ theme }) => ({
	//backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	//...theme.typography.body2,
	//padding: theme.spacing(2),
	textAlign: 'center',
	backgroundColor: '#999999',
	height: '100%',
	width: '100%',
	display: 'flex',

	alignItems: 'center',
	justifyContent: 'center',
}));

export function Home() {
	const [data, setData] = useState();
	const navigate = useNavigate();
	useEffect(() => {
		const isAuthenticated = async () => {
			const response = await checkAuth();
			if (!response) navigate('/login');
		};
		isAuthenticated();
		fetchSwots().then((response) => {
			setData(Object.keys(response.data.data.swots));
		});
	}, [navigate]);
	const handleClick = (event, _) => {
		console.log('Value :', _);
		navigate(`/${_}`);
	};
	return (
		<Container
			disableGutters={true}
			sx={{
				bgcolor: '#2F3438',
				padding: 10,
				flexGrow: 1,

				display: 'flex',
				flexDirection: 'column',
				margin: 0,
				height: '100vh',
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
					sm={4}
					md={4}
					xl={3}
					key={'plus'}
					style={{
						height: '200px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						alignContent: 'center',
					}}
				>
					<Item
						sx={{
							backgroundColor: 'white',
						}}
					>
						<IconButton sx={{ color: 'black' }}>
							<ControlPointSharpIcon fontSize='large' />
							<Typography>New</Typography>
						</IconButton>
					</Item>
				</Grid>
				{data &&
					data.map((_, index) => (
						<Grid
							xs={12}
							sm={4}
							md={4}
							xl={3}
							key={index}
							style={{
								height: '200px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Item sx={{ backgroundColor: 'white' }}>
								{' '}
								<IconButton
									onClick={(e) => handleClick(e, _)}
									sx={{ color: 'black' }}
								>
									<Typography>{_}</Typography>
								</IconButton>
							</Item>
						</Grid>
					))}
			</Grid>
		</Container>
	);
}
