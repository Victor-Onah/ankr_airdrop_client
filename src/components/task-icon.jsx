import { FaFacebook, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa6";

const TaskIcon = ({ platform }) => {
	switch (platform) {
		case "Facebook":
			return <FaFacebook style={{ color: "#5555ff" }} />;
		case "YouTube":
			return <FaYoutube style={{ color: "#ff5555" }} />;
		case "WhatsApp":
			return <FaWhatsapp style={{ color: "#55ff55" }} />;
		default:
			return <FaTelegram style={{ color: "#2e72ff" }} />;
	}
};

export default TaskIcon;
