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

import { SessionContext } from './hooks/SessionContext'

function Main() {

	const { session, setSession } = useContext(SessionContext)

	function handleLogout() {
		Cookies.remove('session')
		setSession(false)
		// api call to logout route
	}

	function isAuthenticated() {
		let data = Cookies.get('session')
		if (data) {
			setSession(true)
		}
		else {
			setSession(false)
		}
	}

	setInterval(() => {
		isAuthenticated()
	}, 3000)

	// const ProtectedRoute = ({isEnabled, ...props}) => {
    // return (isEnabled) ? <Route {...props} /> : <Redirect to="/login"/>;
	// };

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
