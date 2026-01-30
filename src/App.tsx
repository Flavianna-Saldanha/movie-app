import { Outlet } from "react-router-dom";
import ButtonAppBar from "./components/menu/Menu";
import { Box } from "@mui/material";
import NavBar from "./components/menu/NavBar";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<Box className="App">
			<ButtonAppBar/>
			<NavBar />
			<Outlet />
			<Footer />
		</Box>
	);
}

export default App;
