import React, { useContext, useEffect } from "react";
import "./dashboard.css";
import { MyContext } from "../../App";
import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardHeader,
	Chip,
	IconButton,
	Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SvgIcons from "../../utils/icon-functions";
import {
	LineChartSingle,
	BarChart,
	RadialChart,
	PieChart,
	LineChartWithXAxis,
} from "./components/chart-model";
import { Divider } from "@mui/joy";
import ElectricalImage from "../../assets/images/png/dashboard/electrical-img.png";
import PlumberImage from "../../assets/images/png/dashboard/plumber-img.png";
import AcRepairImage from "../../assets/images/png/dashboard/ac-repair-img.png";
import CoffeeImage from "../../assets/images/png/dashboard/coffee-img.png";
import Utils from "../../utils/utils";
import moment from "moment";
import EditIcon from "../../assets/images/svg/rounded-correct.svg?react";
import DeleteIcon from "../../assets/images/svg/delete.svg?react";

const bestServiceDetails = [
	{
		id: 1,
		name: "Electrical",
		image: ElectricalImage,
		price: 21.19,
		sold: 409,
	},
	{
		id: 2,
		name: "Plumbing",
		image: PlumberImage,
		price: 14.18,
		sold: 396,
	},
	{
		id: 3,
		name: "Ac Repair",
		image: AcRepairImage,
		price: 18.15,
		sold: 243,
	},
	{
		id: 4,
		name: "Free Coffee",
		image: CoffeeImage,
		price: 74.16,
		sold: 636,
	},
];

const coffeeFreeDetails = [
	{
		id: 1,
		name: "Sander Xavier",
		quantity: 2,
		date: Date.now(),
		invoiceAmount: 253.82,
		relation: 60.76,
		status: "Pending",
	},
	{
		id: 2,
		name: "Sander Xavier",
		quantity: 2,
		date: Date.now(),
		invoiceAmount: 253.82,
		relation: 60.76,
		status: "Completed",
	},
	{
		id: 3,
		name: "Sander Xavier",
		quantity: 2,
		date: Date.now(),
		invoiceAmount: 253.82,
		relation: 60.76,
		status: "Completed",
	},
	{
		id: 4,
		name: "Sander Xavier",
		quantity: 2,
		date: Date.now(),
		invoiceAmount: 253.82,
		relation: 60.76,
		status: "Completed",
	},
	{
		id: 5,
		name: "Sander Xavier",
		quantity: 2,
		date: Date.now(),
		invoiceAmount: 253.82,
		relation: 60.76,
		status: "Completed",
	},
	{
		id: 6,
		name: "Sander Xavier",
		quantity: 2,
		date: Date.now(),
		invoiceAmount: 253.82,
		relation: 60.76,
		status: "Completed",
	},
];

export const Dashboard = () => {
	const context = useContext(MyContext);

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(0);
	}, [context]);
	return (
		<>
			<div className="dashboardWrapper w-full p-2 flex flex-col gap-3">
				<div>
					<div className=" flex flex-row gap-2 text-sm font-semibold">
						<div>{String.fromCodePoint(0x1f44b)} </div> Hey, Mat.
					</div>
					<div className=" text-md font-semibold">Analytics Overview</div>
				</div>

				<div className="dashboard-top-data h-full w-full flex flex-row items-center justify-center gap-2">
					<Card className="w-[25%] h-fit p-3 m-0" shadow={true}>
						<CardBody className="flex flex-row items-center justify-between p-0 m-0">
							<div className="flex flex-col w-[40%] gap-1">
								<div className=" text-md font-medium text-gray-400">
									Invoice
								</div>
								<div className=" text-xl font-semibold">$7,825</div>
							</div>
							<div className="w-[60%] max-h-32  h-full">
								<LineChartSingle
									title="+22%"
									color="#FF8901"
									series={[
										{
											name: "series-1",
											data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
										},
									]}
									categories={[
										1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2000,
									]}
								/>
							</div>
						</CardBody>
					</Card>
					<Card className="w-[25%] h-fit p-3 m-0" shadow={true}>
						<CardBody className="flex flex-row items-center justify-between p-0 m-0">
							<div className="flex flex-col w-[40%] gap-1">
								<div className=" text-md font-medium text-gray-400">
									Total Free Coffee
								</div>
								<div className=" text-xl font-semibold">920</div>
							</div>
							<div className="w-[60%] max-h-32  h-full">
								<LineChartSingle
									title="-25%"
									color="#FF392B"
									series={[
										{
											name: "series-1",
											data: [30, 40, 50, 60, 69, 60, 50, 40, 30], // Ensure this data aligns with categories
										},
									]}
									categories={[
										1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2000,
									]}
								/>
							</div>
						</CardBody>
					</Card>
					<Card className="w-[25%] h-fit p-3 m-0" shadow={true}>
						<CardBody className="flex flex-row items-center justify-between p-0 m-0">
							<div className="flex flex-col w-[40%] gap-1">
								<div className=" text-md font-medium text-gray-400">
									Total User
								</div>
								<div className=" text-xl font-semibold">15.5K</div>
							</div>
							<div className="w-[60%] max-h-32  h-full">
								<LineChartSingle
									title="+49%"
									color="#279F51"
									series={[
										{
											name: "series-1",
											data: [30, 40, 35, 50, 49, 39, 30, 50, 65],
										},
									]}
									categories={[
										1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2000,
									]}
								/>
							</div>
						</CardBody>
					</Card>
					<Card className="w-[25%] h-fit p-3 m-0" shadow={true}>
						<CardBody className="flex flex-row items-center justify-between p-0 m-0">
							<div className="flex flex-col w-[40%] gap-1">
								<div className=" text-md font-medium text-gray-400">
									Conversion
								</div>
								<div className=" text-xl font-semibold">28%</div>
							</div>
							<div className="w-[60%] max-h-32  h-full">
								<LineChartSingle
									title="+1.9%"
									color="#FFA000"
									series={[
										{
											name: "series-1",
											data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
										},
									]}
									categories={[
										1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2000,
									]}
								/>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className="flex flex-row items-center justify-center gap-3">
					<Card className="w-[60%]  p-3 m-0 gap-2" shadow={true}>
						<CardHeader
							floated={false}
							shadow={false}
							className="flex flex-row items-center justify-between p-0 m-0">
							<div className=" text-md font-semibold">Invoice</div>
							<Link to="/invoice" viewTransition>
								<div className="flex flex-row gap-1 text-sm font-semibold">
									Advanced Report
									<span className="h-3 w-5">
										<SvgIcons.ArrowForward
											className="max-h-3 max-w-5 object-contain m-0 p-0"
											style={{ fill: "#000" }}
										/>
									</span>
								</div>
							</Link>
						</CardHeader>
						<CardBody className="flex flex-row items-center justify-between p-0 m-0">
							<div className="flex flex-col w-full h-full gap-1">
								<BarChart />
							</div>
						</CardBody>
					</Card>
					<div className="flex-grow"></div>
					<Card className="w-[30%] h-fit p-3 m-0" shadow={true}>
						<CardHeader
							floated={false}
							shadow={false}
							className="flex flex-row items-center justify-between p-0 m-0">
							<div className=" text-md font-semibold">Free Coffee</div>
						</CardHeader>
						<CardBody className="flex flex-row items-center justify-between px-3 py-2 m-0">
							<div className="flex flex-col  w-full h-full gap-1">
								<div className="-full flex flex-col items-end justify-end px-3">
									<IconButton
										ripple={true}
										className=" rounded-full bg-[#fff] max-h-7 max-w-7">
										<SvgIcons.GreyInfoIcon />
									</IconButton>
								</div>
								<div className="w=full flex flex-col items-center justify-center">
									<RadialChart />
								</div>
								<div className="h-4"></div>
								<div className="flex flex-row items-center justify-between">
									<div className=" text-md font-medium text-gray-400">
										Total Free Coffee
									</div>
									<div className=" text-lg font-semibold">725</div>
								</div>
								<div className="flex flex-row items-center justify-between">
									<div className=" text-sm font-medium text-gray-400">
										Abandoned Invoice
									</div>
									<div className=" text-sm text-gray-400 font-semibold">
										$5,900
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className="flex flex-row items-center justify-center gap-5">
					<Card className="w-[50%]  p-3 m-0 gap-2" shadow={true}>
						<CardHeader
							floated={false}
							shadow={false}
							className="flex flex-row items-center justify-between p-0 m-0">
							<div className=" text-md font-semibold">User Management</div>
							<Link to="/userManage" viewTransition>
								<div className="flex flex-row gap-3 text-sm font-semibold">
									More
									<span className="h-3 w-5">
										<SvgIcons.ArrowForward className="max-h-3 max-w-5 object-contain m-0 p-0" />
									</span>
								</div>
							</Link>
						</CardHeader>
						<CardBody className="flex flex-row items-center justify-center p-0 m-0">
							<div className="flex flex-col w-full h-full gap-1">
								<div className="w-full h-fit flex items-center justify-center ">
									<PieChart
										series={[830.03, 755.75, 550.81, 150.75]}
										colors={["#FF8901", "#00C3F8", "#2F80ED", "#FF392B"]}
									/>
								</div>
								<div className="h-4"></div>
								<div className="flex flex-row h-[55px] items-center justify-evenly ">
									<div className="flex flex-col items-start justify-center ">
										<div className="flex flex-row items-center justify-center gap-3">
											<div className="w-2 h-2 rounded-full bg-[#FF8901]"></div>
											<div className="w-24 text-sm font-medium text-gray-400">
												Customer
											</div>
											<div className="w-24 text-end text-sm font-semibold">
												$830.03
											</div>
											<div className=" text-sm font-normal text-gray-400">
												64.2%
											</div>
										</div>
										<div className="flex flex-row items-center justify-center gap-3">
											<div className="w-2 h-2 rounded-full bg-[#00C3F8]"></div>
											<div className="w-24 text-sm font-medium text-gray-400">
												Electrical
											</div>
											<div className="w-24 text-end text-sm font-semibold">
												$755.75
											</div>
											<div className=" text-sm font-normal text-gray-400">
												48.6%
											</div>
										</div>
									</div>
									<Divider orientation="vertical" className="max-w-1" />

									<div className="flex flex-col items-start justify-center ">
										<div className="flex flex-row items-center justify-center gap-3">
											<div className="w-2 h-2 rounded-full bg-[#2F80ED]"></div>
											<div className="w-24 text-sm font-medium text-gray-400">
												Free Coffee
											</div>
											<div className="w-24 text-end text-sm font-semibold">
												$550.81
											</div>
											<div className=" text-sm font-normal text-gray-400">
												15.2%
											</div>
										</div>
										<div className="flex flex-row items-center justify-center gap-3">
											<div className="w-2 h-2 rounded-full bg-[#FF392B]"></div>
											<div className="w-24 text-sm font-medium text-gray-400">
												Promotion
											</div>
											<div className="w-24 text-end text-sm font-semibold">
												$150.75
											</div>
											<div className=" text-sm font-normal text-gray-400">
												8.6%
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card className="w-[50%]  p-3 m-0 gap-2" shadow={true}>
						<CardHeader
							floated={false}
							shadow={false}
							className="flex flex-row items-center justify-between p-0 m-0">
							<div className=" text-md font-semibold">Traffic</div>

							<div className="flex flex-row gap-3 text-sm font-semibold">
								More
								<span className="h-3 w-5">
									<SvgIcons.ArrowForward className="max-h-3 max-w-5 object-contain m-0 p-0" />
								</span>
							</div>
						</CardHeader>
						<CardBody className="flex flex-col gap-2  p-0 m-0">
							<div className="flex flex-row items-center justify-between">
								<Card
									className="min-w-[45%] h-fit p-3 m-0 shadow-xl"
									shadow={true}>
									<CardBody className="w-full p-0 m-0 ">
										<div className="flex flex-row items-center justify-between gap-4">
											<div className="flex flex-col w-[80%] gap-1">
												<div className=" text-sm font-medium text-gray-400">
													Store Visits
												</div>
												<div className=" text-xl font-semibold">8950</div>
											</div>
											<div className=" ">
												<div className=" text-sm text-end font-medium text-[#279F51]">
													+22%
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
								<Card
									className="min-w-[45%] h-fit p-3 m-0 shadow-xl"
									shadow={true}>
									<CardBody className="w-full p-0 m-0 ">
										<div className="flex flex-row items-center justify-between gap-4">
											<div className="flex flex-col w-[80%] gap-1">
												<div className=" text-sm font-medium text-gray-400">
													New Visitors
												</div>
												<div className=" text-xl font-semibold">1520</div>
											</div>
											<div className=" ">
												<div className=" text-sm text-end font-medium text-[#FF8901]">
													-24%
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
							</div>
							<div className="h-4"></div>
							<div className="chart-traffic-dashboard flex flex-col gap-2">
								<div className=" text-sm font-medium text-gray-400">
									Jan 16 - Jan 30 store visits chart
								</div>
								<div className="w-full h-fit  ">
									<LineChartWithXAxis
										color="#279F51"
										series={[
											{
												name: "series-1",
												data: [30, 40, 35, 50, 49, 39, 30, 50, 65],
											},
										]}
										categories={[16, 18, 20, 22, 24, 26, 28, 30, 1]}
									/>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className="flex flex-row items-center justify-center gap-5">
					<Card className="w-[50%]  p-3 m-0 gap-4" shadow={true}>
						<CardHeader
							floated={false}
							shadow={false}
							className="flex flex-row items-center justify-between p-0 m-0">
							<div className=" text-md font-semibold">Best Services</div>
							<div className="flex flex-row gap-3 text-sm font-semibold">
								More
								<span className="h-3 w-5">
									<SvgIcons.ArrowForward className="max-h-3 max-w-5 object-contain m-0 p-0" />
								</span>
							</div>
						</CardHeader>
						<CardBody className="flex flex-row items-center justify-center px-0 py-3 m-0">
							<div className="invoice-table w-full">
								<table className="w-full h-fit px-3 ">
									<thead>
										<tr className="bg-slate-100 text-gray-400">
											<th className="px-3 py-2 mb-1">PRODUCT</th>
											<th className="px-3 py-2 mb-1">PRICE</th>
											<th className="px-3 py-2 mb-1">SOLD</th>
											<th className="px-3 py-2 mb-1">PROFIT</th>
										</tr>
									</thead>

									<tbody>
										{bestServiceDetails.length > 0 &&
											bestServiceDetails.map((i, index) => {
												const total = Utils.numberWithCommas(i.price * i.sold);
												const isLast = index === bestServiceDetails.length - 1;
												const classes = isLast
													? "px-3 py-2  mb-1 "
													: "px-3 py-2  mb-1 border-b border-blue-gray-50";
												return (
													<tr key={i.id} className="  px-4 py-0">
														<td className={classes}>
															<div className="flex flex-row items-center justify-start gap-2">
																<Avatar
																	src={i.image}
																	alt={i.name}
																	size="md"
																	className="h-[30px] w-[30px] rounded-full"
																/>
																<div className=" text-sm font-medium ">
																	{i.name}
																</div>
															</div>
														</td>
														<td className={classes}>{`$${i.price}`}</td>
														<td className={classes}>{i.sold}</td>
														<td className={classes}>{`$${total}`}</td>
													</tr>
												);
											})}
									</tbody>
								</table>
							</div>
						</CardBody>
					</Card>
					<Card className="w-[50%]   p-3 m-0 gap-2" shadow={true}>
						<CardHeader
							floated={false}
							shadow={false}
							className="flex flex-row items-center justify-between p-0 m-0">
							<div className=" text-md font-semibold">Sales Forecast</div>

							<div className="flex flex-row gap-3 text-sm font-semibold">
								More
								<span className="h-3 w-5">
									<SvgIcons.ArrowForward className="max-h-3 max-w-5 object-contain m-0 p-0" />
								</span>
							</div>
						</CardHeader>
						<CardBody className="flex flex-col gap-2  p-2 m-0">
							<div className="sales-forecast-data h-full w-full ">
								<Card
									className="w-full h-fit px-3 py-1 m-0 shadow-xl border-1 border-slate-200"
									shadow={true}>
									<CardBody className="flex flex-row items-center justify-between p-0 m-0">
										<div className="flex flex-col w-[40%] gap-1">
											<div className=" text-md font-medium text-gray-400">
												Revenue
											</div>
											<div className=" text-xl font-semibold">+24.2%</div>
										</div>
										<div className="w-[60%] max-h-32  h-full">
											<LineChartSingle
												color="#FF8901"
												series={[
													{
														name: "series-1",
														data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
													},
												]}
												categories={[
													1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2000,
												]}
											/>
										</div>
									</CardBody>
								</Card>
								<Card
									className="w-full h-fit px-3 py-1 m-0 shadow-xl border-1 border-slate-200"
									shadow={true}>
									<CardBody className="flex flex-row items-center justify-between p-0 m-0">
										<div className="flex flex-col w-[40%] gap-1">
											<div className=" text-md font-medium text-gray-400">
												Net Profit
											</div>
											<div className=" text-xl font-semibold">+2.5%</div>
										</div>
										<div className="w-[60%] max-h-32  h-full">
											<LineChartSingle
												color="#FF392B"
												series={[
													{
														name: "series-1",
														data: [30, 40, 50, 60, 69, 60, 50, 40, 30], // Ensure this data aligns with categories
													},
												]}
												categories={[
													1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2000,
												]}
											/>
										</div>
									</CardBody>
								</Card>
								<Card
									className="w-full h-fit px-3 py-1 m-0 shadow-xl border-1 border-slate-200"
									shadow={true}>
									<CardBody className="flex flex-row items-center justify-between p-0 m-0">
										<div className="flex flex-col w-[40%] gap-1">
											<div className=" text-md font-medium text-gray-400">
												Orders
											</div>
											<div className=" text-xl font-semibold">+32.8%</div>
										</div>
										<div className="w-[60%] max-h-32  h-full">
											<LineChartSingle
												color="#279F51"
												series={[
													{
														name: "series-1",
														data: [30, 40, 35, 50, 49, 39, 30, 50, 65],
													},
												]}
												categories={[
													1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2000,
												]}
											/>
										</div>
									</CardBody>
								</Card>
								<Card
									className="w-full h-fit px-3 py-1 m-0 shadow-xl border-1 border-slate-200"
									shadow={true}>
									<CardBody className="flex flex-row items-center justify-between p-0 m-0">
										<div className="flex flex-col w-[40%] gap-1">
											<div className=" text-md font-medium text-gray-400">
												Visitors
											</div>
											<div className=" text-xl font-semibold">+60%</div>
										</div>
										<div className="w-[60%] max-h-32  h-full">
											<LineChartSingle
												color="#FFA000"
												series={[
													{
														name: "series-1",
														data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
													},
												]}
												categories={[
													1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2000,
												]}
											/>
										</div>
									</CardBody>
								</Card>
							</div>
						</CardBody>
					</Card>
				</div>
				<Card className="w-full p-3 m-0 gap-4" shadow={true}>
					<CardHeader
						floated={false}
						shadow={false}
						className="flex flex-row items-center justify-between p-0 m-0">
						<div className=" text-md font-semibold">
							Latest Orders Free Coffee
						</div>
						<div className="flex flex-row gap-3 text-sm font-semibold">
							More
							<span className="h-3 w-5">
								<SvgIcons.ArrowForward className="max-h-3 max-w-5 object-contain m-0 p-0" />
							</span>
						</div>
					</CardHeader>
					<CardBody className="flex flex-row items-center justify-center px-0 py-3 m-0">
						<div className="invoice-table w-full">
							<table className="w-full h-fit px-3 ">
								<thead>
									<tr className="bg-slate-100 text-gray-400">
										<th className="px-3 py-2 mb-1">NAME</th>
										<th className="px-3 py-2 mb-1">QTY</th>
										<th className="px-3 py-2 mb-1">DATE</th>
										<th className="px-3 py-2 mb-1">Invoice</th>
										<th className="px-3 py-2 mb-1">Relation</th>
										<th className="px-3 py-2 mb-1">Status</th>
										<th className="px-3 py-2 mb-1 flex items-center justify-center">Actions</th>
									</tr>
								</thead>

								<tbody>
									{coffeeFreeDetails.length > 0 &&
										coffeeFreeDetails.map((i, index) => {
											const isLast = index === bestServiceDetails.length - 1;
											const classes = isLast
												? "px-3 py-2  mb-1 "
												: "px-3 py-2  mb-1 border-b border-blue-gray-50";
											return (
												<tr key={i.id} className="  px-4 py-0">
													<td className={classes}>
														<div className="flex flex-row items-center justify-start gap-2">
															<Avatar
																src={CoffeeImage}
																alt={i.name}
																size="md"
																className="h-[30px] w-[30px] rounded-full"
															/>
															<div className=" text-sm font-medium ">
																{i.name}
															</div>
														</div>
													</td>
													<td className={classes}>{`x${i.quantity}`}</td>
													<td className={classes}>
														{moment(i.date).format("MMM DD, YYYY")}
													</td>
													<td className={classes}>$ {i.invoiceAmount}</td>
													<td className={classes}>$ {i.relation}</td>
													<td className={classes}>
														<Chip
															variant="ghost"
															size="md"
															value={i.status}
															className={`rounded flex items-start justify-start p-0 m-0 ${
																i.status === "Completed"
																	? "text-green-600"
																	: "text-red-500"
															}`}
														/>
													</td>
													<td className={classes}>
														<div className="actions-container">
															<Tooltip content="Edit User">
																<IconButton ripple={true} variant="text">
																	<EditIcon className="h-4 w-4" />
																</IconButton>
															</Tooltip>
															<Tooltip
																content="Delete User"
																className="rounded-sm hover:bg-red-100/50 ">
																<IconButton ripple={true} variant="text">
																	<DeleteIcon className="max-h-4 max-w-4 rounded-sm text-grey" />
																</IconButton>
															</Tooltip>
														</div>
													</td>
												</tr>
											);
										})}
								</tbody>
							</table>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};
