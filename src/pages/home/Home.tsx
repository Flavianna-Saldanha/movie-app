import { useEffect, useState } from "react";
import type { movieType } from "../../types/movieType";
import { Box, Container, Typography } from "@mui/material";
import MovieCard from "../../components/movieCard/MovieCard";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
	const [listMovies, setListMovies] = useState<movieType[]>([]);

	const getTopRatedMovies = async(url: string) => {
		const res = await fetch(url);
		const data = await res.json();

		setListMovies(data.results);
	};

	useEffect(() => {
		const fetchTopRatedMovies = async () => {
			const topRatedUrl = `${movieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
			await getTopRatedMovies(topRatedUrl);
		};

		fetchTopRatedMovies();
	}, []);


	return (
		<Container>
			<Typography variant="h4">Melhores filmes:</Typography>
			<Box>
				{listMovies.length === 0 && (
					<Typography variant="body1">Carregando filmes...</Typography>
				)}
				
				{listMovies.length > 0 && listMovies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</Box>
		</Container>
	);
};

export default Home;