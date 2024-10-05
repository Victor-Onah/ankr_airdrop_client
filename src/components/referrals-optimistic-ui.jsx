const PendingReferralsUi = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "0.75rem"
			}}>
			{new Array(6).fill(true).map((_, i) => {
				return (
					<div
						key={i}
						className="animate-pulse"
						style={{
							display: "flex",
							gap: "0.5rem"
						}}>
						<div
							style={{
								height: "1.25rem",
								borderRadius: "6px",
								backgroundColor: "#555",
								flex: 1
							}}></div>
						<div
							style={{
								flex: 1,
								height: "1.25rem",
								borderRadius: "6px",
								backgroundColor: "#555"
							}}></div>
						<div
							style={{
								flex: 1,
								height: "1.25rem",
								borderRadius: "6px",
								backgroundColor: "#555"
							}}></div>
					</div>
				);
			})}
		</div>
	);
};

export default PendingReferralsUi;
