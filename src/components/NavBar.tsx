import "../styles/navbar.css";
import logo from "../assets/navbar/logo.png";
import call from "../assets/navbar/call.png";
import search from "../assets/navbar/search.png";
import bell from "../assets/navbar/bell.png";
import profile from "../assets/navbar/profile.png";

import element from "../assets/navbar/element.png";
import chart from "../assets/navbar/chart-column.png";
import squareList from "../assets/navbar/square-list.png";
import gear from "../assets/navbar/gear.png";

const navbar = () => {
	return (
		<>
			<nav>
				<div className="left-section">
					<div className="nav-logo">
						<img src={logo} alt="Logo" />
					</div>
					<div className="tabs">
						<div className="tab">
							<img src={element} alt="Schedule" />
							<span>Scheduler</span>
						</div>
						<div className="tab">
							<img src={chart} alt="Reports" />
							<span>Reports</span>
						</div>
						<div className="tab">
							<img src={squareList} alt="Price Book" />
							<span>Price Book</span>
						</div>
						<div className="tab">
							<img src={gear} alt="Accounting" />
							<span>Accounting</span>
						</div>
						<div className="tab">
							<img src={gear} alt="Settings" />
							<span>Settings</span>
						</div>
					</div>
				</div>

				<div className="right-section">
					<div className="right-group">
						<div className="right-group-items">New Job</div>
						<div className="right-group-items">
							Sky Rocket Plumbing & Electrical NSW
						</div>
					</div>
					<div className="icons-group">
						<a href="">
							<img src={call} alt="" />
						</a>
						<a href="">
							<img src={search} alt="" />
						</a>
						<a href="">
							<img src={bell} alt="" />
						</a>
						<a href="">
							<img src={profile} alt="" />
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default navbar;
