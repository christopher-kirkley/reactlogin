import React, { useState, useEffect, useContext } from 'react'

import './App.css';
import './Token.js';


import { 
	Typography,
	Button,
	Paper,
	Container,
	AppBar,
	Grid,
	TextField,
} from "@material-ui/core"

function Login() {


	useEffect(() => {
	}, []
	)

	function handleSubmit(e) {
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value

		fetch('http://localhost:5000/login', {
			credentials: 'include',
			method: 'POST',
			headers: {
     'Authorization': 'Basic '+btoa(`${email}:${password}`)
			}
		})
		.then(res => {
			console.log(res)
			if (!res.ok) {
			}
			else {
			}
		})
		.catch(err => console.log('error'))

	}
		
	

	return (
		<div>
		<h1>Login</h1>
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

export default Login;
