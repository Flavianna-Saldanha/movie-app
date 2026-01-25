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
		<Box
			sx={{
				width: "auto",
				mx: 20,
			}}
		>
			<Typography 
				variant="h4" 
				sx={{ 
					fontSize: 40, 
					textAlign: "center", 
					margin: "2rem 0 1rem" }}
			>
					Melhores filmes:
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: 3,
				}}
			>
				{listMovies.length === 0 && (
					<Typography variant="body1">
						Carregando filmes...
					</Typography>
				)}

				{listMovies.map((movie) => (
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

export default Home;