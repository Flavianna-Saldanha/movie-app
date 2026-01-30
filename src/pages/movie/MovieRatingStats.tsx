import { Box, Rating, Typography } from "@mui/material";
import type { movieType } from "../../types/movieType";
import StarIcon from "@mui/icons-material/Star";

type Props = {
	movie: movieType;
}

export const MovieRatingStats = ({ movie }: Props) => {
	const rating = movie.vote_average / 2;

	const ratingCalc = (star: number) => {
		// calcula valor (entre -∞ e +∞)
		const value = rating - (star - 1);
		// se menor que 0 → retorna 0
		if (value <= 0) return 0;
		// se maior que 1 → retorna 1
		if (value >= 1) return 100;

		// no final → multiplica por 100
		return value * 100;
	};

	return (
		<Box 
			sx={{
				px: 3,
				py: 4,
				backgroundColor: "#24242427",
				borderRadius: 5,
			}}
		>
			<Typography variant="h6" sx={{ mb: 4, textAlign: { xs: "center", md: "start" } }}>
				Avaliações do público
			</Typography>
			<Box 
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						display: "flex",
						gap: 1,
						flexDirection: "column",
						alignItems: "center",
						flex:"1",
					}}
				>	
					<Typography variant="h2" sx={{ fontWeight: "bold" }}>{rating.toFixed(1)}</Typography>

					<Rating name="read-only" value={rating} readOnly />

					<Typography variant="body1" sx={{ color: "var(--text-secondary)" }}>
						Média Global
					</Typography>
				</Box>

				<Box sx={{
					flex:"2",
					border: "1px solid red",

				}}>
					{[5, 4, 3, 2, 1].map((star) => (
						<Box
							key={star}
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								mb: 1,
							}}
						>
							<Typography sx={{ width: 20 }}>{star}</Typography>
							<StarIcon sx={{ fontSize: 18 }} />

							<Box
								sx={{
									flex: 1,
									height: 8,
									backgroundColor: "#3a3a3a",
									borderRadius: 4,
									overflow: "hidden",
								}}
							>
								<Box
									sx={{
										width: `${ratingCalc(star)}%`,
										height: "100%",
										backgroundColor: "var(--bg-tertiary)",
									}}
								/>
							</Box>
						</Box>
					))}

				</Box>
			</Box>
		</Box>
	);
};