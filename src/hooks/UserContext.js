import React, { createContext, useState } from 'react'

export const UserContext = createContext(null)

function UserContextProvider(props) {

	const [ user, setUser ] = useState(false)

	return (
		<UserContext.Provider value={{user, setUser}}>
		{props.children}
		</UserContext.Provider>
	)
}

export default UserContextProvider;
