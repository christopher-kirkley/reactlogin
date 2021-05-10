import React, { useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'

import logo from './logo.svg';
import './App.css';

import { 
	Paper,
} from "@material-ui/core"

import { useHistory } from "react-router-dom";

import { UserContext } from './hooks/UserContext'

function Users(props) {

	const history = useHistory()

	const [ users, setUsers ] = useState([])

	const { user, setUser } = useContext(UserContext)

	useEffect(() => {
		fetch('http://localhost:5000/user',
			{credentials: 'include'})
		.then(res => {
			if( !res.ok ) {
				return []
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
		{ users ?
			users.map((user) => {
			return [
				<li>{user.name} - {user.password}</li>
			]

		})
		:
		null}
		<Paper>
		</Paper>
		</div>
	)


}

export default Users
