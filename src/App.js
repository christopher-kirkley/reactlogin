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

	const [ auth, setAuth ] = useState(false)

	return (
    <div className="App">
		<Router>
			<AppBar position="static">
				<Toolbar>
					{ auth ? 
						<React.Fragment>
						<Button component={Link} to='/users' color="inherit">Users</Button>
						<Button>Logout</Button>
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
					<Route
						exact
						path="/login"
						render={(props) => (
							<Login {...props} auth={auth} setAuth={setAuth}/>
						)}
					/>
				</Switch>
				<Switch>
					<Route exact path="/register" component={Register}/>
				</Switch>
				<Switch>
					<Route
						exact
						path="/users"
						render={(props) => (
							<Users {...props} auth={auth} setAuth={setAuth}/>
						)}
					/>
				</Switch>
		</Router>
		</div>
	)

}

export default App;
