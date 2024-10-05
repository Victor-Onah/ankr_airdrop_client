export const PendingTasksUi = () => {
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
								height: "1.5rem",
								width: "1.5rem",
								borderRadius: "50%",
								backgroundColor: "#555"
							}}></div>
						<div
							style={{
								flex: 1
							}}>
							<div
								style={{
									height: "1.25rem",
									borderRadius: "6px",
									backgroundColor: "#555",
									marginBottom: "0.15rem"
								}}></div>
							<div
								style={{
									height: "1.25rem",
									borderRadius: "6px",
									backgroundColor: "#555",
									width: "60%"
								}}></div>
						</div>
						<div
							style={{
								height: "1.5rem",
								width: 40,
								borderRadius: "6px",
								backgroundColor: "#555"
							}}></div>
					</div>
				);
			})}
		</div>
	);
};

export const CompletedTasksUi = () => {
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
								height: "1.5rem",
								width: "1.5rem",
								borderRadius: "50%",
								backgroundColor: "#555"
							}}></div>
						<div
							style={{
								flex: 1
							}}>
							<div
								style={{
									height: "1.25rem",
									borderRadius: "6px",
									backgroundColor: "#555",
									marginBottom: "0.15rem"
								}}></div>
							<div
								style={{
									height: "1.25rem",
									borderRadius: "6px",
									backgroundColor: "#555",
									width: "60%"
								}}></div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
