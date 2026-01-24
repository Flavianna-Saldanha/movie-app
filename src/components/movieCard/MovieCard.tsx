import { Box, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import type { movieCardType } from "../../types/movieCardType";
import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }: movieCardType) => {
	return (
		<Box>
			{showLink && (
				<Link to={`/movie/${movie.id}`}>
					<Box
						component="img"
						src={imageUrl + movie.poster_path}
						alt={movie.title}
					/>
					<Typography variant="h6"> 
						{movie.title}
					</Typography>
					<Typography>
						<StarIcon/> {movie.vote_average}
					</Typography>
				</Link>
			)}
		</Box>
	);
};

export default MovieCard;
