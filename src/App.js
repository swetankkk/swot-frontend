import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Login } from "./Login";
import { UserProvider } from "./context/userContext";

function App() {
	return (
		<UserProvider>
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
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/about" element={<About />} />

					{/*
        <Route path="/" element={<Component />} />
  */}
				</Routes>
			</div>
		</UserProvider>
	);
}

export default App;
