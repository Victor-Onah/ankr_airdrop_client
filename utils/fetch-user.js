const fetchUser = async dispatch => {
	try {
		const response = await fetch("http://localhost:3000/api/user/", {
			headers: {
				"X-Enc-Id": btoa("user008")
			}
		});
		const data = await response.json();

		dispatch({ type: "set_user", payload: data });
	} catch (error) {
		console.error(error);
		alert(error.toString());

		setTimeout(() => {
			fetchUser(dispatch);
		}, 10_000);
	}
};

export default fetchUser;
