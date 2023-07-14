import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { LandingHeader } from '../Components/LandingHeader';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export function Landing() {
	return (
		<>
			<LandingHeader />
			<Box sx={{ padding: 5 }}>
				SWOTIFY.APP Making decisisons easier and better.
			</Box>
		</>
	);
}
