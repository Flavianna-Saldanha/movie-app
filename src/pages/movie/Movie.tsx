import { Box, Container, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { movieType } from "../../types/movieType";
import type { crewType } from "../../types/crewType";
import type { castType } from "../../types/castType";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import MovieCard from "../../components/movieCard/MovieCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import StarIcon from "@mui/icons-material/Star";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import { MovieRatingStats } from "./MovieRatingStats";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Movie = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState<movieType | null>(null);
	const [crew, setCrew] = useState<crewType[]>([]);
	const [cast, setCast] = useState<castType[]>([]);

	const getMovie = async (url: string) => {
		const res = await fetch(url);
		const data = await res.json();
		setMovie(data);
	};

	const getCredits = async (movieId: string) => {
		const res = await fetch(`${movieURL}${movieId}/credits?api_key=${apiKey}&language=pt-BR`);
		const data = await res.json();
		setCrew(data.crew || []);
		setCast(data.cast || []);
	};

	const formatCurrency = (number?: number): string => {
		if (number === undefined) return "Não disponível";
		return number.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		});
	};

	useEffect(() => {
		const fetchMovie = async () => {
			if (!id) return;
			await getMovie(`${movieURL}${id}?api_key=${apiKey}&language=pt-BR`);
			await getCredits(id);
		};
		fetchMovie();
	}, [id]);

	const director = crew.find(member => member.job === "Director");
	const mainActors = cast.slice(0, 5);

	return (
		<Container
			sx={{
				mt: 5,
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				flexWrap: "wrap",
				gap: { xs: 5, md: 1 },
				p: 2,
			}}
		>
			{movie && (
				<>
					<Box
						sx={{
							width: { xs: 320, sm: 350, lg: 400 },
							display: "flex",
							flexDirection: "column",
							gap: 2,
							m: "0 auto",  
						}}
					>

						<Box
							component="img"
							src={imageUrl + movie.poster_path}
							alt={movie.title}
							sx={{ borderRadius: 2,
								width: "90%",
								objectFit: "cover",
								 }}
						/>

						<MovieCard movie={movie} showLink={false} />

						<Box
							sx={{
								backgroundColor: "#24242427",
								width: "90%",
								display: "flex",
								flexDirection: "column",
								gap: 5,
								pt: 4,
								textAlign: "center",
								borderRadius: 4,
							}}
						>
							<Box sx={{ position: "relative", textAlign: "start", pl: { xs: 6, sm: 8, md: 12 } }}>
								<Typography variant="h6">
									<LocalAtmIcon
										sx={{ position: "absolute", left: { xs: 20, sm: 30, md: 40 }, top: 15 }}
									/>
									<Typography variant="body1" sx={{ color: "var(--text-secondary)" }}>
                    Orçamento:
									</Typography>
								</Typography>
								<Typography variant="body1">{formatCurrency(movie.budget)}</Typography>
							</Box>

							<Box sx={{ position: "relative", textAlign: "start", pl: { xs: 6, sm: 8, md: 12 } }}>
								<Typography variant="h6">
									<AttachMoneyIcon
										sx={{ position: "absolute", left: { xs: 20, sm: 30, md: 40 }, top: 15 }}
									/>
									<Typography variant="body1" sx={{ color: "var(--text-secondary)" }}>
                    Receita:
									</Typography>
								</Typography>
								<Typography variant="body1">{formatCurrency(movie.revenue)}</Typography>
							</Box>

							<Box sx={{ position: "relative", textAlign: "start", pl: { xs: 6, sm: 8, md: 12 } }}>
								<Typography variant="h6">
									<TimelapseIcon
										sx={{ position: "absolute", left: { xs: 20, sm: 30, md: 40 }, top: 15 }}
									/>
									<Typography variant="body1" sx={{ color: "var(--text-secondary)" }}>
                    Duração:
									</Typography>
								</Typography>
								<Typography variant="body1">{movie.runtime ?? "Não disponível"} minutos</Typography>
							</Box>

							<Box sx={{ borderTop: "1px solid var(--text-tertiary)", width: "90%", m: "auto" }}>
								{director && (
									<Box sx={{ mt: 2 }}>
										<Typography
											variant="h6"
											sx={{ textAlign: "start", color: "var(--text-secondary)", fontSize: 16 }}
										>
                      Diretor:
										</Typography>

										<Box sx={{ my: 3, display: "flex", alignItems: "center", gap: 2 }}>
											{director.profile_path && (
												<Box
													component="img"
													src={imageUrl + director.profile_path}
													alt={director.name}
													sx={{
														width: 50,
														height: 50,
														borderRadius: "50%",
														objectFit: "cover",
													}}
												/>
											)}
											<Typography variant="body1" sx={{ fontWeight: "bold" }}>
												{director.name}
											</Typography>
										</Box>
									</Box>
								)}
							</Box>
						</Box>
					</Box>

					<Box
						sx={{
							flex: 1,
							minWidth: { xs: "100%", md: 200 },
							display: "flex",
							flexDirection: "column",
							gap: { xs: 3, md: 5 },
						}}
					>
						<Typography variant="h4" sx={{ fontWeight: 600 }}>
							{movie.title}
						</Typography>

						<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
							<Box sx={{ display: "flex", gap: { xs: 2, sm: 3, md: 3 } }}>
								<Box
									sx={{
										display: "flex",
										gap: 1,
										width: 75,
										pl: 1,
										borderRadius: 5,
										backgroundColor: "#a1a1a13a",
									}}
								>
									<StarIcon sx={{ width: 20 }} />
									<Typography sx={{ fontWeight: "bold" }}>{movie.vote_average.toFixed(1)}</Typography>
								</Box>

								<Typography>•</Typography>
								<Typography>{movie.release_date?.split("-")[0]}</Typography>
							</Box>
						</Box>

						<Box sx={{ display: "flex", gap: { xs: 2, md: 5 }, flexWrap: "wrap" }}>
							<IconButton
								sx={{
									fontSize: { xs: 16, md: 20 },
									borderRadius: 3,
									backgroundColor: "var(--bg-tertiary)",
									p: { xs: 1, md: 2 },
									display: "flex",
									alignItems: "center",
									gap: { xs: 1, md: 2 },
									color: "var(--text-primary)",
									"&:hover": { backgroundColor: "var(--bg-quaternary)" },
								}}
							>
								<PlayArrowIcon /> Assistir ao trailer
							</IconButton>
							<IconButton
								sx={{
									fontSize: { xs: 16, md: 20 },
									borderRadius: 3,
									backgroundColor: "var(--bg-tertiary)",
									p: { xs: 1, md: 2 },
									display: "flex",
									alignItems: "center",
									gap: { xs: 1, md: 2 },
									color: "var(--text-primary)",
									"&:hover": { backgroundColor: "var(--bg-quaternary)" },
								}}
							>
								<AddIcon /> Adicionar aos favoritos
							</IconButton>
						</Box>

						<Box>
							<Typography
								variant="h6"
								sx={{ borderLeft: "4px solid var(--bg-tertiary)", pl: 2, my: 3 }}
							>
                Descrição
							</Typography>
							<Typography variant="body1" sx={{ textAlign: "justify", color: "var(--text-secondary)" }}>
								{movie.overview}
							</Typography>
						</Box>

						{mainActors.length > 0 && (
							<Box>
								<Typography
									variant="h6"
									sx={{ borderLeft: "4px solid var(--bg-tertiary)", pl: 2, my: 3 }}
								>
                  Atores principais
								</Typography>
								<Box
									sx={{
										display: "flex",
										gap: { xs: 2, sm: 3, md: 4 },
										flexWrap: "wrap",
										mt: 1,
										justifyContent: { xs: "center", md: "flex-start" },
									}}
								>
									{mainActors.map(actor => (
										<Box key={actor.id} sx={{ textAlign: "center", width: 116 }}>
											{actor.profile_path && (
												<Box
													component="img"
													src={imageUrl + actor.profile_path}
													alt={actor.name}
													sx={{
														width: 100,
														height: 100,
														borderRadius: "50%",
														objectFit: "cover",
													}}
												/>
											)}
											<Typography variant="body2" sx={{ mt: 2 }}>
												{actor.name}
											</Typography>
											<Typography variant="caption" sx={{ color: "var(--text-secondary)" }}>
												{actor.character}
											</Typography>
										</Box>
									))}
								</Box>
							</Box>
						)}

						<Box>
							<MovieRatingStats movie={movie} />
						</Box>
					</Box>
				</>
			)}
		</Container>
	);
};

export default Movie;
