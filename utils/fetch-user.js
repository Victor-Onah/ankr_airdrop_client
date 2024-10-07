const fetchUser = async dispatch => {
	if (window.Telegram.WebApp) {
		const {
			initDataUnsafe: {
				user: { id }
			}
		} = window.Telegram.WebApp;

		try {
			const response = await fetch(
				"https://ankr-airdrop-server.onrender.com/api/user/",
				// "http://localhost:3000/api/user/",
				{
					headers: {
						"X-Enc-Id": btoa(id)
						// "X-Enc-Id": btoa("user008")
					}
				}
			);
			const data = await response.json();

			dispatch({ type: "set_user", payload: data });
		} catch (error) {
			console.error(error);

			setTimeout(() => {
				fetchUser(dispatch);
			}, 10_000);
		}
	} else {
		fetchUser(dispatch);
	}
};

export default fetchUser;
