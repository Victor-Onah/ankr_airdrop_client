const getUserTasks = async dispatch => {
	try {
		const {
			initDataUnsafe: {
				user: { id }
			}
		} = window.Telegram.WebApp;

		const response = await fetch(
			"https://ankr-airdrop-server.onrender.com/api/user/tasks",
			{
				headers: {
					"X-Enc-Id": btoa(id)
				}
			}
		);
		const data = await response.json();

		dispatch({ type: "set_user_tasks", payload: data });
	} catch (error) {
		console.error(error);

		setTimeout(() => getReferees(dispatch), 10_000);
	}
};

export default getUserTasks;
