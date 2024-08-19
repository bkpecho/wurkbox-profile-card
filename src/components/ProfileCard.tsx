import "../styles/profileCard.css";
import NavBar from "./NavBar";
import HeaderBar from "./HeaderBar";
import SummaryCards from "./SummaryCards";

const profileCard = () => {
	return (
		<div className="profile-card">
			<NavBar />
			<HeaderBar />
			<SummaryCards />
		</div>
	);
};

export default profileCard;
