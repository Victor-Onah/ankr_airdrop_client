import { BiCopy } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

const ReferralsPage = () => {
	return (
		<div className="referrals-page">
			<header>
				<h1>Referrals</h1>
			</header>
			<div className="container">
				<section className="referral-link">
					<div>
						<h2>Your Referral Link</h2>
						<p>Share this link with your friends to earn rewards</p>
					</div>
					<div>
						<input type="text" readOnly value={"Axdf2JiT3Z"} />
						<button>
							<BiCopy /> Copy
						</button>
					</div>
				</section>
				<section className="total-referrals">
					<FaUsers className="card-icon" />
					<h3>Referrals</h3>
					<div>
						<h2>22</h2>
						<p>You haven't referred anyone today</p>
					</div>
				</section>
				<section className="referrals-rewards">
					<svg
						className="card-icon"
						clip-rule="evenodd"
						fill-rule="evenodd"
						stroke-linejoin="round"
						stroke-miterlimit="2"
						viewBox="0 0 560 400"
						width={32}
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="m21.4.6 13.1 6.7c1.9 1 3.1 2.9 3.1 5.1v3.1h-4.8v-3.1c0-.3-.2-.6-.5-.8l-13.1-6.7c-.2-.1-.5-.1-.8 0l-13.1 6.7c-.3.1-.5.4-.5.8v3.1h-4.8v-3.1c0-2.1 1.2-4.1 3.1-5.1l13.1-6.7c1.6-.8 3.5-.8 5.2 0zm1.5 19.2c0-2.3-1.9-4.1-4.1-4.1-2.3 0-4.1 1.8-4.1 4.1s1.9 4.1 4.1 4.1 4.1-1.8 4.1-4.1zm9.3 8.6c.3-.1.5-.4.5-.8v-3.1h4.8v3.1c0 2.1-1.2 4.1-3.1 5.1l-13.1 6.7c-.8.4-1.7.6-2.6.6s-1.8-.2-2.6-.6l-13-6.7c-1.9-1-3.1-2.9-3.1-5.1v-3.1h4.8v3.1c0 .3.2.6.5.8l11.1 5.6v-5.6c-3.8-1.1-6.5-4.5-6.5-8.6 0-4.9 4-9 9-9 4.9 0 9 4 9 9 0 4.1-2.8 7.6-6.5 8.6v5.6z"
							fill="#f1f1f1"
							fill-opacity=".9"
							transform="matrix(6.75 0 0 6.75 153.1 65)"
						/>
					</svg>
					<h3>Earnings from Referrals</h3>
					<div>
						<h2>2,000 ANK</h2>
						<p>You haven't earned any rewards today</p>
					</div>
				</section>
				<section className="referrals-list">
					<div>
						<h2>Referral List</h2>
						<p>List of friends you've referred</p>
					</div>
					<div style={{ overflow: "auto" }}>
						<table>
							<thead>
								<tr>
									<td>Username</td>
									<td>Date joined</td>
									<td>Status</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>justinicey</td>
									<td>01/12/2033</td>
									<td>Active</td>
								</tr>
								<tr>
									<td>ugobest</td>
									<td>04/2/2021</td>
									<td>Active</td>
								</tr>
								<tr>
									<td>justinicey</td>
									<td>01/12/2033</td>
									<td>Inactive</td>
								</tr>
								<tr>
									<td>ugobest</td>
									<td>04/2/2021</td>
									<td>Active</td>
								</tr>
								<tr>
									<td>justinicey</td>
									<td>01/12/2033</td>
									<td>Inactive</td>
								</tr>
								<tr>
									<td>ugobest</td>
									<td>04/2/2021</td>
									<td>Inactive</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</div>
		</div>
	);
};

export default ReferralsPage;
