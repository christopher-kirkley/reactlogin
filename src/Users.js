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
		fetch('http://localhost:5000/user', {
			credentials: 'include'
		})
		.then(res => {
			if( !res.ok ) {
				return {'users': users}
			} else {
				return res.json()
			}
		})
		.then(data => setUsers(data['users']))
	}, []
	)
		
	

	return (
		<div>
		<h1>Users</h1>
		{ users.map((user) => {
			return [
				<li>{user.name} - {user.password}</li>
			]

		})}
		<Paper>
		</Paper>
		</div>
	)


}

export default Users
