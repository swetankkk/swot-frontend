import React, { useCallback, useState } from 'react';
import { Button, Stack, Container, Paper, TextField } from '@mui/material';
import { Box } from '@mui/material';
//import { makeStyles } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Utils/auth';
import { LogoHeader } from '../Components/LogoHeader';
import Divider from '@mui/material/Divider';

/*const useStyles = makeStyles((theme) => ({
	customContainer: {
		paddingLeft: '0', // override the default padding value
		paddingRight: '0',
	},
}));*/

export function Login() {
	const [loggedin, setLoggedin] = React.useState(false); //To be shifted in Global State
	const navigate = useNavigate();

	const handleRegister = useCallback(() => {
		navigate('/register');
	}, [navigate]);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = (e) => {
		e.preventDefault();
		console.log('Running Login Function');

		loginUser(email, password);
	};
	const handleOnChange = (e) => {
		if (e.target.name === 'email') {
			setEmail(e.target.value);
		} else if (e.target.name === 'password') {
			setPassword(e.target.value);
		}
	};
	//const classes = useStyles();

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
				paddingRight: '0%',
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
					height: '70vh',
					display: 'flex',
					marginTop: ' 10vh',
				}}
			>
				<Paper
					elevation={4}
					variant='elevation'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '33vh',
						width: '25vw',
						marginLeft: '22vw',
					}}
				>
					<Typography
						variant='h4'
						padding={(4, 0, 0, 3)}
						sx={{ display: 'flex', justifyContent: 'center' }}
					>
						Log in
					</Typography>
					<Stack spacing={2} sx={{ display: 'flex', padding: (0, 2, 0, 3) }}>
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
