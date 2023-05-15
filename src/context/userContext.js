import React, { createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = React.useState();
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

function useUser() {
	const context = React.useContext(UserContext);
	if (context === undefined) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
}

export { UserProvider, UserContext };
