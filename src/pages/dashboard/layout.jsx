import { useContext, useEffect } from "react";
import { BiHome } from "react-icons/bi";
import { FaUsers, FaTasks, FaUser } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AppCtx } from "../../App";
import getReferees from "../../../utils/get-referees";
import getTasks from "../../../utils/get-tasks";
import getUserTasks from "../../../utils/get-user-tasks";
import sortTasks from "../../../utils/sort-tasks";

const DashboardLayout = () => {
	const location = useLocation();
	const { state, dispatch } = useContext(AppCtx);

	if (!state.user) {
		return window.location.replace("/?redirect_to=" + location.pathname);
	}

	useEffect(() => {
		const dashboardLayout = document.querySelector(
			".dashboard-layout main"
		);

		dashboardLayout.scroll({ top: 0 });
	}, [location.pathname]);

	useEffect(() => {
		sortTasks(state, dispatch);
	}, [state.tasks, state.userTasks]);

	useEffect(() => {
		getReferees(dispatch);
		getTasks(dispatch);
		getUserTasks(dispatch);
	}, []);

	return (
		<div className="dashboard-layout">
			<main>
				<Outlet />
			</main>
			<footer>
				<Link
					className={location.pathname === "/dashboard" && "active"}
					to="/dashboard">
					<BiHome />
					<small style={{ fontSize: "0.65rem" }}>Dashboard</small>
				</Link>
				<Link
					className={
						location.pathname === "/dashboard/tasks" && "active"
					}
					to="/dashboard/tasks">
					<FaTasks />
					<small style={{ fontSize: "0.65rem" }}>Tasks</small>
				</Link>
				<Link
					className={
						location.pathname === "/dashboard/referrals" && "active"
					}
					to="/dashboard/referrals">
					<FaUsers />
					<small style={{ fontSize: "0.65rem" }}>Referrals</small>
				</Link>
				<Link
					className={
						location.pathname === "/dashboard/profile" && "active"
					}
					to="/dashboard/profile">
					<FaUser />
					<small style={{ fontSize: "0.65rem" }}>Profile</small>
				</Link>
			</footer>
		</div>
	);
};

export default DashboardLayout;
