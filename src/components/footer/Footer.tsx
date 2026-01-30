import { Box, Container, Typography } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				mt: 10,
				py: 6,
				backgroundColor: "var(--bg-footer)",
				borderTop: "1px solid #4747473f",
			}}
		>
			<Container
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					justifyContent: "space-between",
					gap: 4,
				}}
			>
				<Box>
					<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
						<Box
							sx={{
								backgroundColor: "var(--bg-tertiary)",
								paddingX: "7px",
								paddingY: "4px",
								borderRadius: "5px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<MovieIcon sx={{ color: "#fff" }} />
						</Box>
						<Typography 
							variant="h6" 											
							component={Link}
							to="/"
							sx={{ fontWeight: "bold" }}>
							Movie App
						</Typography>
					</Box>

					<Typography
						variant="body2"
						sx={{ 
							color: "var(--text-secondary)", 
							mt: 3, 
							maxWidth: 280, 
							textAlign: "justify", 
							fontStyle: "italic",
						}}
					>
						Descubra filmes, veja avaliações do público e encontre
						recomendações feitas para você.
					</Typography>
				</Box>

				<Box 
					sx={ {
						display: "flex",
						flexDirection: "column",
						gap: 2,
					}}
				>
						Navegação
					<Typography variant="body2" sx={{ color: "var(--text-secondary)" }}>
						Início
					</Typography>
					<Typography variant="body2" sx={{ color: "var(--text-secondary)" }}>
						Filmes
					</Typography>
					<Typography variant="body2" sx={{ color: "var(--text-secondary)" }}>
						TV
					</Typography>
				</Box>

				<Box
					sx={ {
						display: "flex",
						flexDirection: "column",
						gap: 2,
					}}
				>
						Informações
					<Typography variant="body2" sx={{ color: "var(--text-secondary)" }}>
						Dados fornecidos por TMDB
					</Typography>
					<Typography variant="body2" sx={{ color: "var(--text-secondary)" }}>
						Uso educacional
					</Typography>
				</Box>
			</Container>

			<Box
				sx={{
					mt: 6,
					pt: 3,
					textAlign: "center",
				}}
			>
				<Typography variant="caption" sx={{ color: "var(--text-secondary)" }}>
					© {new Date().getFullYear()} Movie App — Todos os direitos reservados
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
