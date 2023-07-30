import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from './Pages/Landing';
import { About } from './Pages/About';
import { Login } from './Pages/Login';
import { UserProvider } from './context/userContext';
import { Register } from './Pages/Register';
import { Home } from './Pages/Home';
import { File } from './Pages/File';
import { NotFound } from './Pages/NotFound';
import { NewFile } from './Pages/NewFile';

function App() {
	return (
		<UserProvider>
			<Routes>
				<Route path='/' element={<Landing />} />

				<Route path='/login' element={<Login />} />

				<Route path='/about' element={<About />} />
				<Route path='/register' element={<Register />} />
				<Route path='/home' element={<Home />} />
				<Route path='/:boardId' element={<File />} />
				<Route path='/new' element={<NewFile />} />
				<Route path='/error' element={<NotFound />} />
				<Route path='*' element={<Navigate to='/error' replace />} />
			</Routes>
		</UserProvider>
	);
}

export default App;
