import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';
import './Token.js';

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

function Login() {

	const [ jwt, setJwt ] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value

		fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
     'Authorization': 'Basic '+btoa(`${email}:${password}`)
			}
		})
		.then(res => res.json())
		.then(json => setJwt(json['token']))
		.then(res => console.log(jwt))

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
