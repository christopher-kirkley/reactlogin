import React, { useState, useEffect, useContext } from 'react'

import './App.css';
import './Token.js';

import { SessionContext } from './hooks/SessionContext'

import { useHistory } from "react-router-dom";

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

	const { session, setSession } = useContext(SessionContext)

	const history = useHistory()

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
		.then(res => console.log(res))
		.then(res => {
			history.push('/dashboard')
			sessionStorage.setItem('session', 'true')
		})
		
		// .then(res => {
		// 	console.log(res)
		// 	if (!res.ok) {
		// 	}
		// 	else {
		// 		console.log(res)
		// 		setUser(truek

		// 		history.push('/dashboard')
		// 	}
		// })
		// .catch(err => console.log('error'))

	}
		

	return (
				<div>
				<h1>Login</h1>
				{ session ?
					<h1>logged in</h1>
					:
					null
				}
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


}

export default Login;
