import { useEffect, useState } from "react";
import type { Movie } from "../../types/movieType";
import { Box, Container, Typography } from "@mui/material";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
	const [topMovies, setTopMovies] = useState<Movie[]>([]);

	const getTopRatedMovies = async(url: string) => {
		const res = await fetch(url);
		const data = await res.json();

		setTopMovies(data.results);
	};

	useEffect(() => {
		const fetchTopRatedMovies = async () => {
			const topRatedUrl = `${movieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
			await getTopRatedMovies(topRatedUrl);
		};

		fetchTopRatedMovies();
	}, []);


	return (
		<Box>
			{topMovies.map((movie) => 
				<Container key={movie.id}>	
					<Typography variant="body1">{movie.title}</Typography>
				</Container>,
			)}
		</Box>
	);
};

export default Home;