import { useEffect, useState } from "react";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import MovieCard from "../../components/movieCard/MovieCard";
import type { movieType } from "../../types/movieType";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
	const [listMovies, setListMovies] = useState<movieType[]>([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	const maxPages = 20;

	const getTopRatedMovies = async(pageNumber: number) => {
		const url = `${movieURL}top_rated?api_key=${apiKey}&language=pt-BR&page=${pageNumber}`;
		
		const res = await fetch(url);
		const data = await res.json();

		setListMovies(data.results);
		setTotalPages(Math.min(data.total_pages, maxPages));
	};

	useEffect(() => {
		const fetchTopRatedMovies = async () => {
			await getTopRatedMovies(page);
		};

		fetchTopRatedMovies();
	}, [page]);


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

				{listMovies.map((movie) => (
					<Box
						key={movie.id}
						sx={{
							width: 250, 
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
					my: 8,
				}}>
				<Pagination 
					count={totalPages}
					page={page}
					onChange={(_, value) => setPage(value)} 
					 sx={{
						width: 350,
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