const getReferralMessage = referees => {
	const referralsToday = referees.filter(referee => {
		const today = new Date().getDate(),
			currentMonth = new Date().getMonth(),
			dayJoined = new Date(referee.dateJoined).getDate(),
			monthJoined = new Date(referee.dateJoined).getMonth();

		if (today === dayJoined && currentMonth === monthJoined) return true;

		return false;
	});

	return referralsToday.length > 0
		? `${referralsToday.length} new referral${
				referralsToday.length > 1 ? "s" : ""
		  } today. Refer more friends and earn more`
		: "You've not referred any friends today";
};

export default getReferralMessage;
