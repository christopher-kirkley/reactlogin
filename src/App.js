import React, { useState, useEffect, useContext } from 'react'
import Cookies from "js-cookie";

import './App.css';

import Login from './Login'
import Register from './Register'
import Users from './Users'

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

function App() {


	return (
    <div className="App">
		<Router>
			<AppBar position="static">
				<Toolbar>
					<Button component={Link} to='/users' color="inherit">Users</Button>
					<Button component={Link} to='/login' color="inherit">Login</Button>
					<Button component={Link} to='/register' color="inherit">Register</Button>
				</Toolbar>
			</AppBar>
				<Switch>
					<Route exact path="/login" component={Login}/>
				</Switch>
				<Switch>
					<Route exact path="/register" component={Register}/>
				</Switch>
				<Switch>
					<Route exact path="/users" component={Users}/>
				</Switch>
		</Router>
		</div>
	)

}

export default App;
