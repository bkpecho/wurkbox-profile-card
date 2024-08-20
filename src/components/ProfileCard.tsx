import "../styles/profileCard.css";
import NavBar from "./nav";
import HeaderBar from "./HeaderBar";
import SummaryCards from "./SummaryCards";
import ContactNotes from "./ContactAndNotes";
import PropertiesSection from "./PropertiesSection";

const profileCard = () => {
	return (
		<div className="profile-card">
			<NavBar />
			<HeaderBar />
			<SummaryCards />
			<ContactNotes />
			<PropertiesSection />
		</div>
	);
};

export default profileCard;
