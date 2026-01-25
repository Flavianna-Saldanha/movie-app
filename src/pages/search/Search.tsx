import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/movieCard/MovieCard";
import type { movieType } from "../../types/movieType";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
	const [searchParams] = useSearchParams();

	const [movies, setMovies] = useState<movieType[]>([]);
	const query = searchParams.get("q");

	const getSearchedMovies = async(url: string) => {
		const res = await fetch(url);
		const data = await res.json();
	
		setMovies(data.results.filter((movie: movieType) => movie.poster_path));
	};
	
	useEffect(() => {
		if (!query) return;

		const run = async () => {
			const searchQueryURL = `${searchURL}?api_key=${apiKey}&language=pt-BR&query=${query}`;
			await getSearchedMovies(searchQueryURL);
		};

		run();
	}, [query]);



	return (
		<Box
			sx={{
				width: "auto",
				mx: 20,
			}}
		>
			<Typography variant="h3"sx={{ mt: 8 }}>
				Resultados para: {query}
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: 3,
					mt: 8,
				}}
			>
				{movies.length === 0 && (
					<Typography variant="body1">
						Carregando filmes...
					</Typography>
				)}

				{movies.map((movie) => (
					<Box
						key={movie.id}
						sx={{
							width: 260, 
							display: "flex",
							justifyContent: "center",
							flexShrink: 0,
						}}
					>
						<MovieCard movie={movie} />
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Search;