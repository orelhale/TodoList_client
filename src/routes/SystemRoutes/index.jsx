import { Route, Routes } from "react-router-dom";

export default function SystemRoutes({ children }) {
	return (
		<Routes>
			<Route path="*" element={children} />
		</Routes>
	)
}