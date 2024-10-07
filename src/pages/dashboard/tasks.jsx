import { useContext, useState } from "react";
import { AppCtx } from "../../App";
import {
	CompletedTasksUi,
	PendingTasksUi
} from "../../components/tasks-optimstic-ui";
import { Link } from "react-router-dom";
import TaskIcon from "../../components/task-icon";

const TasksPage = () => {
	const { state } = useContext(AppCtx);
	const { tasks, userTasks, pendingTasks, user } = state;
	const [openTab, setOpenTab] = useState("pending-tasks");

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
						{tasks && user ? (
							<>
								<div className="progress fade-in">
									<div
										style={{
											width: `${
												(user.totalTasksCompleted /
													tasks.length) *
												100
											}%`
										}}></div>
								</div>
								<div>
									<sup>
										<b>{user.totalTasksCompleted}</b>
									</sup>
									/<sub>{tasks.length}</sub>
								</div>
							</>
						) : (
							<div
								className="animate-pulse"
								style={{
									height: 16,
									background: "#444",
									borderRadius: 6,
									flex: 1
								}}></div>
						)}
					</div>
				</section>
				<div className="tasks-container">
					<div className="nav-buttons-container">
						<button
							onClick={() => setOpenTab("pending-tasks")}
							className={openTab === "pending-tasks" && "active"}>
							Pending
						</button>
						<button
							onClick={() => setOpenTab("completed-tasks")}
							className={
								openTab === "completed-tasks" && "active"
							}>
							Completed
						</button>
					</div>
					<div
						style={{
							marginTop: "1.5rem",
							animation:
								"animate-to-top 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
							opacity: 0
						}}>
						{openTab === "pending-tasks" &&
							(pendingTasks ? (
								<div className="tasks">
									{pendingTasks.length > 0 ? (
										pendingTasks
											.sort(
												(prev, next) =>
													next.priority -
													prev.priority
											)
											.map((task, i) => (
												<div
													className="task"
													key={task.title}>
													<TaskIcon
														platform={task.platform}
														taskCategory={
															task.category
														}
													/>
													<div>
														<h3>{task.title}</h3>
														<p>
															{task.reward} ANKR
														</p>
													</div>
													<a
														target="_blank"
														rel="noopener noreferrer"
														href={`https://ankr-airdrop-server.onrender.com/api/user/tasks/initialize?task_id=${task.id}&redirect_to=${task.link}&from=${window.location.href}&id=${user.id}`}>
														Start
													</a>
												</div>
											))
									) : (
										<p style={{ textAlign: "center" }}>
											<small>No tasks to show</small>
										</p>
									)}
								</div>
							) : (
								<PendingTasksUi />
							))}

						{openTab === "completed-tasks" &&
							(userTasks ? (
								userTasks.length > 0 ? (
									<div className="tasks">
										{userTasks.map((task, i) => (
											<div
												className="task"
												key={task.title}>
												<TaskIcon
													platform={task.platform}
													taskCategory={task.category}
												/>
												<div>
													<h3>{task.taskTitle}</h3>
													<p>
														{task.reward} ANKR •{" "}
														{new Date(
															task.completedAt
														).toDateString()}
													</p>
												</div>
											</div>
										))}
									</div>
								) : (
									<p style={{ textAlign: "center" }}>
										<small>
											You haven't completed any tasks.
										</small>
									</p>
								)
							) : (
								<CompletedTasksUi />
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TasksPage;
