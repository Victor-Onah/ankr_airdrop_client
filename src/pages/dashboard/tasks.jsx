import { FaUsers, FaTasks } from "react-icons/fa";

const TasksPage = () => {
	return (
		<div className="tasks-page">
			<header>
				<h1>Tasks</h1>
			</header>
			<div className="container">
				<section className="tasks-progress">
					<div>
						<h2>Tasks Progress</h2>
						<p>Complete tasks to earn more rewards</p>
					</div>
					<div>
						<div className="progress">
							<div></div>
						</div>
						<div>
							<sup>
								<b>40</b>
							</sup>
							/<sub>100</sub>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default TasksPage;
