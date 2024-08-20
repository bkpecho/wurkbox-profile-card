import "../styles/propertySection.css";
import building from "../assets/propertySection/building.png";
import chevron from "../assets/propertySection/chevron.png";
import plus from "../assets/propertySection/plus.png";
import call from "../assets/propertySection/call.png";
import briefcase from "../assets/propertySection/briefcase.png";
import media from "../assets/propertySection/gallery.png";
import message from "../assets/propertySection/message-text.png";
import edit from "../assets/propertySection/pencil.png";

interface Job {
	id: number;
	jobNumber: string;
	bookingDate: string;
	description: string;
	type: string;
	priority: string;
	amount: string;
	paid: string;
	balance: string;
	status: string;
}

const jobHeaderItems = [
	{
		id: "jobs",
		label: "Jobs",
		iconSrc: briefcase,
		hasNotification: true,
		notificationCount: 5,
		isSelected: true,
	},
	{
		id: "pending-quotes",
		label: "Pending Quotes",
		hasNotification: false,
		notificationCount: 0,
		isSelected: false,
	},
	{
		id: "complaints",
		label: "Complaints",
		hasNotification: true,
		notificationCount: 2,
		isSelected: false,
	},
	{
		id: "callbacks",
		label: "Callbacks",
		hasNotification: false,
		notificationCount: 0,
		isSelected: false,
	},
	{
		id: "notes",
		label: "Notes",
		iconSrc: message,
		hasNotification: false,
		notificationCount: 0,
		isSelected: false,
	},
	{
		id: "media",
		label: "Media",
		iconSrc: media,
		hasNotification: true,
		notificationCount: 3,
		isSelected: false,
	},
];

const jobs: Job[] = [
	{
		id: 1,
		jobNumber: "#461366",
		bookingDate: "12-10-2024",
		description:
			"Complete overhaul of kitchen plumbing system, including replacement of old pipes, installation of new sink and dishwasher, and repair of leaky faucets. Additional work may be required to address water pressure issues and update drainage system to meet current building codes.",
		type: "Other - Plumbing",
		priority: "Callback",
		amount: "$500.00",
		paid: "$500.00",
		balance: "$0.00",
		status: "Canceled",
	},
	{
		id: 2,
		jobNumber: "#789012",
		bookingDate: "15-11-2024",
		description:
			"Comprehensive electrical wiring inspection of a three-story commercial building. This includes checking all circuits, outlets, and fixtures for safety and code compliance. Will also assess the need for upgrades to support increased power demands from modern office equipment and provide recommendations for energy-efficient lighting solutions.",
		type: "Electrical",
		priority: "Other - Plumbing",
		amount: "$750.00",
		paid: "$375.00",
		balance: "$375.00",
		status: "Ongoing",
	},
	{
		id: 3,
		jobNumber: "#234567",
		bookingDate: "03-12-2024",
		description:
			"Full HVAC system maintenance for a large residential complex. Tasks include cleaning air ducts, replacing filters, checking refrigerant levels, inspecting heat exchangers, and calibrating thermostats in all units. Will also perform an energy efficiency audit and suggest potential upgrades to improve overall system performance.",
		type: "HVAC",
		priority: "Hot Water Service",
		amount: "$600.00",
		paid: "$0.00",
		balance: "$600.00",
		status: "Completed",
	},
	{
		id: 4,
		jobNumber: "#890123",
		bookingDate: "22-01-2025",
		description:
			"Extensive roof repair project to address multiple leaks and structural damage. Work involves replacing damaged shingles, repairing underlayment, sealing around chimneys and vents, and reinforcing weakened rafters. Will also install improved drainage systems to prevent future water accumulation and potential damage.",
		type: "Roofing",
		priority: "Blocked Drain",
		amount: "$1200.00",
		paid: "$600.00",
		balance: "$600.00",
		status: "Ongoing",
	},
	{
		id: 5,
		jobNumber: "#345678",
		bookingDate: "08-02-2025",
		description:
			"Large-scale window replacement project for a historic building. This involves carefully removing old, single-pane windows and installing energy-efficient, double-pane replacements while maintaining the original architectural aesthetic. Special care will be taken to preserve and restore surrounding woodwork and ensure proper insulation.",
		type: "Carpentry",
		priority: "Blocked Drain",
		amount: "$2000.00",
		paid: "$1000.00",
		balance: "$1000.00",
		status: "Canceled",
	},
	{
		id: 6,
		jobNumber: "#901234",
		bookingDate: "17-03-2025",
		description:
			"Complete bathroom renovation including tub-to-shower conversion, installation of new vanity and toilet, updating of all plumbing fixtures, and installation of heated flooring. Project also includes tiling of walls and floor, painting, and installation of new lighting and ventilation systems to improve overall functionality and aesthetics.",
		type: "Remodeling",
		priority: "Other - Plumbing",
		amount: "$5000.00",
		paid: "$2500.00",
		balance: "$2500.00",
		status: "Ongoing",
	},
	{
		id: 7,
		jobNumber: "#456789",
		bookingDate: "04-04-2025",
		description:
			"Comprehensive pest control treatment for a large agricultural facility. This includes initial assessment of infestation levels, implementation of various treatment methods including chemical applications and traps, and development of long-term prevention strategies. Follow-up visits will be scheduled to monitor effectiveness and adjust approach as necessary.",
		type: "Pest Control",
		priority: "Other - Plumbing",
		amount: "$300.00",
		paid: "$300.00",
		balance: "$0.00",
		status: "Completed",
	},
	{
		id: 8,
		jobNumber: "#012345",
		bookingDate: "25-05-2025",
		description:
			"Extensive landscape design and installation project for a newly constructed corporate campus. Work includes creating and implementing a comprehensive landscape plan with a focus on native, drought-resistant plants. Project also involves installation of an efficient irrigation system, creation of outdoor seating areas, and construction of decorative water features to enhance the overall aesthetic and functionality of the space.",
		type: "Landscaping",
		priority: "Other - Plumbing",
		amount: "$3500.00",
		paid: "$1750.00",
		balance: "$1750.00",
		status: "Completed",
	},
];

const truncateDescription = (description: string, maxLength: number = 110): string => {
	if (description.length <= maxLength) return description;
	return `${description.slice(0, maxLength)}... READ MORE`;
};

const PropertiesSection = () => {
	return (
		<>
			<div className="property-component">
				<h2 className="property-header-title">Properties</h2>
				<div className="property-header">
					<div className="property-header-left">
						<div>
							<img src={building} alt="Building Icon" />
							<h3>Select Property</h3>
						</div>
						<div className="property-header-dropdown">
							<span>64 Cambridge Street, Lidcombe, 2141 NSW Australia</span>
							<img src={chevron} alt="Chevron Down" />
						</div>
					</div>
					<div className="property-header-right">
						<a href="" className="property-header-edit">
							<img src={edit} alt="Edit Icon" />
						</a>
						<a href="" className="property-header-add-property">
							<img src={plus} alt="Plus Button" className="add-property-icon" />
							<span className="add-property-text">Add Property</span>
						</a>
					</div>
				</div>
				<div className="property-site-details">
					<div className="property-site-details-header">
						<h3>Site Contact Details</h3>
						<div className="property-site-address">
							<h4>Job Site Address</h4>
							<p>64 Cambridge Street, Lidcombe, 2141 NSW Australia</p>
						</div>

						<div className="customer-info">
							<div className="contact-name">
								<h4>Name</h4>

								<p>Steve Smith</p>
							</div>
							<div className="contact-mobile">
								<h4>Mobile</h4>
								<div className="contact-phone-icon">
									<img src={call} alt="Call Icon" />
									<p>0412 345 678</p>
								</div>
							</div>
							<div className="contact-phone">
								<h4>Phone</h4>
								<div className="contact-phone-icon">
									<img src={call} alt="Call Icon" />
									<p>0412 345 678</p>
								</div>
							</div>
							<div className="contact-customer-relationship">
								<h4>Customer Relationship</h4>
								<p>Primary Customer</p>
							</div>
						</div>
					</div>

					<div className="jobs-table">
						<div className="jobs-table-header">
							{jobHeaderItems.map((item) => (
								<a
									key={item.id}
									className={`nav-item ${
										item.isSelected ? "jobs-table-span-selected" : ""
									}`}
								>
									{item.iconSrc && (
										<img
											src={item.iconSrc}
											alt={`${item.label} icon`}
											className="nav-icon"
										/>
									)}
									<span>{item.label}</span>
									{item.hasNotification && (
										<span className="jobs-notification">
											{item.notificationCount}
										</span>
									)}
								</a>
							))}
						</div>
						<div>
							<table className="jobs-table-list">
								<thead>
									<tr>
										<th>Job #</th>
										<th>Booking date</th>
										<th>Description</th>
										<th>Type</th>
										<th>Priority</th>
										<th>Amount</th>
										<th>Paid</th>
										<th>Balance</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									{jobs.map((job: Job) => (
										<tr key={job.id}>
											<td>{job.jobNumber}</td>
											<td>{job.bookingDate}</td>
											<td className="description">
												{truncateDescription(job.description)}
											</td>
											<td>{job.type}</td>
											<td>{job.priority}</td>
											<td>{job.amount}</td>
											<td>{job.paid}</td>
											<td
												className={`balance ${
													parseFloat(job.balance.replace("$", "")) > 0
														? "positive"
														: ""
												}`}
											>
												{job.balance}
											</td>
											<td className={`status ${job.status.toLowerCase()}`}>
												{job.status}
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<div className="summary-container">
								<div className="summary-item">
									<span className="summary-label">Total</span>
									<span className="summary-value">$500.00</span>
								</div>
								<div className="summary-item">
									<span className="summary-label">Paid</span>
									<span className="summary-value">$500.00</span>
								</div>
								<div className="summary-item">
									<span className="summary-label">Balance</span>
									<span className="summary-value">$0.00</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PropertiesSection;
