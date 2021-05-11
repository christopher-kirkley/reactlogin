import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import logo from './logo.svg';
import './App.css';

import { 
	Paper,
	Typography,
} from "@material-ui/core"

import { useHistory } from "react-router-dom";

function Dashboard() {

	const history = useHistory()

	useEffect(() => {
		fetch('http://localhost:5000/dashboard',
			{
				headers: {'Bearer': Cookies.get('access_token_cookie')}
			})
			.then(res => {
			if( !res.ok ) {
				return []
			} else {
				return res.json()
			}
		})
		.then(data => console.log(data))
	}, []

	)
	return (
		<div>
		<h1>Dashboard</h1>
		<Paper>
		<Typography>Welcome, you are logged in</Typography>
		</Paper>
		</div>
	)


}

export default Dashboard
