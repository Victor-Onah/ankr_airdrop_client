import wallet from "../../assets/3d-wallet.webp";

const WalletPage = () => {
	return (
		<div className="wallet-page">
			<div className="wallet-img-container">
				<div className="bloop fade-in"></div>
				<div
					style={{
						height: 300,
						overflow: "hidden",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						style={{
							animation:
								"animate-to-bottom 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
							opacity: 0,
						}}
						src={wallet}
						alt="3D Wallet"
					/>
				</div>
			</div>
			<div
				style={{
					textAlign: "center",
					animation:
						"animate-to-top 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
					opacity: 0,
				}}
			>
				<h1>Coming Soon</h1>
				<p>This page will be updated when payout starts</p>
			</div>
		</div>
	);
};

export default WalletPage;
