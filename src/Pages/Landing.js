import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { LandingHeader } from '../Components/LandingHeader';
import { Typography } from '@mui/material';

export function Landing() {
	return (
		<Container
			disableGutters={true}
			maxWidth={false}
			sx={{
				backgroundColor: '#2F3438',
				flexGrow: 1,
				height: '100vh',
				display: 'flex',
				width: '100vw',
			}}
		>
			<LandingHeader />
			<Box
				sx={{
					backgroundColor: '#2F3438',
					color: 'white',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<Typography>
					Make decisisons easier and better by using SWOT analysis tool
				</Typography>
			</Box>
		</Container>
	);
}
