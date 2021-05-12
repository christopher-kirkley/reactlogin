import React, { useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'

import logo from './logo.svg';
import './App.css';

import { 
	Paper,
	Typography,
} from "@material-ui/core"

import { useHistory } from "react-router-dom";
import { SessionContext } from './hooks/SessionContext'

function Dashboard() {

	const { session, setSession } = useContext(SessionContext)

	const [ msg, setMsg ] = useState('')

	const history = useHistory()

	useEffect(() => {
		fetch('http://localhost:5000/dashboard',
			{
				credentials: 'include',
			})
			.then(res => {
			if( !res.ok ) {
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
