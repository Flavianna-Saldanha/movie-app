import { Outlet } from "react-router-dom";
import ButtonAppBar from "./components/menu/Menu";
import { Box } from "@mui/material";
import NavBar from "./components/menu/NavBar";

function App() {
	return (
		<Box className="App">
			<ButtonAppBar/>
			<NavBar />
			<Outlet />
		</Box>
	);
}

export default App;
