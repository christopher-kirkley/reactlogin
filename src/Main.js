import React, { useState, useEffect, useContext } from 'react'
import Cookies from "js-cookie";

import './App.css';

import Login from './Login'
import Register from './Register'
import Users from './Users'

import UserContextProvider from './hooks/UserContext'
import { UserContext } from './hooks/UserContext'

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

	const { user, setUser } = useContext(UserContext)

	function handleLogout() {
		setUser(false)
	}

	return (
    <div className="Main">
			<Router>
				<AppBar position="static">
					<Toolbar>
					{ user ?
						<React.Fragment>
							<Button onClick={handleLogout} color="inherit">Logout</Button>
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
						<Route exact path="/users" component={Users}/>
					</Switch>
			</Router>
		</div>
	)

}

export default Main;
