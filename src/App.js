import React, { useState, useEffect, useContext } from 'react'
import Cookies from "js-cookie";

import './App.css';

import Main from './Main'

import UserContextProvider from './hooks/UserContext'


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
		<UserContextProvider>
			<Main/>
		</UserContextProvider>
		</div>
	)

}

export default App;
