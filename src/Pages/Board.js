import React, { useState, useRef, useEffect } from 'react';
import { Container, TextareaAutosize, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Editor from '../Components/Editor';

export function Board() {
	const [points, setPoints] = useState({
		strength: [''],
		weakness: [''],
		opportunities: [''],
		threats: [''],
	});
	const inputRef = useRef();

	let lastChangeType = useRef('');
	useEffect(() => {
		console.log('Use effect , current', inputRef.current);
		if (inputRef.current) {
			console.log('running focus');
			//inputRef.current.focus();
			setTimeout(() => {
				inputRef.current.focus();
			}, 0);
			/*let no = points[lastChangeType.current].length - 1;
			let focusElementId = `${lastChangeType.current}${no}`;
			console.log('FocusElement', focusElementId);
			const lastElement = inputRefs.current[focusElementId];
			console.log('lastElement : ', lastElement);
			if (lastElement) {
				lastElement.focus();
			}*/
		}
	}, [points]);
	const handleChange = (index, event, type) => {
		const newValues = { ...points };
		newValues[type][index] = event.target.value;

		setPoints(newValues);
	};
	const handleKeyDown = (event, type) => {
		if (event.keyCode === 13) {
			event.preventDefault();
			const { [type]: arr } = points;

			if (points[type].length < 4) {
				setPoints((points) => ({ ...points, [type]: [...arr, ''] }));
				lastChangeType.current = type;
				//inputRefs.current.focus();
			} else console.log('3 Points allowed max	');
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
			<Grid
				container
				sx={{
					marginLeft: ' 25%',
					marginTop: '100px',
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

						backgroundColor: '#999999',
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
						}}
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
						backgroundColor: '#999999',
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
							marginLeft: '8px',
						}}
					>
						Weakness
					</Typography>
					{Array.from(points.weakness).map((_, index) => (
						<Editor
							value={_}
							onChange={(e) => handleChange(index, e, 'weakness')}
							onKeyDown={(e) => handleKeyDown(e, 'weakness')}
							id={'weakness' + index}
						/>
					))}
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
						backgroundColor: '#999999',
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
						}}
					>
						Opportunities
					</Typography>
					{Array.from(points.opportunities).map((_, index) => (
						<Editor
							value={_}
							onChange={(e) => handleChange(index, e, 'opportunities')}
							onKeyDown={(e) => handleKeyDown(e, 'opportunities')}
							id={'opportunities' + index}
						/>
					))}
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
						backgroundColor: '#999999',
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
							marginLeft: '8px',
						}}
					>
						Threats
					</Typography>
					{Array.from(points.threats).map((_, index) => (
						<Editor
							value={_}
							onChange={(e) => handleChange(index, e, 'threats')}
							onKeyDown={(e) => handleKeyDown(e, 'threats')}
							id={'threats' + index}
						/>
					))}
				</Grid>
			</Grid>
		</Container>
	);
}
