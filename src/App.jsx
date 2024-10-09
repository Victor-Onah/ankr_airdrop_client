import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages";
import DashboardLayout from "./pages/dashboard/layout";
import Dashboard from "./pages/dashboard";
import ReferralsPage from "./pages/dashboard/referrals";
import TasksPage from "./pages/dashboard/tasks";
import WalletPage from "./pages/dashboard/wallet";
import NextTopLoader from "nextjs-toploader";
import { createContext, useEffect, useReducer } from "react";

const defaultState = {
	user: null,
	userTasks: null,
	tasks: null,
	referees: null,
	pendingTasks: null,
	dailyTasks: null
};

const reducer = (state, action) => {
	switch (action.type) {
		case "set_user":
			return { ...state, user: action.payload };
		case "set_referees":
			return { ...state, referees: action.payload };
		case "set_tasks":
			return { ...state, tasks: action.payload };
		case "set_user_tasks":
			return { ...state, userTasks: action.payload };
		case "set_pending_tasks":
			return { ...state, pendingTasks: action.payload };
		default:
			return state;
	}
};

export const AppCtx = createContext(defaultState);

function App() {
	const [state, dispatch] = useReducer(reducer, defaultState);

	return (
		<AppCtx.Provider value={{ state, dispatch }}>
			<BrowserRouter>
				<NextTopLoader color="#2e72ff" showSpinner={false} />
				<Routes>
					<Route index element={<LandingPage />} />
					<Route path="/dashboard" element={<DashboardLayout />}>
						<Route index element={<Dashboard />} />
						<Route
							path="/dashboard/referrals"
							element={<ReferralsPage />}
						/>
						<Route
							path="/dashboard/tasks"
							element={<TasksPage />}
						/>
						<Route
							path="/dashboard/wallet"
							element={<WalletPage />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</AppCtx.Provider>
	);
}

export default App;
