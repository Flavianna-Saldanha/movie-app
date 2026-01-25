import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Box, Button, Container, TextField, Toolbar } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import type { Movie } from "../../types/movieType";

interface SearchProps {
 	movies?: Movie[];
}

const Search = ({ movies }: SearchProps) => {
	return (
		<Box>
			<Toolbar sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
			}}>
				<Box component="form" 
					sx={{ width: { xs:"60vw", lg:"72vw", xl:"80vw" }, margin: "auto", marginTop: 6, backgroundColor: "var(--bg-quaternary)", display: "flex", justifyContent: "center" }}>
					<TextField
						type="text"
						placeholder="Busque um filme"						
						sx={{
							border: "1px solid transparent",
							flex: 1,
							input: {
								color: "var(--text-primary)",
							},
							"& fieldset": {
								border: "none",
							},
							"&:focus-within": {
								borderColor: "var(--bg-tertiary)",
							},
						}}
					/>
					<Button type="submit">
						<SearchIcon />
					</Button>
				</Box>
				<Box sx={{ 
					display: "flex", 
					alignItems: "center", 
					gap: 5, 
					marginTop: { xs: 1 , md: 6 },
				 }}>
					<TuneIcon />
					<Autocomplete
						options={[0]}
						open={false}
						  sx={{
							pointerEvents: "none",
							width: 170,
							display: "flex",
							alignItems: "center",
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Sort: Popularity"
								slotProps={{
									inputLabel: {
										sx: {
											color: "var(--text-primary)",
										},
									},
								}}
							/>
						)}
					/>

				</Box>
			</Toolbar>
		</Box>
	);
};

export default Search;