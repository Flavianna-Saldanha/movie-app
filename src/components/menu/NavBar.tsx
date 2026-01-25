import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Box, Button, TextField, Toolbar } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import type { movieType } from "../../types/movieType";
import Navigation from "../../components/navigation/Navigation";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchProps {
 	movies?: movieType[];
}

const NavBar = ({ movies }: SearchProps) => {
	const [search, setSearch] = useState(""); 
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		if(!search) return;

		navigate(`/search?q=${search}`);
		setSearch("");
	};


	return (
		<Box>
			<Toolbar sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
			}}>
				<Box component="form" onSubmit={handleSubmit}
					sx={{ width: { xs:"60vw", lg:"72vw", xl:"80vw" }, margin: "auto", marginTop: 6, backgroundColor: "var(--bg-quaternary)", display: "flex", justifyContent: "center" }}>
					<TextField
						type="text"
						placeholder="Search movies"		
						onChange={(e) => setSearch(e.target.value)}	
						value={search}			
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
						options={movies ?? []}
						getOptionLabel={(option) => option.title}
						sx={{
							width: 170,
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Sort: Popularity"
								slotProps={{
									inputLabel: {
										sx: { color: "var(--text-primary)" },
									},
								}}
							/>
						)}
					/>


				</Box>
			</Toolbar>

			<Navigation />
		</Box>
	);
};

export default NavBar;