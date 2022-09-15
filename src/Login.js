import React, { useState } from "react";
import { Button, Container, Paper, TextField } from "@mui/material";
import Divider from "@mui/material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/material";

export function Login() {
	const [loggedin, setLoggedin] = React.useState(false); //To be shifted in Global State

	return (
		<Container style={{ padding: 20, margin: "auto", maxWidth: "xl" }}>
			<form>
				<Paper>
					<Box>
						<TextField
							id="outlined-basic"
							label="Username"
							variant="outlined"
							fullWidth
						/>
					</Box>
					<Box>
						<TextField
							id="outlined-basic"
							label="Password"
							variant="outlined"
							fullWidth
						/>
					</Box>
					<Box>
						<Button variant="contained" color="primary" fullWidth>
							Login
						</Button>
					</Box>
				</Paper>
			</form>
		</Container>
	);
}
