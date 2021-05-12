import React, { useState, useEffect, useContext } from 'react'
import Cookies from "js-cookie";

import './App.css';

import Login from './Login'
import Register from './Register'
import Users from './Users'
import Dashboard from './Dashboard'

import {
  BrowserRouter as Router,
  Switch,
  Route,
	Redirect,
  Link,
} from "react-router-dom";



import { 
	Button,
	AppBar,
	Toolbar,
} from "@material-ui/core"

import { SessionContext } from './hooks/SessionContext'

// import HandleLogout from './hooks/HandleLogout'

function Main() {


	// useEffect(() => {
	// 	let data = Cookies.get('session')
	// 	if (data == 'true') {
	// 		setSession(true)
	// 	}
	// 	if (data == 'false') {
	// 		setSession(false)
	// 	}
	// 	else {
	// 		Cookies.set('session', false)
	// 	}
	// }, [])


	const { session, setSession } = useContext(SessionContext)

	function handleLogout() {
		let data = Cookies.get('session')
		if (data) {
			fetch('http://localhost:5000/logout',
				{credentials: 'include', method: 'POST'}
			)
		}
		setSession(false)
	}

	function isAuthenticated() {
		let data = Cookies.get('session')
		if (data == 'true') {
			setSession(true)
			return true
		}
		else {
			handleLogout()
			return false
		}
	}

	setInterval(() => {
		isAuthenticated()
	}, 3000)

	const ProtectedRoute = ({isEnabled, ...props}) => {
    return (isEnabled) ? <Route {...props} /> : <Redirect to="/login"/>;
	};

	// window.addEventListener('sessionStorage',e => console.log(e))

	return (
    <div className="Main">
			<Router>
				<AppBar position="static">
					<Toolbar>
					{	session
						?
						<React.Fragment>
							<Button component={Link} to='/dashboard' color="inherit">Dashboard</Button>
							<Button component={Link} to='/users' color="inherit">Users</Button>
							<Button onClick={handleLogout} component={Link} to='/login' color="inherit">Logout</Button>
						</React.Fragment>
						:
						<React.Fragment>
							<Button component={Link} to='/login' color="inherit">Login</Button>
							<Button component={Link} to='/register' color="inherit">Register</Button>
						</React.Fragment>
					}
					</Toolbar>
				</AppBar>
					<Switch>
						<Route exact path="/register" component={Register}/>
					</Switch>
					<Switch>
						<Route exact path="/login" component={Login}/>
					</Switch>
					<Switch>
						<ProtectedRoute exact path="/dashboard" component={Dashboard} isEnabled={isAuthenticated()}/>
					</Switch>
					<Switch>
						<ProtectedRoute exact path="/users" component={Users} isEnabled={isAuthenticated()}/>
					</Switch>
			</Router>
		</div>
	)

}

export default Main;
