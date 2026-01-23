import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
	return (
		<div>
			<nav>
				<form>
					<input type="text" placeholder="Busque um filme" />
					<button type="submit">
						<SearchIcon />
					</button>
				</form>
			</nav>
		</div>
	);
};

export default Search;