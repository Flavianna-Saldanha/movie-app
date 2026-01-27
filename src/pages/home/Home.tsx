import { useEffect, useState } from "react";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import MovieCard from "../../components/movieCard/MovieCard";
import type { movieType } from "../../types/movieType";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
	const [listMovies, setListMovies] = useState<movieType[]>([]);
	const [page, setPage] = useState(1);

	const itensPerPage = 8;

	const startIndex = (page - 1) * itensPerPage;
	const endIndex = startIndex + itensPerPage;

	const moviesVisible = listMovies.slice(startIndex, endIndex);
	const totalPages = Math.ceil(listMovies.length / itensPerPage);

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
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: 3,
					mt: 8,
				}}
			>
				{listMovies.length === 0 && (
					<Typography variant="body1">
						Carregando filmes...
					</Typography>
				)}

				{moviesVisible.map((movie) => (
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

			<Stack 
				sx={{
					alignItems: "center",
					mt: 8,
				}}>
				<Pagination 
					count={totalPages}
					page={page}
					onChange={(_, value) => setPage(value)} 
					 sx={{
						width: { xs: 200 },
						"& .MuiPaginationItem-root": {
							color: "var(--text-primary)",
						},
						"& .Mui-selected": {
							backgroundColor: "var(--bg-tertiary)",
							color: "var(--text-primary)",
						},
					}}
				/>
			</Stack>
		</Box>
	);
};

export default Home;