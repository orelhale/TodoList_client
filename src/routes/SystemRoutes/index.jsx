import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";


export default function SystemRoutes({ children }) {
	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
			<Route path="*" element={children} />
		</Routes>
	)
}