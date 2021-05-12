import React, { useState, useEffect, useContext } from 'react'
import Cookies from "js-cookie";

import {
  useHistory,
} from "react-router-dom";


import { SessionContext } from './SessionContext'

function HandleLogout() {

	const { session, setSession } = useContext(SessionContext)

	const history = useHistory()

	console.log('yw')
	Cookies.remove('session')
	setSession(false)
	history.push('/login')
	// api call to logout route
}

export default HandleLogout;
