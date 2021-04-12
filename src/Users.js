import React, { useState, useEffect } from 'react'

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

function Users() {

	const [ users, setUsers ] = useState([])

	useEffect(() => {
		fetch('http://localhost:5000/user')
		.then(res => console.log(res))
		.catch(err => console.log(err))
	}, []
	)
		
	

	return (
		<div>
		<h1>Users</h1>
		<Paper>
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

export default Users
