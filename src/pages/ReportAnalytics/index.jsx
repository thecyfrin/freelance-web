import React, { useContext, useEffect, useState } from "react";
import "./report-analytics.css";
import { MyContext } from "../../App";
import EditIcon from "../../assets/images/svg/rounded-correct.svg";
import DeleteIcon from "../../assets/images/svg/delete.svg";
import {
	Typography,
	IconButton,
	Card,
	CardBody,
	Chip,
	CardFooter,
	Tooltip,
	Avatar,
} from "@material-tailwind/react";
import moment from "moment";
import SvgIcons from "../../utils/icon-functions";
import PageTopbar from "../../components/PageTopbar";
import { Link } from "react-router-dom";

const userTableHead = [
	"Name",
	"User ID",
	"User Status",
	"Email",
	"Date",
	"Membership",
	"Action",
];

const userDetails = [
	{
		id: 1,
		userID: "LA-0012",
		name: "Victoria P",
		status: "Active",
		email: "vic@example.com",
		membership: "basic",
		img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
		joinDate: moment("2020-12-15T13:00:00").toDate(),
		endDate: moment().toDate(),
	},
	{
		id: 2,
		userID: "LA-0023",
		name: "Lena P",
		status: "Blocked",
		email: "lena@example.com",
		membership: "basic",
		img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
		joinDate: moment("2020-12-15T13:00:00").toDate(),
		endDate: moment("2022-12-15T13:00:00").toDate(),
	},
	{
		id: 3,
		userID: "LA-0120",
		name: "Devin H",
		status: "Active",
		email: "devin@example.com",
		membership: "basic",
		img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
		joinDate: moment("2021-05-15T13:00:00").toDate(),
		endDate: moment().toDate(),
	},
	{
		id: 4,
		userID: "LA-0523",
		name: "Rana P",
		status: "Deleted",
		email: "rana@example.com",
		membership: "basic",
		img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
		joinDate: moment("2021-12-15T13:00:00").toDate(),
		endDate: moment("2023-12-15T13:00:00").toDate(),
	},
];

const items = [
	{ page: "Home", link: "/" },
	{ page: "Report & Analytics", link: "/report-analytics" },
];

const bottomItems = [
	{ name: "Documentation", link: "/" },
	{ name: "Privacy Policy", link: "/" },
	{ name: "FAQs", link: "/faq" },
];

export const ReportAnalyticsScreen = () => {
	const context = useContext(MyContext);

	const [selectedPage, setSelectedPage] = useState(0);

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(5);
	}, [context]);
	return (
		<>
			<div className="report-analytics-view flex flex-col w-full h-full pl-2 gap-3">
				<PageTopbar items={items} pageName="Report & Analytics" />
				<div className="user-details-wrapper flex flex-col">
					<Card className="h-full w-full">
						<CardBody className="overflow-x-hidden overflow-y-auto px-0">
							<table className="mt-4 w-full min-w-max table-auto text-left">
								<thead>
									<tr>
										{userTableHead.map((head, index) => {
											const isLast = index === userTableHead.length - 1;
											const classes = isLast
												? " flex items-center justify-center gap-2 font-normal leading-none opacity-70"
												: "flex items-center justify-between gap-2 font-normal leading-none opacity-70";
											return (
												<th
													key={head}
													className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
													<Typography
														variant="small"
														color="blue-gray"
														className={classes}>
														{head}
													</Typography>
												</th>
											);
										})}
									</tr>
								</thead>
								<tbody>
									{userDetails.map(
										(
											{
												name,
												userID,
												img,
												status,
												email,
												membership,
												joinDate,
												endDate,
											},
											index
										) => {
											const isLast = index === userDetails.length - 1;
											const classes = isLast
												? "p-4 "
												: "p-4 border-b border-blue-gray-50";

											return (
												<tr key={name}>
													<td className={classes}>
														<div className="flex items-center justify-start gap-3">
															<Avatar
																src={img}
																alt={name}
																size="xl"
																className="h-[40px] w-[40px] rounded-full"
															/>

															<Typography
																variant="small"
																color="blue-gray"
																className="font-normal text-center align-middle">
																{name}
															</Typography>
														</div>
													</td>
													<td className={classes}>
														<Typography
															variant="small"
															color="blue-gray"
															className="font-normal">
															{userID}
														</Typography>
													</td>
													<td className={classes}>
														<div className="w-max flex items-start justify-center p-0 mb-2">
															<Chip
																variant="ghost"
																size="md"
																value={status}
																className={`rounded  ${
																	status === "Active"
																		? "text-green-600"
																		: "text-red-500"
																}`}
															/>
														</div>
													</td>
													<td className={classes}>
														<Typography
															variant="small"
															color="blue-gray"
															className="font-normal">
															{email}
														</Typography>
													</td>
													<td className={classes}>
														<Typography
															variant="small"
															color="blue-gray"
															className="font-normal">
															{`${moment(joinDate).format(
																"DD MMM, YYYY"
															)} to ${moment(endDate).format("DD MMM, YYYY")}`}
														</Typography>
													</td>
													<td className={classes}>
														<Typography
															variant="small"
															color="blue-gray"
															className="font-semibold">
															{membership.toUpperCase()}
														</Typography>
													</td>
													<td className={classes}>
														<div className="actions-container p-2 ">
															<div className="min-h-6 min-w-6 rounded-full flex items-center justify-center bg-red-50 hover:bg-red-300/50">
																<IconButton
																	ripple={true}
																	className="bg-transparent rounded-full">
																	<SvgIcons.RedCrossIcon />
																</IconButton>
															</div>
															<div className="min-h-6 min-w-6 rounded-full flex items-center justify-center bg-green-50 hover:bg-green-600/20">
																<IconButton
																	ripple={true}
																	className="bg-transparent rounded-full">
																	<SvgIcons.GreenRightIcon />
																</IconButton>
															</div>
														</div>
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
