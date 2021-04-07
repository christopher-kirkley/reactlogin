import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import { 
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Button,
	Paper,
	Container,
	AppBar,
	Grid,
	TextField,
} from "@material-ui/core"

function Register() {

	function handleSubmit(e) {
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value
	}

	return (
		<div>
		<h1>Register</h1>
		<Paper>
		<form onSubmit={handleSubmit}>
		<Grid
			container
			direction="column"
			alignItems="center"
			spacing={2}>
			<Grid item xs={12}>
				<TextField id="email" label="Email"/>
			</Grid>
			<Grid item>
				<TextField id="password" label="Password"/>
			</Grid>
			<Grid item>
				<Button
					color="primary"
					variant="outlined"
					type="submit"
					>
					Submit
				</Button>
			</Grid>
		</Grid>
		</form>
		</Paper>
		</div>
	)


  // return (
  //   <div className="App">
			// <AppBar position="static">
				// <Toolbar>
					// <Button onClick={handleLogin} color="inherit">Login</Button>
					// <Button onClick={handleRegister} color="inherit">Register</Button>
				// </Toolbar>
			// </AppBar>
  //   </div>
  // );
}

export default Register;
