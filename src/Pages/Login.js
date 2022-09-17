import React, { useCallback, useState } from "react";
import { Button, Stack, Container, Paper, TextField } from "@mui/material";
import Divider from "@mui/material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Utils/auth";

//import axios from "axios";

export function Login() {
	const [loggedin, setLoggedin] = React.useState(false); //To be shifted in Global State
	const navigate = useNavigate();

	const handleSignup = useCallback(() => {
		navigate("/signup");
	}, [navigate]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleLogin = (e) => {
		e.preventDefault();
		loginUser(email, password);
		console.log("Running Login Function");
	};
	const handleOnChange = (e) => {
		if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "password") {
			setPassword(e.target.value);
		}
	};

	return (
		<Container
			sx={{ padding: 5, margin: "auto", maxWidth: "xl", height: "80%" }}
		>
			<form onSubmit={handleLogin}>
				<Paper elevation={4} variant="elevation">
					<Typography variant="h4" gutterBottom padding={(2, 0, 0, 2)}>
						Login
					</Typography>
					<Stack padding={(0, 0, 0, 2)} spacing={2}>
						<TextField
							id="outlined-basic"
							label="Username"
							variant="outlined"
							fullWidth
							value={email}
							name="email"
							onChange={handleOnChange}
						/>

						<TextField
							id="outlined-basic"
							label="password"
							variant="outlined"
							fullWidth
							type="password"
							value={password}
							name="password"
							onChange={handleOnChange}
						/>
					</Stack>
					<Box>
						<Stack
							direction="row"
							spacing={4}
							justifyContent="center"
							paddingY={1}
						>
							<Button variant="contained" type="submmit">
								Login
							</Button>
							<Button variant="contained" onClick={handleSignup}>
								Sign Up
							</Button>
						</Stack>
					</Box>
				</Paper>
			</form>
		</Container>
	);
}
