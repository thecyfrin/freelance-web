import React, { useContext, useEffect, useState } from "react";
import "./pricing-plan.css";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import PageTopbar from "../../components/PageTopbar";
import BasicPricing from "../../assets/images/svg/ic_pricing/basic-pricing-ic.svg?react";
import StandardPricing from "../../assets/images/svg/ic_pricing/standard-pricing-ic.svg?react";
import PremiumPricing from "../../assets/images/svg/ic_pricing/premium-pricing-ic.svg?react";
import BusinessPricing from "../../assets/images/svg/ic_pricing/business-pricing-ic.svg?react";
import ArrowForward from "../../assets/images/svg/forward-arrow.svg?react";

import { FormControlLabel, styled, Switch } from "@mui/material";

const items = [
	{ page: "Home", link: "/" },
	{ page: "Pages", link: "/" },
	{ page: "Pricing Plans", link: "/pricing-plans" },
];

const bottomItems = [
	{ name: "Documentation", link: "/" },
	{ name: "Privacy Policy", link: "/" },
	{ name: "FAQs", link: "/faq" },
];

const IOSSwitch = styled((props) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 42,
	height: 26,
	padding: 0,
	"& .MuiSwitch-switchBase": {
		padding: 0,
		margin: 2,
		transitionDuration: "300ms",
		"&.Mui-checked": {
			transform: "translateX(16px)",
			color: "#fff",
			"& + .MuiSwitch-track": {
				backgroundColor: "#65C466",
				opacity: 1,
				border: 0,
				...theme.applyStyles("dark", {
					backgroundColor: "#2ECA45",
				}),
			},
			"&.Mui-disabled + .MuiSwitch-track": {
				opacity: 0.5,
			},
		},
		"&.Mui-focusVisible .MuiSwitch-thumb": {
			color: "#33cf4d",
			border: "6px solid #fff",
		},
		"&.Mui-disabled .MuiSwitch-thumb": {
			color: theme.palette.grey[100],
			...theme.applyStyles("dark", {
				color: theme.palette.grey[600],
			}),
		},
		"&.Mui-disabled + .MuiSwitch-track": {
			opacity: 0.7,
			...theme.applyStyles("dark", {
				opacity: 0.3,
			}),
		},
	},
	"& .MuiSwitch-thumb": {
		boxSizing: "border-box",
		width: 22,
		height: 22,
	},
	"& .MuiSwitch-track": {
		borderRadius: 26 / 2,
		backgroundColor: "#E9E9EA",
		opacity: 1,
		transition: theme.transitions.create(["background-color"], {
			duration: 500,
		}),
		...theme.applyStyles("dark", {
			backgroundColor: "#39393D",
		}),
	},
}));

function CheckIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			className="h-3 w-3">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M4.5 12.75l6 6 9-13.5"
			/>
		</svg>
	);
}

export const PricingPlans = () => {
	const [hoveredPlan, setHoveredPlan] = useState(null);
	const planDetails = [
		{
			id: 1,
			image: (isHovered) => (
				<BasicPricing fill={isHovered ? "#fff" : "#005de82b"} />
			),
			name: "Basic",
			desc: "Aenean efficitur euismod elementum. Donec ullamcorper pretium tempus.",
			price: "19.99",
			duration: "year",
			features: [
				"Upgraded profile",
				"Multi-shot & video",
				"Instant creative portfolio",
			],
		},
		{
			id: 2,
			image: (isHovered) => (
				<StandardPricing fill={isHovered ? "#fff2ad" : "#005de82b"} />
			),
			name: "Standard",
			desc: "Aenean efficitur euismod elementum. Donec ullamcorper pretium tempus.",
			price: "49.99",
			features: [
				"Upgraded profile",
				"Multi-shot & video",
				"Instant creative portfolio",
				"Sell goods",
				"'Hire me/us' button on shots",
			],
		},
		{
			id: 3,
			image: (isHovered) => (
				<PremiumPricing fill={isHovered ? "#ff00003d" : "#005de82b"} />
			),
			name: "Premium",
			desc: "Aenean efficitur euismod elementum. Donec ullamcorper pretium tempus.",
			price: "99.99",
			features: [
				"Upgraded profile",
				"Multi-shot & video",
				"Instant creative portfolio",
				"Sell goods",
				"'Hire me/us' button on shots",
				"Freelance job board exclusive",
				"Daily freelance projects email",
			],
		},
		{
			id: 4,
			image: (isHovered) => (
				<BusinessPricing fill={isHovered ? "#05f2783d" : "#005de82b"} />
			),
			name: "Business",
			desc: "Aenean efficitur euismod elementum. Donec ullamcorper pretium tempus.",
			price: "179.99",
			features: [
				"Upgraded profile",
				"Multi-shot & video",
				"Instant creative portfolio",
				"Sell goods",
				"'Hire me/us' button on shots",
				"Freelance job board exclusive",
				"Daily freelance projects email",
				"Team profile and members",
				"Hiring search listing priority placement",
			],
		},
	];
	const context = useContext(MyContext);

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(9);
	}, [context]);
	return (
		<>
			<div className="pricing-plan-wrapper flex flex-col w-full h-full p-2">
				<div className="flex flex-row items-center justify-between">
					<PageTopbar items={items} pageName="Pricing Plans" />
					<div className="flex flex-row justify-center items-center px-4 ">
						<span className="text-sm font-medium">Monthly</span>
						<FormControlLabel
							control={<IOSSwitch sx={{ ml: 3.5, mr: 0 }} defaultChecked />}
						/>
						<span className="text-sm font-medium">Yearly</span>
					</div>
				</div>
				<div className="plans-container flex flex-row  items-start justify-start w-[100%] gap-3">
					{planDetails.map((plan) => (
						<React.Fragment key={plan.id}>
							<div
								className="pricing-wrapper  flex flex-col items-start justify-start"
								onMouseEnter={() => setHoveredPlan(plan.id)}
								onMouseLeave={() => setHoveredPlan(null)}>
								<div className="flex flex-col items-center justify-center px-2 gap-3">
									<span className="h-8 w-8 flex align-middle">
										{plan.image(hoveredPlan === plan.id)}
									</span>
									<span className="text-lg  font-bold">{plan.name}</span>
									<span
										className={`  text-center text-sm ${
											hoveredPlan === plan.id ? "text-white" : "text-gray-500"
										} `}>
										{plan.desc}
									</span>
									<div className="flex flex-col gap-1 items-center justify-center">
										<span className="font-bold text-black text-3xl ">{`$${plan.price}`}</span>
										<span
											className={`font-normal ${
												hoveredPlan === plan.id ? "text-black" : "text-gray-400"
											}`}>
											/PER YEAR
										</span>
									</div>
									<Button
										onClick={() => {}}
										ripple={true}
										size="sm"
										variant="gradient"
										className={`w-1/2 max-w-[12rem] rounded-full ${
											hoveredPlan === plan.id
												? "text-black outline-none  bg-slate-200"
												: "text-[#005CE8]  outline-[#005CE8] outline-1 outline bg-white"
										}`}>
										Get Started
										<span
											className={` w-[30px] h-[30px] flex items-center justify-center rounded-sm text-black ${
												hoveredPlan === plan.id ? "" : "hidden"
											}`}>
											<ArrowForward
												style={{
													fill: hoveredPlan === plan.id ? "#005CE8" : "#fff",
												}}
											/>
										</span>
									</Button>
								</div>

								<div className="divider-pricing" />
								<div className="flex flex-col gap-1 p-4">
									{plan.features.map((feature) => (
										<React.Fragment key={feature}>
											<div
												className={`flex flex-row gap-2 items-center justify-start text-start text-md  ${
													hoveredPlan === plan.id
														? "text-black font-medium"
														: "text-gray-500 font-normal"
												}`}>
												<span
													className={`h-5 w-5 rounded-full  p-1 ${
														hoveredPlan === plan.id
															? "text-gray-400 bg-slate-200"
															: "text-white bg-blue-300/90"
													}`}>
													<CheckIcon />
												</span>

												{feature}
											</div>
										</React.Fragment>
									))}
								</div>
							</div>
						</React.Fragment>
					))}
				</div>
				<div className="billingFooter mt-2">
					{bottomItems.map((item, index) => (
						<React.Fragment key={index}>
							<Link to={item.link}>
								<div className={`linkName   overflow-hidden rounded-r-sm`}>
									{item.name}
								</div>
							</Link>
							{index < bottomItems.length - 1 && (
								<span
									className={`nothing w-[25px] h-[25px] flex items-center justify-center  `}>
									⚈
								</span>
							)}
						</React.Fragment>
					))}
				</div>
			</div>
		</>
	);
};
