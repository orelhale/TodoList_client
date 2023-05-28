import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import SystemRoutes from "./routes/SystemRoutes";
import ContextManagement from "./context/ContextManagement";
import Home from "./pages/Home";

export default function App() {
	
	// TODO -> insert .env to .gitignore
	return (
		<div className="App">
			<ContextManagement>
				<BrowserRouter>

					<SystemRoutes>
						{/* <Layout /> */}
						<Home />
					</SystemRoutes>

				</BrowserRouter>
			</ContextManagement>
		</div>
	);
}