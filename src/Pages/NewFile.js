import React, { useState } from 'react';
import {
	Button,
	Stack,
	Container,
	Paper,
	TextField,
	Typography,
	Box,
} from '@mui/material';
import { AuthenticatedHeader } from '../Components/AuthenticatedHeader';
import { updateSwot } from '../Utils/manipulatedata';
import { useNavigate } from 'react-router-dom';

export function NewFile() {
	const [name, setName] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const handleOnChange = (e) => {
		setName(e.target.value);
	};
	const handleSave = async () => {
		console.log('Handle SAve');
		const points = {
			opportunities: [' '],
			strength: [' '],
			threats: [' '],
			weakness: [' '],
		};
		const response = await updateSwot(name, points);
		if (response.data.success) {
			navigate(`/${name}`);
		}
	};
	const handleClear = () => {
		setName('');
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
						Enter Name
					</Typography>
					<Stack spacing={2} sx={{ display: 'flex', padding: (0, 1, 0, 1) }}>
						<TextField
							variant='outlined'
							fullWidth
							value={name}
							name='name'
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
							<Button variant='contained' onClick={handleSave}>
								Save
							</Button>
							<Button variant='contained' onClick={handleClear}>
								Clear
							</Button>
						</Stack>
					</Box>
				</Paper>
			</Container>
		</Container>
	);
}
