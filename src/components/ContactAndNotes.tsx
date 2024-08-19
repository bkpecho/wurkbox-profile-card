import "../styles/contactNotes.css";
import plus from "../assets/contactAndNotes/plus.png";
import chevronRight from "../assets/contactAndNotes/chevron-right.png";
import location from "../assets/contactAndNotes/location.png";
import call from "../assets/contactAndNotes/call.png";
import sms from "../assets/contactAndNotes/sms.png";
import edit from "../assets/contactAndNotes/edit.png";
import messageText from "../assets/contactAndNotes/messageText.png";

const ContactNotes = () => {
	return (
		<div>
			<div className="contact-notes">
				<div className="contact-container">
					<h2>Contacts</h2>
					<div className="contact-container-division">
						<div className="contact-section">
							<div className="tab">
								<div className="tab-customer-info">
									<h3>LJ Hooker Casula</h3>
									<span>Primary Customer</span>
								</div>
								<img src={chevronRight} className="chevron-icon" />
							</div>
							<div className="tab">
								<h3>Steve Smith</h3>
								<span>Primary Customer</span>
							</div>
							<div className="tab">
								<h3>Alex Smooth</h3>
								<span>Primary Customer</span>
							</div>
							<div>
								<img src={plus} alt="" />
								<a href="">Additional Contact</a>
							</div>
						</div>
						<div className="customer-info">
							<div className="customer-data">
								<h3>LJ Hooker Casula</h3>
								<span>Primary Customer</span>
							</div>
							<div className="customer-billing-address">
								<h4>Billing Address</h4>
								<div className="location">
									<img src={location} alt="Location" className="location-icon" />
									<p>91 Marigold Street, Revesby, 2212 NSW Australia</p>
									<a href="" className="location-button">
										Open Map
									</a>
								</div>
							</div>
							<div className="customer-contact-data">
								<div className="customer-contact-info">
									<h4>Mobile</h4>
									<div>
										<img src={call} alt="Mobile" />
										<span>0404 387 819</span>
									</div>
								</div>
								<div className="customer-contact-info">
									<h4>Phone</h4>
									<div>
										<img src={call} alt="Phone" />
										<span>987 954 02</span>
									</div>
								</div>
								<div className="customer-contact-info">
									<h4>Image</h4>
									<div>
										<img src={sms} alt="Email" />
										<span>customer@hotmail.com</span>
									</div>
								</div>
							</div>
							<div className="customer-payment-terms">
								<h4>Payment Terms</h4>
								<span>14 Days</span>
							</div>
						</div>
						<div className="floating-button">
							<a href="">
								<img src={edit} alt="Edit Button" />
							</a>
						</div>
					</div>
				</div>
				<div className="notes-container">
					<div className="notes-header">
						<h2>Notes</h2>
						<div className="notes-button">
							<img src={messageText} alt="Add Note" />
							<a href="">Add Note</a>
						</div>
					</div>
					<div className="notes-section">
						<h4>April 15, 2024, 2:54 pm</h4>
						<span>Posted by Samantha</span>

						<div className="fade-container">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
								suscipit, eos cumque cum aliquid quasi velit eaque neque vel,
								eligendi voluptates ut. Quaerat beatae voluptatem mollitia iure
								soluta aliquam neque, dolorum eos et dolores minima ab iusto quas
								reprehenderit. Quasi, quo perspiciatis? Neque voluptates nesciunt,
								blanditiis quisquam unde ea aut rerum! Dolore vero ipsum officia,
								voluptatum illum architecto ab nisi ipsa expedita sequi, laudantium,
								sed dolorem voluptatibus maiores minima beatae facere. Dolores amet
								odio ullam. Perferendis ipsum molestiae et necessitatibus labore
								voluptatum similique ab asperiores incidunt consectetur dolor soluta
								fugiat nisi amet officiis, facere magni voluptates impedit,
								inventore est praesentium!
							</p>
						</div>
						<a href="">View All Notes</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactNotes;
