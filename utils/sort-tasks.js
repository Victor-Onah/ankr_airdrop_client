const sortTasks = (state, dispatch) => {
	const { tasks, userTasks, pendingTasks, dailyTasks } = state;

	if (tasks && userTasks && (!pendingTasks || !dailyTasks)) {
		const sortedPendingTasks = tasks.filter(task => {
			const isTaskDone = userTasks.find(
				userTask => userTask.taskId === task.id
			);

			return isTaskDone ? false : true;
		});

		const sortedDailyTasks = sortedPendingTasks.filter(
			task => task.recurrence === "daily"
		);

		dispatch({ type: "set_pending_tasks", payload: sortedPendingTasks });
		dispatch({ type: "set_daily_tasks", payload: sortedDailyTasks });
	}
};

export default sortTasks;
