import React, { useState } from 'react'

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
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Button,
	Paper,
	Container,
	AppBar,
	Toolbar,
} from "@material-ui/core"

function App() {

  const [user, setUser] = useState(false)


	const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
				if (user) {
					return <Component {...rest} {...props} />
				} else {
					return <Redirect to={
						{
							pathname: '/login',
						}
					} />
				}
			}
		} />
		)
	}


	return (
    <div className="App">
		<Router>
			<AppBar position="static">
				<Toolbar>
				{ user ?
					<Button component={Link} to='/users' color="inherit">Users</Button>
					:
					null
				}
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
			<ProtectedRoute exact path="/users" component={Users}/>
		</Switch>
		</Router>
		</div>
	)

  // return (
  //   </div>
  // );
}

export default App;
