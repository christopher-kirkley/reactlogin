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

	const [ msg, setMsg ] = useState('')

	const history = useHistory()

	useEffect(() => {
		fetch('http://localhost:5000/dashboard',
			{
				credentials: 'include',
			})
			.then(res => {
			if( !res.ok ) {
				sessionStorage.removeItem('session')
				history.push('/login')
				return []
			} else {
				return res.json()
			}
		})
		.then(data => setMsg(data['msg'])) 
	}, []

	)
	return (
		<div>
		<h1>Dashboard</h1>
		<Paper>
		<Typography>{msg}</Typography>
		</Paper>
		</div>
	)


}

export default Dashboard
