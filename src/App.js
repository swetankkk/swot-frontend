import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Login } from "./Pages/Login";
import { UserProvider } from "./context/userContext";
import { Header } from "./Components/Header";
import { Signup } from "./Pages/Signup";

function App() {
	return (
		<div>
			{/* 
            <Link to={"/tutorials"}>
              <Typography variant="body2">Tutorials</Typography>
            </Link>
            <Link to={"/add"}>
              <Typography variant="body2">Add</Typography>
            </Link>
          </Toolbar>
        </AppBar>*/}

			<Header />
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/login" element={<Login />} />

				<Route path="/about" element={<About />} />
				<Route path="/signup" element={<Signup />} />
				{/*
        <Route path="/" element={<Component />} />
  */}
			</Routes>
		</div>
	);
}

export default App;
