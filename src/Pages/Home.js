import React, { useCallback, useState } from 'react';
import { Button, STack, Container, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { AuthenticatedHeader } from '../Components/AuthenticatedHeader';

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
	const data = new Array(10);
	return (
		<Container
			disableGutters={true}
			sx={{
				bgcolor: '#2F3438',
				padding: 10,
				flexGrow: 1,
				width: '100%',
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
				{Array.from(data).map((_, index) => (
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
						<Item sx={{ backgroundColor: 'white' }}>Topic Name</Item>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
