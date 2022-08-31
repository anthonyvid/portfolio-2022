import animationData from "../../lotties/background-lines.json";
import Lottie from "react-lottie";

export const BackgroundLines = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div
			className="d-flex justify-content-center align-items-center position-fixed"
			style={{
				width: "100vw",
				height: "100vh",
				top: "0",
				left: "0",
				zIndex: "-10",
			}}
		>
			<div>
				<Lottie options={defaultOptions} />
			</div>
		</div>
	);
};
