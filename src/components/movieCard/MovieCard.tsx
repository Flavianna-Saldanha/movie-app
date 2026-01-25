import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import type { movieCardType } from "../../types/movieCardType";
import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }: movieCardType) => {
	return (
		<Box
			sx={{
				width: 260,
				margin: "0 auto",
				height: "100%",

				"&:hover .poster::after": {
					opacity: 1,
				},

				"&:hover .poster img": {
					transform: "scale(1.12)",
				},

				"&:hover .title": {
					color: "var(--bg-tertiary)",
				},
			}}
		>
			{showLink && (
				<Link
					to={`/movie/${movie.id}`}
					style={{ textDecoration: "none", color: "inherit" }}
				>
					{/* Poster */}
					<Box
						className="poster"
						sx={{
							width: "100%",
							aspectRatio: "2 / 3",
							position: "relative",
							borderRadius: 2,
							overflow: "hidden",

							"&::after": {
								content: "\"\"",
								position: "absolute",
								inset: 0,
								borderRadius: 2,
								border: "2px solid var(--bg-tertiary)",
								opacity: 0,
								transition: "opacity 0.3s ease",
								pointerEvents: "none",
								zIndex: 2,
							},
						}}
					>
						<Box
							component="img"
							src={imageUrl + movie.poster_path}
							alt={movie.title}
							sx={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								transition: "transform 0.7s ease",
							}}
						/>

						{/* Nota */}
						<Box
							sx={{
								position: "absolute",
								top: 8,
								right: 8,
								display: "flex",
								alignItems: "center",
								gap: "4px",
								backgroundColor: "rgba(0,0,0,0.75)",
								padding: "4px 8px",
								borderRadius: 1.5,
								fontSize: 13,
								color: "#fff",
								zIndex: 3,
							}}
						>
							<StarIcon sx={{ fontSize: 14 }} />
							{movie.vote_average.toFixed(1)}
						</Box>
					</Box>

					{/* Título */}
					<Typography
						className="title"
						variant="subtitle2"
						sx={{
							mt: 1,
							fontWeight: 600,
							display: "-webkit-box",
							WebkitLineClamp: 2,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
							minHeight: "2em",
							fontSize: 17,
							transition: "color 0.3s ease",
						}}
					>
						{movie.title}
					</Typography>

					{/* Descrição */}
					<Typography
						variant="body1"
						sx={{
							display: "-webkit-box",
							WebkitLineClamp: 2,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
							color: "var(--text-secondary)",
							fontSize: 14,
						}}
					>
						{movie.overview}
					</Typography>

					{/* Ano */}
					<Typography
						variant="body1"
						sx={{
							color: "var(--text-secondary)",
							fontSize: 12,
							mt: 1.5,
						}}
					>
						{movie.release_date?.split("-")[0]}
					</Typography>
				</Link>
			)}
		</Box>
	);
};

export default MovieCard;
