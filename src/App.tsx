import { Outlet } from "react-router-dom";
import ButtonAppBar from "./components/menu/Menu";
import { Box } from "@mui/material";
import Search from "./pages/search/Search";

function App() {
	return (
		<Box className="App">
			<ButtonAppBar/>
			<Search />
			<Outlet />
		</Box>
	);
}

export default App;
