import "../styles/summaryCards.css";
import moneySend from "../assets/summaryCard/moneySend.png";
import moneyReceive from "../assets/summaryCard/moneyReceive.png";
import jobs from "../assets/summaryCard/jobs.png";
import medalStar from "../assets/summaryCard/medalStar.png";

const SummaryCards = () => {
	return (
		<>
			<div className="summary-card">
				<div className="summary-card-moneySpent">
					<img src={moneySend} alt="Money Spent" />
					<div>
						<span>Money Spent</span>
						<span>
							$15,650<span className="decimal">.20</span>
						</span>
					</div>
				</div>
				<div className="summary-card-outstandingAmount">
					<img src={moneyReceive} alt="Outstanding Amount" />
					<div>
						<span>Outstanding Amount</span>
						<span>
							$300<span className="decimal">.20</span>
						</span>
					</div>
				</div>
				<div className="summary-card-totalJobs">
					<img src={jobs} alt="Total Jobs" />
					<div>
						<span>Total Jobs</span>
						<span>11</span>
					</div>
				</div>
				<div className="summary-card-customerLifetime">
					<img src={medalStar} alt="Customer Lifetime" />
					<div>
						<span>Customer Lifetime</span>
						<span>10 Years</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default SummaryCards;
