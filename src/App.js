import logo from './logo.svg';
import './App.css';

import Login from './Login'
import Register from './Register'
import Users from './Users'

import {
  BrowserRouter as Router,
  Switch,
  Route,
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

  // return (
  //   </div>
  // );
}

export default App;
