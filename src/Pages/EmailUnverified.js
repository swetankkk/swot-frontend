import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { AuthenticatedHeader } from '../Components/AuthenticatedHeader';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';
import { sendEmail } from '../Utils/auth';

const Item = styled(Paper)(({ theme }) => ({
	//backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	//...theme.typography.body2,
	//padding: theme.spacing(2),
	textAlign: 'center',
	backgroundColor: '#999999',
	height: '100%',

	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-around',
	padding: '10px',
}));

export function EmailUnverified() {
	const [success, setSuccess] = React.useState(false);
	const [error, setError] = React.useState(false);
	const handleResend = () => {
		const res = sendEmail();
		res.then((res) => {
			if (res?.data?.success) {
				setSuccess(true);
			} else setError(true);
		});
	};

	return (
		<Container
			disableGutters={true}
			sx={{
				bgcolor: '#2F3438',
				padding: 10,
				flexGrow: 1,

				display: 'flex',
				margin: 0,
				minHeight: '100vh',
				justifyContent: 'center',
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
				<Grid
					xs={12}
					sm={12}
					md={12}
					xl={12}
					style={{
						height: '400px',
						display: 'flex',
					}}
				>
					<Item
						sx={{
							backgroundColor: 'white',
						}}
					>
						<Typography variant='h4'>Please verify your email</Typography>
						<Typography variant='h6'>
							We have sent you an email to verify your email address. Please
							verify to continue You can also click the resend email Button
							below to resend the mail
						</Typography>
						{success && (
							<Typography variant='h6' color='green'>
								Email send Successfully
							</Typography>
						)}
						{error && (
							<Typography variant='h6' color='red'>
								Error sending Email
							</Typography>
						)}
						<Button variant='contained' onClick={handleResend}>
							Resend Email
						</Button>
					</Item>
				</Grid>
			</Grid>
		</Container>
	);
}
