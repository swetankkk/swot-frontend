import React, { useCallback, ChangeEvent } from 'react';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function LandingHeader() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [loggedin, setLoggedin] = React.useState(false); //To be shifted in Global State
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const navigate = useNavigate();
	const handleLogin = useCallback(() => {
		navigate('/login');
	}, [navigate]);
	const theme = useTheme();
	function generateStyles(padding, margin) {
		return {
			padding: {
				xs: padding[0], // padding for extra-small screens (less than 600px)
				sm: padding[1], // padding for small screens (between 600px and 960px)
				md: padding[2], // padding for medium screens (between 960px and 1280px)
				lg: padding[3], // padding for large screens (between 1280px and 1920px)
				xl: padding[4], // padding for extra-large screens (above 1920px)
			},
			margin: {
				xs: margin[0], // margin for extra-small screens (less than 600px)
				sm: margin[1], // margin for small screens (between 600px and 960px)
				md: margin[2], // margin for medium screens (between 960px and 1280px)
				lg: margin[3], // margin for large screens (between 1280px and 1920px)
				xl: margin[4], // margin for extra-large screens (above 1920px)
			},
		};
	}

	const styles = generateStyles(
		[1, 1, 1, 1, 1], // padding for each breakpoint
		[1, 1, 1, 1, 1] // margin for each breakpoint
	);
	return (
		<Box
			sx={{
				padding: {
					...styles.padding,
				},
				margin: {
					...styles.margin,
				},
			}}
		>
			<AppBar
				sx={{
					backgroundColor: '#2F3438',
				}}
			>
				<Container maxWidth='xl' position='static'>
					<Toolbar disableGutters>
						<Typography
							variant='h6'
							noWrap
							component='a'
							href='/'
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							SWOTIFY.APP
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign='center'>{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Typography
							variant='h5'
							noWrap
							component='a'
							href=''
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							LOGO 2
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{page}
								</Button>
							))}
						</Box>
						{loggedin ? (
							<Box sx={{ flexGrow: 0 }}>
								<Tooltip title='Open settings'>
									<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
										<Avatar
											alt='Remy Sharp'
											src='/static/images/avatar/2.jpg'
										/>
									</IconButton>
								</Tooltip>

								<Menu
									sx={{ mt: '45px' }}
									id='menu-appbar'
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
								>
									{settings.map((setting) => (
										<MenuItem key={setting} onClick={handleCloseUserMenu}>
											<Typography textAlign='center'>{setting}</Typography>
										</MenuItem>
									))}
								</Menu>
							</Box>
						) : (
							<MenuItem key={'Login'} onClick={handleLogin}>
								<Typography textAlign='center'>Login</Typography>
							</MenuItem>
						)}
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
