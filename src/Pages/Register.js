import React, { useCallback, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, saveToken } from '../Utils/auth';
import {
	Button,
	Stack,
	Container,
	Paper,
	TextField,
	Typography,
	Box,
} from '@mui/material';
import { LogoHeader } from '../Components/LogoHeader';
import { UserContext } from '../context/userContext';

export function Register() {
	const [error, setError] = React.useState(false); //To be shifted in Global State
	const { user, setUser } = useContext(UserContext);

	const navigate = useNavigate();
	const handleLogin = useCallback(() => {
		navigate('/login');
	}, [navigate]);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');

	const handleRegister = async (e) => {
		e.preventDefault();
		const response = await registerUser(name, email, password);
		if (response.data.success) {
			setError(null);
			setUser(response.data.data.user);
			//console.log('Tokens : ', response.data.data.tokens);
			saveToken(response.data.data.tokens);
			navigate('/home');
		} else {
			setError(response.data.message);
		}
		//console.log('Response : ', response);
	};
	const handleOnChange = (e) => {
		if (e.target.name === 'email') {
			setEmail(e.target.value);
		} else if (e.target.name === 'password') {
			setPassword(e.target.value);
		} else if (e.target.name === 'name') {
			setName(e.target.value);
		}
	};
	return (
		<Container
			sx={{
				bgcolor: '#2F3438',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				margin: 0,
				paddingRight: '0%',
				height: '100vh',
				boxSizing: 'border-box',
			}}
			maxWidth={false}
		>
			<LogoHeader />

			<Container
				sx={{
					maxWidth: 'xl',
					height: '80%',
					display: 'flex',
					alignContent: 'center',
					justifyContent: 'center',
					maxHeight: '400px',
					marginTop: '100px',
				}}
			>
				<Paper
					elevation={4}
					variant='elevation'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: '25vw',
					}}
				>
					<Typography
						variant='h4'
						padding={(2, 0, 0, 2)}
						sx={{ display: 'flex', justifyContent: 'center' }}
					>
						Register
					</Typography>
					<Stack padding={(0, 0, 0, 2)} spacing={2}>
						<TextField
							label='Name'
							variant='outlined'
							fullWidth
							value={name}
							name='name'
							onChange={handleOnChange}
						/>
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
							<Button variant='contained' onClick={handleRegister}>
								Register
							</Button>
							<Button variant='contained' onClick={handleLogin}>
								Login
							</Button>
						</Stack>
					</Box>
				</Paper>
			</Container>
		</Container>
	);
}
