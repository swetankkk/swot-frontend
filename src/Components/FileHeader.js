import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { clearAll } from '../Utils/auth';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { renameSwot } from '../Utils/auth';

export function FileHeader({ boardId }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [fileName, setFileName] = React.useState(boardId);
	const [fileNameEdit, setFileNameEdit] = React.useState(false);
	const navigate = useNavigate();
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = () => {
		clearAll();
		navigate('/login');
	};
	const handleFileClick = () => {
		setFileNameEdit(true);
	};
	const handleFileNameUpdate = (e) => {
		setFileName(e.target.value);
	};

	const onBlur = async () => {
		const response = await renameSwot(fileName, boardId);

		if (response.data.success) {
			navigate(`/${fileName}`);
		}
	};
	const onKeyDown = (event) => {
		if (event.keyCode === 13) {
			event.target.blur();
		}
	};
	return (
		<AppBar
			sx={{
				backgroundColor: '#2F3438',
			}}
		>
			<Container maxWidth='xl'>
				<Toolbar
					disableGutters
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					{fileNameEdit ? (
						<TextField
							id='outlined-basic'
							variant='standard'
							value={fileName}
							onChange={handleFileNameUpdate}
							InputProps={{
								style: {
									color: 'white',
								},
							}}
							onBlur={onBlur}
							onKeyDown={onKeyDown}
						/>
					) : (
						<Typography
							variant='h6'
							noWrap
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
							onClick={handleFileClick}
						>
							{fileName}
						</Typography>
					)}

					<IconButton
						size='large'
						aria-label='account of current user'
						aria-controls='menu-appbar'
						aria-haspopup='true'
						onClick={handleMenu}
						color='inherit'
					>
						<AccountCircle />
					</IconButton>
					<Menu
						id='menu-appbar'
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<MenuItem onClick={handleLogout}>Logout</MenuItem>
					</Menu>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
