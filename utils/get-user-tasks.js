const getUserTasks = async dispatch => {
	try {
		const response = await fetch("http://localhost:3000/api/user/tasks", {
			headers: {
				"X-Enc-Id": btoa("user008")
			}
		});
		const data = await response.json();

		dispatch({ type: "set_user_tasks", payload: data });
	} catch (error) {
		console.error(error);

		setTimeout(() => getReferees(dispatch), 10_000);
	}
};

export default getUserTasks;