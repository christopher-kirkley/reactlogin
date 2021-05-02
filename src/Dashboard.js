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
