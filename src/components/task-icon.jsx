import { FaTasks } from "react-icons/fa";
import { FaFacebook, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa6";

const TaskIcon = ({ platform, imageUrl }) => {
	switch (platform) {
		case "Facebook":
			return <FaFacebook style={{ color: "#5555ff" }} />;
		case "YouTube":
			return <FaYoutube style={{ color: "#ff5555" }} />;
		case "WhatsApp":
			return <FaWhatsapp style={{ color: "#55ff55" }} />;
		case "Telegram":
			return <FaTelegram style={{ color: "#2e72ff" }} />;
		default:
			return <FaTasks />;
	}
};

export default TaskIcon;
