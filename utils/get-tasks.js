const getTasks = async dispatch => {
	try {
		const response = await fetch("http://localhost:3000/api/tasks");
		const data = await response.json();

		dispatch({ type: "set_tasks", payload: data });
	} catch (error) {
		console.error(error);

		setTimeout(() => getTasks(dispatch), 10_000);
	}
};

export default getTasks;
