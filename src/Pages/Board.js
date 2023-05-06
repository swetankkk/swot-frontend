import React, { useState, useRef, useEffect } from 'react';
import { Container, TextareaAutosize, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Editor from '../Components/Editor';
import { AuthenticatedHeader } from '../Components/AuthenticatedHeader';

export function Board() {
	const [points, setPoints] = useState({
		strength: [''],
		weakness: [''],
		opportunities: [''],
		threats: [''],
	});
	const inputRef = useRef();
	const [displayError, setError] = useState({
		strength: false,
		weakness: false,
		opportunities: false,
		threats: false,
	});
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [
		points.strength.length,
		points.weakness.length,
		points.opportunities.length,
		points.threats.length,
	]);
	const handleChange = (index, event, type) => {
		const newValues = { ...points };
		newValues[type][index] = event.target.value;

		setPoints(newValues);
	};
	const handleKeyDown = (event, type) => {
		if (event.keyCode === 13) {
			event.preventDefault();
			const { [type]: arr } = points;

			if (points[type].length < 3) {
				setPoints((points) => ({ ...points, [type]: [...arr, ''] }));
			} else {
				setError((displayError) => ({ ...displayError, [type]: true }));
				setTimeout(() => {
					setError((displayError) => ({ ...displayError, [type]: false }));
				}, 3000);
			}
		}
	};

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
			<AuthenticatedHeader />

			<Grid
				container
				sx={{
					marginLeft: ' 25%',
					marginTop: '80px',
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
						height: '240px',
						display: 'flex',

						backgroundColor: 'white',
						flexDirection: 'column',
					}}
					sx={{ marginRight: '0px' }}
				>
					<Typography
						sx={{
							backgroundColor: 'black',
							width: '100%',
							color: 'white',
							justifyContent: 'center',
							display: 'flex',
							paddingTop: '4px',
							fontFamily: 'Georgia',
						}}
						variant='h6'
					>
						Strength
					</Typography>
					{Array.from(points.strength).map((_, index) => (
						<Editor
							value={_}
							onChange={(e) => handleChange(index, e, 'strength')}
							onKeyDown={(e) => handleKeyDown(e, 'strength')}
							id={'strength' + index}
							ref={points.strength.length - 1 === index ? inputRef : null}
						/>
					))}
					{displayError.strength ? (
						<Typography sx={{ paddingLeft: '30px', color: '#BA0F30' }}>
							Maximum 3 points allowed
						</Typography>
					) : null}
				</Grid>

				<Grid
					xs={6}
					sm={6}
					md={6}
					xl={6}
					style={{
						height: '240px',
						display: 'flex',
						marginLeft: '0px',
						justifyContent: 'flex-start',
						backgroundColor: 'white',
						flexDirection: 'column',
					}}
				>
					<Typography
						sx={{
							backgroundColor: 'black',
							width: '100%',
							color: 'white',
							justifyContent: 'center',
							display: 'flex',
							paddingTop: '4px',
							fontFamily: 'Georgia',
						}}
						variant='h6'
					>
						Weakness
					</Typography>
					{Array.from(points.weakness).map((_, index) => (
						<Editor
							value={_}
							onChange={(e) => handleChange(index, e, 'weakness')}
							onKeyDown={(e) => handleKeyDown(e, 'weakness')}
							id={'weakness' + index}
							ref={points.weakness.length - 1 === index ? inputRef : null}
						/>
					))}
					{displayError.weakness ? (
						<Typography sx={{ paddingLeft: '30px', color: '#BA0F30' }}>
							Maximum 3 points allowed
						</Typography>
					) : null}
				</Grid>
				<Grid
					xs={6}
					sm={6}
					md={6}
					xl={6}
					style={{
						height: '240px',
						display: 'flex',
						justifyContent: 'flex-start',
						alignContent: 'center',
						backgroundColor: 'white',
						marginTop: '-42.494%',
						flexDirection: 'column',
					}}
				>
					<Typography
						sx={{
							backgroundColor: 'black',
							width: '100%',
							color: 'white',
							justifyContent: 'center',
							display: 'flex',
							marginRight: '8px',
							fontFamily: 'Georgia',
						}}
						variant='h6'
					>
						Opportunities
					</Typography>
					{Array.from(points.opportunities).map((_, index) => (
						<Editor
							value={_}
							onChange={(e) => handleChange(index, e, 'opportunities')}
							onKeyDown={(e) => handleKeyDown(e, 'opportunities')}
							id={'opportunities' + index}
							ref={points.opportunities.length - 1 === index ? inputRef : null}
						/>
					))}
					{displayError.opportunities ? (
						<Typography sx={{ paddingLeft: '30px', color: '#BA0F30' }}>
							Maximum 3 points allowed
						</Typography>
					) : null}
				</Grid>
				<Grid
					xs={6}
					sm={6}
					md={6}
					xl={6}
					style={{
						height: '240px',
						display: 'flex',
						justifyContent: 'flex-start',
						alignContent: 'center',
						backgroundColor: 'white',
						marginLeft: '0',
						marginTop: '-42.494%',
						flexDirection: 'column',
					}}
				>
					<Typography
						sx={{
							backgroundColor: 'black',
							width: '100%',
							color: 'white',
							justifyContent: 'center',
							display: 'flex',
							fontFamily: 'Georgia',
						}}
						variant='h6'
					>
						Threats
					</Typography>
					{Array.from(points.threats).map((_, index) => (
						<Editor
							value={_}
							onChange={(e) => handleChange(index, e, 'threats')}
							onKeyDown={(e) => handleKeyDown(e, 'threats')}
							id={'threats' + index}
							ref={points.threats.length - 1 === index ? inputRef : null}
						/>
					))}
					{displayError.threats ? (
						<Typography sx={{ paddingLeft: '30px', color: '#BA0F30' }}>
							Maximum 3 points allowed
						</Typography>
					) : null}
				</Grid>
			</Grid>
		</Container>
	);
}
