import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import SystemRoutes from "./routes/SystemRoutes";
import MengeContext from "./context/MengeContext";

export default function App() {

	// TODO -> add .env to .gitignore
	return (
		<div className="App">
			<MengeContext>
				<BrowserRouter>


					<SystemRoutes>
						<Layout />
					</SystemRoutes>

				</BrowserRouter>
			</MengeContext>
		</div>
	);
}