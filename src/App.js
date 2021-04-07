import logo from './logo.svg';
import './App.css';

import Login from './Login'
import Register from './Register'

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
		</Router>
		</div>
	)

  // return (
  //   </div>
  // );
}

export default App;
