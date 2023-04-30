import React, { useState } from 'react';
import { Container, TextareaAutosize, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Editor from '../Components/Editor';

export function Board() {
	const [strengthPoints, updateStrengthPoints] = useState(
		'asas\nsdfasdasdalskdjfklasdfjklaj\\nasdfasdfa'
	);

	return (
		<Container
			sx={{
				bgcolor: '#2F3438',
				width: '100%',
				display: 'flex',
				height: '100vh',
				margin: 0,
			}}
			maxWidth={false}
		>
			<Grid
				container
				sx={{
					marginLeft: ' 30%',
					marginTop: '100px',
					width: '40%',
					display: 'flex',
				}}
				spacing={0}
			>
				<Grid
					xs={6}
					sm={6}
					md={6}
					xl={6}
					style={{
						height: '200px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						alignContent: 'center',
						backgroundColor: '#999999',
						flexDirection: 'column',
					}}
				>
					<Typography
						sx={{
							backgroundColor: 'black',
							width: '99%',
							color: 'white',
							justifyContent: 'center',
							display: 'flex',
						}}
					>
						Strength
					</Typography>
					<Editor />
				</Grid>
				<Grid
					xs={6}
					sm={6}
					md={6}
					xl={6}
					style={{
						height: '200px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						alignContent: 'center',
						backgroundColor: '#999999',
						marginBottom: 10,
						flexDirection: 'column',
					}}
				>
					<Typography
						sx={{
							backgroundColor: 'black',
							width: '99%',
							color: 'white',
							justifyContent: 'center',
							display: 'flex',
						}}
					>
						Weakness
					</Typography>
					<Editor />
				</Grid>
				<Grid
					xs={6}
					sm={6}
					md={6}
					xl={6}
					style={{
						height: '200px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						alignContent: 'center',
						backgroundColor: '#999999',
						marginTop: '-52.494%',
						flexDirection: 'column',
					}}
				>
					<Typography
						sx={{
							backgroundColor: 'black',
							width: '99%',
							color: 'white',
							justifyContent: 'center',
							display: 'flex',
						}}
					>
						Opportunities
					</Typography>
					<Editor />
				</Grid>
				<Grid
					xs={6}
					sm={6}
					md={6}
					xl={6}
					style={{
						height: '200px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						alignContent: 'center',
						backgroundColor: '#999999',
						marginLeft: '0',
						marginTop: '-52.494%',
						flexDirection: 'column',
					}}
				>
					<Typography
						sx={{
							backgroundColor: 'black',
							width: '99%',
							color: 'white',
							justifyContent: 'center',
							display: 'flex',
						}}
					>
						Threats
					</Typography>
					<Editor />
				</Grid>
			</Grid>
		</Container>
	);
}
