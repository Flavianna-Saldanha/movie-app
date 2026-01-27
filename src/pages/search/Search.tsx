import { Box, Pagination, Stack, Typography } from "@mui/material";
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

	const [page, setPage] = useState(1);

	const itensPerPage = 8;

	const startIndex = (page - 1) * itensPerPage;
	const endIndex = startIndex + itensPerPage;

	const moviesVisible = movies.slice(startIndex, endIndex);
	const totalPages = Math.ceil(movies.length / itensPerPage);


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
				width: "100%",
				px: {
					xs: 2,
					sm: 4,
					md: 10,
					lg: 20,
				},
			}}
		>

			<Typography
				variant="h4"
				sx={{
					mt: 8,
					fontSize: {
						xs: "1.50rem", 
						sm: "1.5rem",  
						md: "2.125rem", 
					},
					textAlign: {
						xs: "center",
						md: "left",
					},
				}}
			>
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

export default Search;