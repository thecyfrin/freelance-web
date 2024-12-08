import "./billing.css";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import PageTopbar from "../../components/PageTopbar";
import ArrowForward from "../../assets/images/svg/forward-arrow.svg";
import ClockIcon from "../../assets/images/svg/ic-clock.svg";
import CardIcon from "../../assets/images/svg/ic-card.svg";
import VisaIcon from "../../assets/images/svg/visa-icon.svg";
import MasterCardIcon from "../../assets/images/svg/mastercard-icon.svg";
import CopyIcon from "../../assets/images/svg/copy-icon.svg";
import ArrowPrevious from "@mui/icons-material/KeyboardArrowLeftRounded";
import ArrowNext from "@mui/icons-material/KeyboardArrowRightRounded";
import DownloadIcon from "../../assets/images/svg/download-icon.svg";
import PrintIcon from "../../assets/images/svg/print-icon.svg";
import DeleteIcon from "../../assets/images/svg/delete.svg";

import { Divider } from "@mui/material";

import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
	IconButton,
	Chip,
	MenuList,
	Menu,
	MenuHandler,
	MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import moment from "moment";
import CardAddDialog from "./add-new-card";
import SvgIcons from "../../utils/icon-functions";

function CheckIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.0303 7.96967C18.3232 8.26256 18.3232 8.73744 18.0303 9.03033L11.0303 16.0303C10.7374 16.3232 10.2626 16.3232 9.96967 16.0303L5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697C6.26256 10.6768 6.73744 10.6768 7.03033 10.9697L10.5 14.4393L16.9697 7.96967C17.2626 7.67678 17.7374 7.67678 18.0303 7.96967Z"
				fill="#005CE8"
			/>
		</svg>
	);
}

function OptionIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5C6.82843 13.5 7.5 12.8284 7.5 12C7.5 11.1716 6.82843 10.5 6 10.5Z"
				fill="#FFFFFF"
			/>
			<path
				d="M10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12Z"
				fill="#FFFFFF"
			/>
			<path
				d="M16.5 12C16.5 11.1716 17.1716 10.5 18 10.5C18.8284 10.5 19.5 11.1716 19.5 12C19.5 12.8284 18.8284 13.5 18 13.5C17.1716 13.5 16.5 12.8284 16.5 12Z"
				fill="#FFFFFF"
			/>
		</svg>
	);
}

function VerticalOptionIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25ZM12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25Z"
				fill="#005CE8"
				stroke="#005CE8"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

function AddRounded() {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
				stroke="#005CE8"
				strokeWidth="2"
				strokeMiterlimit="10"
			/>
			<path
				d="M13.75 20H26.25"
				stroke="#005CE8"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 13.75V26.25"
				stroke="#005CE8"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const cardDetails = [
	{
		id: "1",
		cardName: "visa",
		totalEarned: "95,400",
		cardNumber: "1234567891239814",
		expiry: {
			month: "04",
			year: "28",
		},
		holderName: "Kevin Gilbert",
	},

	{
		id: "2",

		cardName: "mastercard",
		totalEarned: "87,580",
		cardNumber: "6549871235845468",
		expiry: {
			month: "12",
			year: "26",
		},
		holderName: "Kevin Gilbert",
	},
	{
		id: "3",
		cardName: "something",
		totalEarned: "20,400",
		cardNumber: "1234567891233210",
		expiry: {
			month: "03",
			year: "22",
		},
		holderName: "Mushi mash",
	},
];

const getCardBg = (cardname) => {
	switch (cardname) {
		case "visa":
			return "bg-gradient-to-b from-cyan-500 to-blue-500";
		case "mastercard":
			return "bg-gradient-to-t from-orange-500 to-orange-300";
		default:
			return "bg-gradient-to-b from-green-300 to-green-600";
	}
};

const getCardImage = (cardname) => {
	switch (cardname) {
		case "visa":
			return VisaIcon;
		case "mastercard":
			return MasterCardIcon;
		default:
			return ClockIcon;
	}
};

const userTableHead = [
	"No.",
	"Invoice Date",
	"Date Paid",
	"Status",
	"Payment Method",
	"Subscription",
	"Amount",
	"",
];

const userDetails = [
	{
		id: 1,
		trxId: "EKG464SJFN17",
		amount: 129.99,
		subscription: "Premium",
		period: "Yearly",
		cardNumber: "1234567891582508",
		cardName: "Visa",
		invoiceDate: moment("2020-12-15T13:00:00").toDate(),
		paymentDate: null,
	},
	{
		id: 2,
		trxId: "EKG464SJFN17",
		amount: 129.99,
		subscription: "Premium",
		period: "Yearly",
		cardNumber: "1234567891582508",
		cardName: "Visa",
		invoiceDate: moment("2020-12-15T13:00:00").toDate(),
		paymentDate: moment("2022-12-15T13:00:00").toDate(),
	},
	{
		id: 3,
		trxId: "EKG464SJFN17",
		amount: 129.99,
		subscription: "Premium",
		period: "Yearly",
		cardNumber: "1234567891582508",
		cardName: "Visa",
		invoiceDate: moment("2020-12-15T13:00:00").toDate(),
		paymentDate: moment().toDate(),
	},
	{
		id: 4,
		trxId: "EKG464SJFN17",
		amount: 129.99,
		subscription: "Premium",
		period: "Yearly",
		cardNumber: "1234567891582508",
		cardName: "Visa",
		invoiceDate: moment("2020-12-15T13:00:00").toDate(),
		paymentDate: moment("2023-12-15T13:00:00").toDate(),
	},
];

export const BillingScreen = () => {
	const context = useContext(MyContext);
	const items = [
		{ page: "Home", link: "/" },
		{ page: "Pages", link: "/" },
		{ page: "Billing", link: "/billing" },
	];

	const bottomItems = [
		{ name: "Documentation", link: "/" },
		{ name: "Privacy Policy", link: "/" },
		{ name: "FAQs", link: "/faq" },
	];

	const [isAddDialogOpen, setAddDialogBool] = useState(false);
	const [selectedPage, setSelectedPage] = useState(0);

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(8);
	}, [context]);

	return (
		<>
			<div className="billingWrapper flex flex-col w-full h-full p-2">
				<CardAddDialog open={isAddDialogOpen} setOpen={setAddDialogBool} />
				<PageTopbar items={items} pageName="Billing" />
				<div className="billing-content flex flex-col gap-3">
					<div className="billing-info-top flex flex-row gap-3">
						<Card
							shadow={true}
							variant="gradient"
							className="w-auto max-w-[32rem] py-3 pl-4 pr-10  gap-2  bg-blue-200/50">
							<CardBody className="flex flex-col gap-2">
								<Typography
									variant="h6"
									color="blue-gray"
									className="mb-2 text-xs">
									CURRENT SUBSCRIPTION PLANS
								</Typography>

								<Typography
									variant="h5"
									color="blue-gray"
									className="mb-2 flex flex-row gap-2">
									<div>{String.fromCodePoint(0x1f680)} </div> Premium
								</Typography>
								<div className="flex flex-row gap-1">
									<Typography className="text-gray-400 text-[0.7rem] font-regular">
										Premium monthly subscription plan active since:
									</Typography>
									<Typography className="text-xs font-bold">
										Apr 16, 2024
									</Typography>
								</div>
							</CardBody>
							<CardFooter className="pt-0">
								<a href="#" className="inline-block">
									<Button
										size="sm"
										variant="text"
										className="flex items-center gap-2 text-white text-sm rounded-3xl">
										Upgrade Plans
									</Button>
								</a>
							</CardFooter>
						</Card>
						<Card
							shadow={true}
							variant="gradient"
							className="w-auto max-w-[18rem] py-3 px-4  gap-2">
							<CardBody className="flex flex-row gap-5 items-start justify-center">
								<div className="flex flex-col items-start justify-start gap-1">
									<Typography
										variant="h6"
										className="mb-2 text-xs text-gray-400">
										NEXT INVOICE
									</Typography>

									<Typography
										variant="h2"
										color="blue-gray"
										className="mb-2 flex flex-row gap-2">
										$149.00
									</Typography>
									<Typography className="text-xs font-normal flex flex-row items-center justify-center gap-2">
										<span className="h-4 w-4 flex items-center justify-center">
											<img src={ClockIcon} alt="icon" />
										</span>
										On May, 2024
									</Typography>
								</div>
								<div className="flex items-center justify-center bg-blue-300/10 p-3 rounded-full">
									<span className="h-6 w-6 flex items-center justify-center">
										<img src={CardIcon} alt="icon" />
									</span>
								</div>
							</CardBody>
							<CardFooter className="pt-0">
								<a href="#" className="inline-block">
									<Button
										size="sm"
										variant="text"
										className="flex items-center gap-2 text-white text-sm rounded-3xl">
										Pay Now
										<span>
											<img src={ArrowForward} alt="icon" />
										</span>
									</Button>
								</a>
							</CardFooter>
						</Card>
						<Card
							shadow={true}
							variant="gradient"
							className="w-auto max-w-[32rem] py-3 pl-4 pr-10  gap-2">
							<CardBody className="flex flex-col gap-2">
								<Typography
									variant="h6"
									color="blue-gray"
									className="mb-2 text-xs">
									CURRENT PLANS BENEFITS
								</Typography>
								<Divider className="bg-slate-400" />
								<div className="plan-benefit-container mt-3">
									<Typography className="text-black flex flex-row gap-1 items-center justify-start text-xs font-medium">
										<CheckIcon />
										Upgrade Profile
									</Typography>
									<Typography className="text-black flex flex-row gap-1 items-center justify-start text-xs font-medium">
										<CheckIcon />
										Multi-shot & video
									</Typography>
									<Typography className="text-black flex flex-row gap-1 items-center justify-start text-xs font-medium">
										<CheckIcon />
										Instant creative portfolio
									</Typography>
									<Typography className="text-black flex flex-row gap-1 items-center justify-start text-xs font-medium">
										<CheckIcon />
										Sell goods
									</Typography>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className="billing-card-container flex-1 py-2 rounded-md bg-white gap-2">
						<Typography variant="h6" color="blue-gray" className=" px-4 py-2 ">
							Payment Method
						</Typography>

						<Divider className="bg-slate-300" />
						<div className=" flex flex-row gap-3 p-3">
							{cardDetails.length > 0 &&
								cardDetails.map((card) => {
									const maskedCardNumber = card.cardNumber
										.replace(/\d(?=\d{4})/g, "*")
										.match(/.{1,4}/g)
										.join(" ");

									return (
										<Card
											key={card.id}
											shadow={true}
											variant="gradient"
											className={`w-[20rem] max-w-[24rem] pt-3 pr-4 pl-3 gap-2 rounded-md ${getCardBg(
												card.cardName
											)}`}>
											<CardBody className="flex flex-col ">
												<div className="flex flex-row items-start justify-between">
													<Typography className=" text-sm font-bold text-white">
														${card.totalEarned}.00 USD
													</Typography>
													<span className=" w-10 flex items-center justify-center">
														<img src={getCardImage(card.cardName)} alt="icon" />
													</span>
												</div>
												<div className="h-8"></div>
												<div className="flex flex-row items-center justify-between ">
													<Typography
														variant="h5"
														className="masked-card-number w-fit text-white flex items-center gap-4">
														{maskedCardNumber}

														{/* <IconButton
														variant="gradient"
														className="h-5 w-5 bg-transparent"
														onClick={handleCopy}
														ripple={false}>
														<img src={CopyIcon} alt="icon" />
													</IconButton> */}
													</Typography>
													<div className="flex flex-col items-start justify-center">
														<Typography className="text-gray-200 text-[0.65rem] font-regular p-0 m-0">
															Expires
														</Typography>
														<Typography className="text-sm text-white font-bold p-0 m-0">
															{`${card.expiry.month} / ${card.expiry.year}`}
														</Typography>
													</div>
												</div>
												<div className="h-5"></div>
												<div className="flex flex-row align-bottom  justify-between ">
													<Typography className=" text-white text-sm align-text-bottom ">
														{card.holderName.toUpperCase()}
													</Typography>
													<IconButton
														variant="filled"
														onClick={() => {}}
														className=" max-h-6 max-w-6 bg-transparent"
														ripple={false}>
														<OptionIcon />
													</IconButton>
												</div>
											</CardBody>
										</Card>
									);
								})}
							<Card
								className="w-36 max-w-44 bg-blue-100 items-center justify-center p-2 rounded-md"
								onClick={() => setAddDialogBool(true)}>
								<CardBody className="flex flex-col justify-center items-center">
									<AddRounded />
									<Typography variant="h6" color="blue-gray" className="mb-2">
										Add new card
									</Typography>
								</CardBody>
							</Card>
						</div>
					</div>

					<div className="billing-history-container">
						<Card className="h-full w-full">
							<CardBody className="overflow-scroll px-0">
								<table className="mt-4 w-full min-w-max table-auto text-left">
									<thead>
										<tr>
											{userTableHead.map((head) => (
												<th
													key={head}
													className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
													<Typography
														variant="small"
														color="blue-gray"
														className="flex items-center justify-between gap-2 font-normal leading-none opacity-70">
														{head.toUpperCase()}
													</Typography>
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										{userDetails.map(
											(
												{
													trxId,
													invoiceDate,
													paymentDate,
													cardNumber,
													cardName,
													subscription,
													period,
													amount,
												},
												index
											) => {
												const isLast = index === userDetails.length - 1;
												const classes = isLast
													? "p-4 "
													: "p-4 border-b border-blue-gray-50";

												return (
													<tr key={trxId}>
														<td className={classes}>
															<Typography
																variant="h6"
																color="blue-gray"
																className="font-normal text-start align-middle">
																{trxId}
															</Typography>
														</td>
														<td className={classes}>
															<Typography
																variant="h6"
																color="blue-gray"
																className="font-normal">
																{moment(invoiceDate).format("DD MMM, YYYY")}
															</Typography>
														</td>

														<td className={classes}>
															<Typography
																variant="small"
																color="blue-gray"
																className={`font-normal ${
																	paymentDate != null ? "text-start" : "ml-4"
																}`}>
																{paymentDate != null
																	? moment(paymentDate).format("DD MMM, YYYY")
																	: "-"}
															</Typography>
														</td>
														<td className={classes}>
															<div className="w-max flex items-center justify-center p-0 mb-2">
																<Chip
																	variant="ghost"
																	size="md"
																	value={
																		paymentDate != null
																			? "Completed"
																			: "Pending"
																	}
																	className={`rounded text-center ${
																		paymentDate != null
																			? "text-green-600"
																			: "text-blue-500"
																	}`}
																/>
															</div>
														</td>
														<td className={classes}>
															<Typography
																variant="small"
																color="blue-gray"
																className="font-normal">
																{`${cardNumber} (${cardName})`}
															</Typography>
														</td>
														<td className={classes}>
															<Typography
																variant="small"
																color="blue-gray"
																className="font-normal">
																{`${subscription} (${period})`}
															</Typography>
														</td>
														<td className={classes}>
															<Typography
																variant="small"
																color="blue-gray"
																className="font-normal">
																${amount} USD
															</Typography>
														</td>
														<td className={classes}>
															<Menu>
																<MenuHandler>
																	<div className="h-6 w-6 rounded-full flex items-center justify-center bg-blue-50 hover:bg-indigo-300">
																		<IconButton
																			ripple={true}
																			className="bg-transparent rounded-full">
																			<VerticalOptionIcon />
																		</IconButton>
																	</div>
																</MenuHandler>
																<MenuList>
																	<MenuItem className="bg-slate-50/10 hover:bg-blue-50 p-2 rounded-sm">
																		<span className="h-5 w-5 mr-2">
																			<img src={DownloadIcon} alt="icon" />
																		</span>
																		Download
																	</MenuItem>
																	<MenuItem className="bg-slate-50/10 hover:bg-blue-50 p-2  rounded-sm">
																		<span className="h-5 w-5 mr-2">
																			<img src={PrintIcon} alt="icon" />
																		</span>
																		Print
																	</MenuItem>
																	<MenuItem className=" bg-red-100 hover:bg-red-300 p-2 rounded-sm">
																		<span className="h-5 w-5 mr-2">
																			<img src={DeleteIcon} alt="icon" />
																		</span>
																		Delete
																	</MenuItem>
																</MenuList>
															</Menu>
														</td>
													</tr>
												);
											}
										)}
									</tbody>
								</table>
							</CardBody>
							<CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
								<Typography
									variant="small"
									color="blue-gray"
									className="font-normal">
									Page {selectedPage + 1} of 3
								</Typography>
								<div className="flex gap-2">
									<div className="h-10 w-10 rounded-full flex items-center justify-center bg-blue-50 hover:bg-slate-300/50">
										<IconButton
											ripple={true}
											onClick={() => {
												if (selectedPage > 0) {
													setSelectedPage(selectedPage - 1);
												}
											}}
											className="bg-transparent rounded-full">
											<SvgIcons.ArrowBack />
										</IconButton>
									</div>

									<div
										className={`h-10 w-10 rounded-full flex items-center justify-center ${
											selectedPage === 0
												? "bg-blue-500 hover:bg-blue-400"
												: " bg-blue-50 hover:bg-slate-300/50"
										}`}>
										<IconButton
											ripple={true}
											onClick={() => setSelectedPage(0)}
											className={`bg-transparent rounded-full ${
												selectedPage === 0
													? "text-white font-medium"
													: "text-black"
											}`}>
											01
										</IconButton>
									</div>
									<div
										className={`h-10 w-10 rounded-full flex items-center justify-center ${
											selectedPage === 1
												? "bg-blue-500 hover:bg-blue-400"
												: " bg-blue-50 hover:bg-slate-300/50"
										}`}>
										<IconButton
											ripple={true}
											onClick={() => setSelectedPage(1)}
											className={`bg-transparent rounded-full ${
												selectedPage === 1
													? "text-white font-medium"
													: "text-black"
											}`}>
											02
										</IconButton>
									</div>

									<div
										className={`h-10 w-10 rounded-full flex items-center justify-center ${
											selectedPage === 2
												? "bg-blue-500 hover:bg-blue-400"
												: " bg-blue-50 hover:bg-slate-300/50"
										}`}>
										<IconButton
											ripple={true}
											onClick={() => setSelectedPage(2)}
											className={`bg-transparent rounded-full ${
												selectedPage === 2
													? "text-white font-medium"
													: "text-black"
											}`}>
											03
										</IconButton>
									</div>

									<div className="h-10 w-10 rounded-full flex items-center justify-center bg-blue-50  hover:bg-slate-300/50">
										<IconButton
											ripple={true}
											onClick={() => {
												if (selectedPage < 2) {
													setSelectedPage(selectedPage + 1);
												}
											}}
											className="bg-transparent rounded-full ">
											<SvgIcons.ArrowForward />
										</IconButton>
									</div>
								</div>
							</CardFooter>
						</Card>
					</div>
				</div>
				<div className="billingFooter ">
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
