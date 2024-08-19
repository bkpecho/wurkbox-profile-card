import "../styles/headerBar.css";
import google from "../assets/headerBar/google.png";
import chevronDown from "../assets/headerBar/chevron-down.png";
const HeaderBar = () => {
	return (
		<section>
			<div className="left-section">
				<div className="customer-name">LJ Hooker Casula</div>
				<div className="tags">
					<div className="vip">
						<span className="vip-text">VIP</span>
					</div>
					<div>
						<span className="finance-approved">Finance Approved</span>
					</div>
					<div className="google">
						<img src={google} alt="Google" />
						<span>Google</span>
					</div>
				</div>
			</div>

			<div className="right-section">
				<div className="job-button">
					<a href="">Add New Job</a>
				</div>
				<div>
					<a href="#" className="actions-button">
						<span className="text">Actions</span>
						<span className="arrow">
							<img src={chevronDown} alt="Down Arrow" />
						</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default HeaderBar;
