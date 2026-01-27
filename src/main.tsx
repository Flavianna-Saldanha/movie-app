import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Movie from "./pages/movie/Movie";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="movie/:id" element={<Movie />}/>
					<Route path="search" element={<Search />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
