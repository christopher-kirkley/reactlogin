import React, { createContext, useState, useEffect } from 'react'

export const SessionContext = createContext(null)

function SessionContextProvider(props) {

	const [ session, setSession ] = useState(false)

	useEffect(() => {
		let data = sessionStorage.getItem('session')
		if (data) {
		setSession(true)
		}
		else {
			setSession(false)
		}
		console.log(data)
	}, [session])

	return (
		<SessionContext.Provider value={{session, setSession}}>
		{props.children}
		</SessionContext.Provider>
	)
}

export default SessionContextProvider;
