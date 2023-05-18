import React, { useCallback, useState, useContext } from 'react';
import { Button, Stack, Container, Paper, TextField } from '@mui/material';
import { Box } from '@mui/material';
//import { makeStyles } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { loginUser, saveToken } from '../Utils/auth';
import { LogoHeader } from '../Components/LogoHeader';
import Divider from '@mui/material/Divider';
import { UserContext } from '../context/userContext';

export function Login() {
	const [error, setError] = React.useState(false); //To be shifted in Global State
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const handleRegister = useCallback(() => {
		navigate('/register');
	}, [navigate]);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = async (e) => {
		e.preventDefault();
		const response = await loginUser(email, password);
		if (response.data.success) {
			setError(null);
			setUser(response.data.data.user);

			saveToken(response.data.data.tokens);
			navigate('/home');
		} else {
			setError(response.data.message);
		}
	};
	const handleOnChange = (e) => {
		if (e.target.name === 'email') {
			setEmail(e.target.value);
		} else if (e.target.name === 'password') {
			setPassword(e.target.value);
		}
	};

	return (
		<Container
			sx={{
				bgcolor: '#2F3438',
				width: '100%',
				display: 'flex',
				flexDirection: ' column',
				margin: 0,
				boxSizing: 'border-box',

				padding: 0,
				height: '100vh',
			}}
			maxWidth={false}
		>
			<LogoHeader />
			{/*<Divider
				style={{
					margin: 0,
					padding: 0,
					width: '100%',
					boxSizing: 'border-box',
				}}
			/>*/}
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '100px',
				}}
			>
				<Paper
					elevation={4}
					variant='elevation'
					sx={{
						display: 'flex',
						minHeight: '200px',
						flexDirection: 'column',
						minWidth: '300px',
						maxWidth: '500px',
						maxHeight: '365px',
						padding: '10px',
						width: '25vw',
					}}
				>
					<Typography
						variant='h4'
						padding={(0, 0, 0, 2)}
						sx={{ display: 'flex', justifyContent: 'center' }}
					>
						Log in
					</Typography>
					<Stack spacing={2} sx={{ display: 'flex', padding: (0, 1, 0, 1) }}>
						<TextField
							label='Email'
							variant='outlined'
							fullWidth
							value={email}
							name='email'
							onChange={handleOnChange}
						/>

						<TextField
							label='Password'
							variant='outlined'
							fullWidth
							type='password'
							value={password}
							name='password'
							onChange={handleOnChange}
						/>
						{error && <Typography>{error}</Typography>}
					</Stack>
					<Box>
						<Stack
							direction='row'
							spacing={4}
							justifyContent='center'
							paddingY={1}
						>
							<Button variant='contained' onClick={handleLogin}>
								Login
							</Button>
							<Button variant='contained' onClick={handleRegister}>
								Register
							</Button>
						</Stack>
					</Box>
				</Paper>
			</Container>
		</Container>
	);
}
