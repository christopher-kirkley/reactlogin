import React, { createContext, useState, useEffect } from 'react'
import Cookies from "js-cookie";

export const SessionContext = createContext(null)

function SessionContextProvider(props) {

	const [ session, setSession ] = useState(false)

	useEffect(() => {
		let data = Cookies.get('session')
		if (data) {
		setSession(true)
		}
		else {
			setSession(false)
		}
		console.log(data)
		console.log(session)
	}, [])

	return (
		<SessionContext.Provider value={{session, setSession}}>
		{props.children}
		</SessionContext.Provider>
	)
}

export default SessionContextProvider;
