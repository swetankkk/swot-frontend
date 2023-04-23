import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export function LogoHeader() {
	return (
		<Container
			maxWidth={false}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				padding: 0,
			}}
		>
			<Typography
				variant='h3'
				noWrap
				component='a'
				href='/'
				sx={{
					fontFamily: 'monospace',
					fontWeight: 1700,
					letterSpacing: '.3rem',
					color: '#FFFFFF',
					textDecoration: 'none',
				}}
			>
				SWOTIFY.APP
			</Typography>
		</Container>
	);
}
