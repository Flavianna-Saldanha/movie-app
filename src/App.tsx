import { Link, Outlet } from "react-router-dom";
import Search from "./pages/search/Search";
import ButtonAppBar from "./components/menu/Menu";
import MovieIcon from "@mui/icons-material/Movie";
import { Box, Typography } from "@mui/material";

function App() {
	return (
		<Box className="App">
			<ButtonAppBar/>
			<Search />
			<Typography variant="h5" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
				<MovieIcon />
				<Link to="/">Movie App</Link>
			</Typography>
			<Outlet />
		</Box>
	);
}

export default App;
