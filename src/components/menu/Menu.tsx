import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MovieIcon from "@mui/icons-material/Movie";
import { Avatar } from "@mui/material";

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				sx={{
					backgroundColor: "var(--bg-primary)",
					borderBottom: "1px solid var(--text-tertiary)",
					px: { xs: 0, sm: 10 },
				}}
			>
				<Toolbar sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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

						<Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Movie App
						</Typography>
					</Box>

					<Box
						sx={{
							display: "flex",
							gap: 1,
							backgroundColor: "var(--bg-primary)",
							padding: "8px",
							borderRadius: 2,
							flexGrow: 1,
							alignItems: "center",
						}}
					>
						{["Movies", "TV Shows", "Watchlist"].map((item, index) => (
							<Box
								key={item}
								sx={{
									padding: "6px 12px",
									borderRadius: 1,
									display: { xs: "none", md: "flex" }		,							
									alignItems: "center",
									justifyContent: "center",
									cursor: "pointer",
								}}
							>
								<Typography
									variant="body1"
									sx={{
										fontWeight: "bold",
										fontSize: 14,
										color:
                      index === 0
                      	? "var(--text-primary)"
                      	: "var(--text-secondary)",
										"&:hover": {
											color: "var(--bg-tertiary)",
										},
									}}
								>
									{item}
								</Typography>
							</Box>
						))}
					</Box>

					<Avatar alt="Agnes Walker" src="" />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
