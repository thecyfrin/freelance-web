import React, { useContext, useEffect } from "react";
import "./membership.css";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const allFeatures = [
	"Free Setup",
	"Bandwidth Limit 10 GB",
	"20 User Connection",
	"Analytics Report",
	"Public API Access",
	"Plugins Integration",
	"Custom Content Management",
];

export const PlanPrices = () => {
	const planDetails = [
		{
			name: "Basic",
			desc: "Monthly Charge",
			price: "14.99",
			features: ["Free Setup", "Bandwidth Limit 10 GB", "20 User Connection"],
		},
		{
			name: "Standard",
			desc: "Monthly Charge",
			price: "49.99",
			features: [
				"Free Setup",
				"Bandwidth Limit 10 GB",
				"20 User Connection",
				"Analytics Report",
				"Public API Access",
			],
		},
		{
			name: "Premium",
			desc: "Monthly Charge",
			price: "89.99",
			features: [
				"Free Setup",
				"Bandwidth Limit 10 GB",
				"20 User Connection",
				"Analytics Report",
				"Public API Access",
				"Plugins Integration",
				"Custom Content Management",
			],
		},
	];
	const context = useContext(MyContext);

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(4);

	}, [context]);
	return (
		<>
			<div className="membershipWrapper flex p-2 gap-1 ">
				<div className="w-100 flex flex-col items-start justify-start">
					<span className="pageName p-3 ">Pricing</span>

					<div className="flex flex-row pl-10 pr-10 pt-2 pb-2 justify-start items-center w-[100%] gap-3">
						{planDetails.map((plan) => (
							<React.Fragment key={plan.name}>
								<div className="planWrapper p-3 flex flex-col items-center justify-center">
									<span className="planName  ">{plan.name}</span>
									<span className="planDesc  ">{plan.desc}</span>
									<span className="planPrice font-normal ">{`$${plan.price}`}</span>
									<div className="divider" />
									{allFeatures.map((feature) => (
										<React.Fragment key={feature}>
											<div
												className={`features ${
													plan.features.includes(feature) ? "active" : ""
												} text-center  overflow-hidden rounded-r-sm`}>
												{feature}
											</div>
										</React.Fragment>
									))}
									<div className="divider" />
									<div className="p-2"></div>

									<Button
										onClick={() => {}}
										ripple={true}
										variant="gradient"
										className={`membershipButton `}>
										Get Started
									</Button>

									<div className="p-1"></div>
									<Link to="/">
										<span className="startTrial ">
											Start Your 30 Day Free Trial
										</span>
									</Link>
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
