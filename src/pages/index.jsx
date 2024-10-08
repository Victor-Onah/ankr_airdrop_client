import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppCtx } from "../App";
import { CgSpinner } from "react-icons/cg";
import fetchUser from "../../utils/fetch-user";

const LandingPage = () => {
	const { state, dispatch } = useContext(AppCtx);
	const redirectURL = new URLSearchParams(window.location.search).get(
		"redirect_to"
	);

	useEffect(() => {
		fetchUser(dispatch);
	}, []);

	return (
		<div className="landing-page">
			<div className="bloop"></div>
			<div className="bloop"></div>
			<div className="bloop"></div>
			<div className="bloop"></div>
			<div className="logo">
				<svg
					fill="none"
					height="16"
					viewBox="0 0 109 34"
					width="51.3"
					xmlns="http://www.w3.org/2000/svg">
					<clipPath id="a83e6c200bd1">
						<path d="m0 0h109v34h-109z"></path>
					</clipPath>
					<g clipPath="url(#a83e6c200bd1)" fill="currentColor">
						<path d="m25.76 7.94004-9.53-5.06c-1.17-.62-2.57-.62-3.74 0l-9.62 5.07c-1.46.87-2.81 1.91-2.87 4.89996v2.42h3.75v-3.31l10.62-5.65996 10.54 5.65996v3.31h3.75v-2.42c-.06-3.00996-1.43-4.03996-2.89-4.90996z"></path>
						<path d="m24.91 22.81-8.67 4.85v-3.92c3.05-.72 5.05-3.19 5.05-6.51 0-4.02-2.78-6.73-6.92-6.73s-6.92 2.7-6.92 6.73c0 3.32 2 5.8 5.05 6.51v3.92l-8.75-4.85v-3.62h-3.75v2.42c.06 2.99 1.41 4.03 2.87 4.9l9.63 5.07c1.17.62 2.57.61 3.74 0l9.53-5.05c1.46-.88 2.83-1.9 2.9-4.91v-2.42h-3.75v3.62zm-13.98-5.58c0-2.2 1.22-3.41 3.44-3.41s3.44 1.21 3.44 3.41-1.29 3.42-3.44 3.42-3.44-1.28-3.44-3.42z"></path>
						<path d="m94.1699 9.0902h-5.22l-6.71 6.87v-10.26h-4.3v20.79h4.3v-5.2l2.22-2.27 5.84 7.47h4.83l-7.99-10.22z"></path>
						<path d="m108.21 8.63965c-4.13 0-6.32 1.68995-7.14 2.50995v-2.06995h-4.37v17.40995h4.37v-13.97l7.95-.03-.02-3.84995c-.25 0-.51 0-.79 0z"></path>
						<path d="m68.2601 8.62988c-3.3 0-5.38 2.14002-5.53 2.30002v-1.86002h-4.37v17.42002h4.37v-14.36h3.25.49c1.09.04 1.92.21 2.54.54.2.11.39.24.56.39.93.83 1.17 2.23 1.17 4.33v9.1h4.31v-10.4c0-4.31-1.98-7.46002-6.78-7.46002z"></path>
						<path d="m50.9201 11.4601c-.54-.76-1.17-1.35-1.91-1.79998-1.29-.66-2.75-1.04-4.31-1.04-5.16 0-9.34 4.11998-9.34 9.19998 0 3.83 2.38 7.12 5.77 8.5 1.1.45 2.31.7 3.57.7.8 0 1.57-.1 2.3-.28.02 0 .04-.01.06-.02.08-.02.15-.04.23-.06.32-.1.63-.21.92-.34 1.29-.57 2.2-1.42 2.71-2.39v2.56h4.37v-17.41998h-4.37zm-5.46 11.98c-3.41 0-5.61-2.3-5.61-5.61 0-3.52 2.14-5.61 5.61-5.61 3.06 0 5.61 2.03 5.61 5.61s-2.64 5.61-5.61 5.61z"></path>
					</g>
				</svg>
			</div>
			<div>
				<h1 className="animate-heading">Ankr Airdrop</h1>
				<div className="objectives">
					<span className="objective">Complete Tasks</span>
					<span className="dot"></span>
					<span className="objective">Refer Friends</span>
					<span className="dot"></span>
					<span className="objective">Earn</span>
				</div>
			</div>
			{state.user ? (
				<Link
					to={redirectURL || "/dashboard"}
					className="animate-button">
					Continue
				</Link>
			) : (
				<div className="spinner-container">
					<CgSpinner className="spinner" style={{ fontSize: 36 }} />
				</div>
			)}
		</div>
	);
};

export default LandingPage;
