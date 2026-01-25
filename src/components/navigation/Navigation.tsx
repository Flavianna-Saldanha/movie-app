import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Navigation() {
	const [value, setValue] = React.useState(0);

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const tabs = [
		"All Movies",
		"Action",
		"Sci-Fi",
		"Drama",
		"Comedy",
		"Horror",
		"Documentary",
	];

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: {
					xs: "center",
					lg: "flex-start",
				},
				mt: { xs: 2, md: 4 },
				px: { xs: 2, lg: 8 },
			}}
		>
			<Tabs
				value={value}
				onChange={handleChange}
				variant="scrollable"
				scrollButtons={false}
				slotProps={{
					indicator: {
						sx: { display: "none" },
					},
				}}
				sx={{
					backgroundColor: "#0b0b0b",
					borderRadius: "999px",
					padding: "6px",
					gap: "8px",
					maxWidth: "100%",

					"& .MuiTabs-scroller": {
						overflowX: "auto",
					},
					"&::-webkit-scrollbar": {
						display: "none",
					},
				}}
			>
				{tabs.map((label, index) => (
					<Tab
						key={label}
						label={label}
						disableRipple
						sx={{
							textTransform: "none",
							whiteSpace: "nowrap",

							minHeight: { xs: "32px", md: "36px" },
							padding: {
								xs: "4px 12px",
								md: "6px 16px",
							},
							fontSize: {
								xs: "13px",
								md: "14px",
							},

							borderRadius: "999px",
							fontWeight: 500,
							color: "white",
							backgroundColor:
                value === index
                	? "var(--bg-tertiary)"
                	: "transparent",
							transition: "all 0.3s ease",

							"&.Mui-selected": {
								color: "white",
								backgroundColor: "var(--bg-tertiary)",
							},

							"&:hover": {
								backgroundColor:
                  value === index
                  	? "var(--bg-tertiary)"
                  	: "rgba(255,255,255,0.1)",
							},

							"&:focus": {
								outline: "none",
							},

							"&:focus-visible": {
								outline: "none",
							},
						}}
					/>
				))}
			</Tabs>
		</Box>
	);
}
