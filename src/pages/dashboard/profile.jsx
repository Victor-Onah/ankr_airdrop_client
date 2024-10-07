import { useContext } from "react";
import { BiCopy } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { AppCtx } from "../../App";
import PendingReferralsUi from "../../components/referrals-optimistic-ui";
import getReferralMessage from "../../../utils/get-referral-message";

const ProfilePage = () => {
	const { state } = useContext(AppCtx);
	const { user, referees } = state;
	const {
		balance,
		firstName,
		lastName,
		username,
		id,
		dateJoined,
		lastSignedIn,
		referralCode,
		referredBy,
		totalTasksCompleted,
		totalReferrals
	} = user;
	return (
		<div className="profile-page">
			<header>
				<h1>Profile</h1>
			</header>
			<div className="container">
				<section className="full-info">
					<div className="info">
						<h3>Full Name</h3>
						<p>
							<small>
								{firstName} {lastName}
							</small>
						</p>
					</div>
					<div className="info">
						<h3>Username</h3>
						<p>
							<small>{username}</small>
						</p>
					</div>
					<div className="info">
						<h3>User ID</h3>
						<p>
							<small>{id}</small>
						</p>
					</div>
					<div className="info">
						<h3>Balance</h3>
						<p>
							<small>{balance} ANKR</small>
						</p>
					</div>
					<div className="info">
						<h3>Date Joined</h3>
						<p>
							<small>{new Date(dateJoined).toDateString()}</small>
						</p>
					</div>
					<div className="info">
						<h3>Last Signed In</h3>
						<p>
							<small>
								{new Date(lastSignedIn).toDateString()}
							</small>
						</p>
					</div>
					<div className="info">
						<h3>Referred By</h3>
						<p>
							<small>{referredBy}</small>
						</p>
					</div>
					<div className="info">
						<h3>Total Referrals</h3>
						<p>
							<small>{totalReferrals}</small>
						</p>
					</div>
					<div className="info">
						<h3>Total Tasks Completed</h3>
						<p>
							<small>{totalTasksCompleted}</small>
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default ProfilePage;
