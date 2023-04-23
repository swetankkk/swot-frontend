import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Utils/auth';
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

export function Register() {
	const [loggedin, setLoggedin] = React.useState(false); //To be shifted in Global State
	const navigate = useNavigate();
	const handleLogin = useCallback(() => {
		navigate('/login');
	}, [navigate]);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const handleRegister = (e) => {
		e.preventDefault();
		registerUser(name, email, password);
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
				sx={{ padding: 15, margin: 'auto', maxWidth: 'xl', height: '80%' }}
			>
				<Paper
					elevation={4}
					variant='elevation'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: '25vw',
						marginLeft: '22vw',
						padding: (4, 0, 4, 0),
					}}
				>
					<Typography variant='h4' padding={(2, 0, 0, 2)}>
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
							label='Username'
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
