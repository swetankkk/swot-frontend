import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Landing } from './Pages/Landing';
import { About } from './Pages/About';
import { Login } from './Pages/Login';
import { UserProvider } from './context/userContext';
import { Register } from './Pages/Register';
import { Home } from './Pages/Home';
import { Board } from './Pages/Board';

function App() {
	return (
		<UserProvider>
			<Routes>
				<Route path='/' element={<Landing />} />

				<Route path='/login' element={<Login />} />

				<Route path='/about' element={<About />} />
				<Route path='/register' element={<Register />} />
				<Route path='/home' element={<Home />} />
				<Route path='/board' element={<Board />} />
			</Routes>
		</UserProvider>
	);
}

export default App;
