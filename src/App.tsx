import { Link, Outlet } from "react-router-dom";
import Search from "./pages/search/Search";
import ButtonAppBar from "./components/menu/Menu";
import MovieIcon from "@mui/icons-material/Movie";

function App() {
	return (
		<div className="App">
			<ButtonAppBar/>
			<Search />
			<h2>
				<Link to="/"><MovieIcon />Movie App</Link>
			</h2>
			<Outlet />
		</div>
	);
}

export default App;
