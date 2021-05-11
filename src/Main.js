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
	useHistory
} from "react-router-dom";



import { 
	Button,
	AppBar,
	Toolbar,
} from "@material-ui/core"

function Main() {

	function handleLogout() {
		sessionStorage.removeItem('session')
	}

	function isAuthenticated() {
		let data = sessionStorage.getItem('session')
		if (data) {
			return true
		}
		else {
			return false
		}
	}

	useEffect(() => {
		console.log('ho')
	}, [])

	const ProtectedRoute = ({isEnabled, ...props}) => {
    return (isEnabled) ? <Route {...props} /> : <Redirect to="/login"/>;
	};

	window.addEventListener('sessionStorage',e => console.log(e))

	return (
    <div className="Main">
			<Router>
				<AppBar position="static">
					<Toolbar>
					{	isAuthenticated()
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
						<Route exact path="/dashboard" component={Dashboard} />
					</Switch>
					<Switch>
						<Route exact path="/users" component={Users}/>
					</Switch>
			</Router>
		</div>
	)

}

export default Main;
