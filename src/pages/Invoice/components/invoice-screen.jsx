import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../App";
import PageTopbar from "../../../components/PageTopbar";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import EditIcon from "../../../assets/images/svg/rounded-correct.svg";
import DeleteIcon from "../../../assets/images/svg/delete.svg";
import PrintIcon from "../../../assets/images/svg/print-icon.svg";

import {
	Typography,
	IconButton,
	Card,
	CardBody,
	Chip,
	CardFooter,
	Tooltip,
	Avatar,
	CardHeader,
	MenuList,
	Menu,
	MenuHandler,
	MenuItem,
} from "@material-tailwind/react";
import { CheckBox } from "@mui/icons-material";
import GetUtils from "../../../utils/get-functions";
import SvgIcons from "../../../utils/icon-functions";
import { InvoiceDetailsScreen } from "./invoice-details-screen";

const tableHeader = [
	"",
	"No",
	"Invoice Subject",
	"Client",
	"Vat No",
	"Date",
	"Status",
	"Amount",
	"",
];

const invoiceDetails = [
	{
		id: 1,
		invoiceNo: "LA-0012",
		invoiceSubject: "Design Work",
		status: "Pending",
		client: {
			name: "Vic don",
			email: "vic@example.com",
			country: "United States",
		},
		invoiceVatNo: "123456798",
		invoiceAmount: 887.0,
		invoiceDate: moment("2020-12-15T13:00:00").toDate(),
	},
	{
		id: 2,
		invoiceNo: "LA-0012",
		invoiceSubject: "Design Work",
		status: "Pending",
		client: { name: "Vic don", email: "vic@example.com", country: "India" },
		invoiceVatNo: "123456798",
		invoiceAmount: 887.0,
		invoiceDate: moment("2020-12-15T13:00:00").toDate(),
	},
	{
		id: 3,
		invoiceNo: "LA-0012",
		invoiceSubject: "Design Work",
		status: "Paid",
		client: { name: "Vic don", email: "vic@example.com", country: "Germany" },
		invoiceVatNo: "123456798",
		invoiceAmount: 887.0,
		invoiceDate: moment("2020-12-15T13:00:00").toDate(),
	},
	{
		id: 4,
		invoiceNo: "LA-0012",
		invoiceSubject: "Design Work",
		status: "Paid",
		client: {
			name: "Vic don",
			email: "vic@example.com",
			country: "United Kingdom",
		},
		invoiceVatNo: "123456798",
		invoiceAmount: 887.0,
		invoiceDate: moment("2020-12-15T13:00:00").toDate(),
	},
	{
		id: 5,
		invoiceNo: "LA-0012",
		invoiceSubject: "Design Work",
		status: "Paid",
		client: { name: "Vic don", email: "vic@example.com", country: "Bahamas" },
		invoiceVatNo: "123456798",
		invoiceAmount: 887.0,
		invoiceDate: moment("2020-12-15T13:00:00").toDate(),
	},
	{
		id: 6,
		invoiceNo: "LA-0012",
		invoiceSubject: "Design Work",
		status: "Paid",
		client: {
			name: "Vic don",
			email: "vic@example.com",
			country: "United States",
		},
		invoiceVatNo: "123456798",
		invoiceAmount: 887.0,
		invoiceDate: moment("2020-12-15T13:00:00").toDate(),
	},
];

export const InvoiceScreen = () => {
	const context = useContext(MyContext);
	const items = [
		{ page: "Home", link: "/" },
		{ page: "Pages", link: "/" },
		{ page: "Invoice", link: "/invoice" },
	];

	const bottomItems = [
		{ name: "Documentation", link: "/" },
		{ name: "Privacy Policy", link: "/" },
		{ name: "FAQs", link: "/faq" },
	];

	const [selectedIds, setSelectedIds] = useState([]);
	const [selectedPage, setSelectedPage] = useState(0);

	const navigate = useNavigate();

	const navigateToDetails = (id) => {
		navigate(`/invoice-details`); // Navigate to the desired route
	};

	const handleCheckboxChange = (id) => {
		setSelectedIds(
			(prevSelectedIds) =>
				prevSelectedIds.includes(id)
					? prevSelectedIds.filter((itemId) => itemId !== id) // Remove if already selected
					: [...prevSelectedIds, id] // Add if not selected
		);
	};

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveSubmenu(0);
	}, [context]);
	return (
		<>
			<div className="invoice-view flex flex-col gap-2 ">
				<PageTopbar items={items} pageName="Invoice" />
				<div className="invoice-table-contents px-3 py-0 ">
					<div className="user-details-wrapper flex flex-col">
						<Card shadow={true} className="h-full w-full">
							<CardHeader
								floated={false}
								shadow={false}
								className="w-full overflow-visible pt-4 pb-0 m-0 flex items-center justify-start">
								<div className="flex flex-col items-start justify-center">
									<span className="text-md font-medium px-3 ">Invoice</span>
								</div>
							</CardHeader>
							<CardBody className="overflow-x-hidden overflow-y-auto px-0">
								<table className="mt-4  min-w-full table-auto text-left w-full border- outline-none">
									<thead>
										<tr>
											{tableHeader.map((head) => (
												<th
													key={head}
													className="cursor-pointer border-b border-blue-gray-100 bg-blue-gray-50/50 p-2 transition-colors hover:bg-blue-gray-50  outline-none ">
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
										{invoiceDetails.map(
											(
												{
													id,
													invoiceNo,
													invoiceSubject,
													status,
													client,
													invoiceVatNo,
													invoiceAmount,
													invoiceDate,
												},
												index
											) => {
												const isLast = index === invoiceDetails.length - 1;
												const classes = isLast
													? "p-2  m-0 "
													: "p-2  m-0 border-b border-blue-gray-50 ";
												const flag = GetUtils.getCountryFlag(client.country);
												return (
													<tr
														key={id}
														className={` ${
															selectedIds.includes(id)
																? "bg-blue-200/45 hover:bg-green-700/5"
																: "bg-[#fff] hover:bg-blue-500/15"
														}`}>
														<td className={classes}>
															<input
																type="checkbox"
																checked={selectedIds.includes(id)}
																onChange={() => handleCheckboxChange(id)}
																className="hover:before:opacity-0 cursor-pointer flex items-center justify-center mx-1"
															/>
														</td>
														<td
															className={classes}
															onClick={() => navigateToDetails(id)}>
															<Typography
																variant="small"
																color="blue-gray"
																className="font-normal m-0 px-1 	">
																{invoiceNo}
															</Typography>
														</td>
														<td
															className={classes}
															onClick={() => navigateToDetails(id)}>
															<div className="flex items-center justify-start gap-3">
																<Typography
																	variant="small"
																	color="blue-gray"
																	className="font-normal m-0 px-1">
																	{invoiceSubject}
																</Typography>
															</div>
														</td>
														<td
															className={classes}
															onClick={() => navigateToDetails(id)}>
															<Typography
																variant="small"
																color="blue-gray"
																className="font-normal m-0 px-1 flex flex-row items-center justify-start gap-2">
																<span className="h-4 w-6 mr-2">
																	<img src={flag} alt={client.country} />
																</span>
																{client.name}
															</Typography>
														</td>
														<td
															className={classes}
															onClick={() => navigateToDetails(id)}>
															<div className="flex items-center justify-start gap-3">
																<Typography
																	variant="small"
																	color="blue-gray"
																	className="font-normal m-0 px-1 m-0">
																	{invoiceVatNo}
																</Typography>
															</div>
														</td>
														<td
															className={classes}
															onClick={() => navigateToDetails(id)}>
															<div className="flex items-center justify-start gap-3">
																<Typography
																	variant="small"
																	color="blue-gray"
																	className="font-normal m-0 px-1">
																	{moment(invoiceDate).format("DD MMM, YYYY")}
																</Typography>
															</div>
														</td>
														<td className={`${classes}`}>
															<div className="flex items-center justify-start gap-3">
																<Chip
																	variant="ghost"
																	size="md"
																	value={status}
																	className={`rounded text-center  ${
																		status.toLowerCase() === "paid"
																			? "bg-green-100/30 text-green-600"
																			: "bg-orange-100/30 text-orange-500"
																	}`}
																/>
															</div>
														</td>
														<td
															className={classes}
															onClick={() => navigateToDetails(id)}>
															<div className="flex items-center justify-start gap-3">
																<Typography
																	variant="small"
																	color="blue-gray"
																	className="font-normal m-0 px-1">
																	${invoiceAmount.toFixed(2)}
																</Typography>
															</div>
														</td>

														<td
															className={classes}
															onClick={() => navigateToDetails(id)}>
															<Menu>
																<MenuHandler>
																	<div className="min-h-6 min-w-5 rounded-full flex items-center justify-center bg-blue-50 hover:bg-indigo-300/50">
																		<IconButton
																			ripple={true}
																			className="bg-transparent rounded-lg">
																			<SvgIcons.VerticalOptionIcon />
																		</IconButton>
																	</div>
																</MenuHandler>
																<MenuList>
																	<MenuItem className="bg-slate-50/10 hover:bg-blue-50 p-2 rounded-sm">
																		<span className="h-5 w-5 mr-2">
																			<SvgIcons.DownloadIcon />
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
									className="font-normal m-0 px-1">
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
