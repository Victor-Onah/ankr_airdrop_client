import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages";
import DashboardLayout from "./pages/dashboard/layout";
import Dashboard from "./pages/dashboard";
import ReferralsPage from "./pages/dashboard/referrals";
import TasksPage from "./pages/dashboard/tasks";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<LandingPage />} />
				<Route path="/dashboard" element={<DashboardLayout />}>
					<Route index element={<Dashboard />} />
					<Route
						path="/dashboard/referrals"
						element={<ReferralsPage />}
					/>
					<Route path="/dashboard/tasks" element={<TasksPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
