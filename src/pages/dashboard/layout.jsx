import { useEffect } from "react";
import { BiHome } from "react-icons/bi";
import { FaUsers, FaTasks } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
	const location = useLocation();

	useEffect(() => {
		const dashboardLayout = document.querySelector(
			".dashboard-layout main"
		);
		dashboardLayout.scroll({ top: 0 });
	}, [location.pathname]);

	return (
		<div className="dashboard-layout">
			<main>
				<Outlet />
			</main>
			<footer>
				<Link
					className={
						location.pathname === "/dashboard/tasks" && "active"
					}
					to="/dashboard/tasks">
					<FaTasks />
					<small style={{ fontSize: "0.65rem" }}>Tasks</small>
				</Link>
				<Link
					className={location.pathname === "/dashboard" && "active"}
					to="/dashboard">
					<BiHome />
					<small style={{ fontSize: "0.65rem" }}>Dashboard</small>
				</Link>
				<Link
					className={
						location.pathname === "/dashboard/referrals" && "active"
					}
					to="/dashboard/referrals">
					<FaUsers />
					<small style={{ fontSize: "0.65rem" }}>Referrals</small>
				</Link>
			</footer>
		</div>
	);
};

export default DashboardLayout;
