import { useContext, useEffect, useState } from "react";
import "./usermanagement.css";
import { MyContext } from "../../App";
import SearchIcon from "../../assets/images/svg/search.svg";
import FilterIcon from "../../assets/images/svg/filter-icon.svg";
import EditIcon from "../../assets/images/svg/rounded-correct.svg";
import DeleteIcon from "../../assets/images/svg/delete.svg";
import ArrowDownIcon from "../../assets/images/svg/arrow-down.svg";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import ArrowPrevious from "@mui/icons-material/KeyboardArrowLeftRounded";
import ArrowNext from "@mui/icons-material/KeyboardArrowRightRounded";
import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
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
import AddUserDialog from "./add-user-dialog";
import SvgIcons from "../../utils/icon-functions";

const sortItems = [
	{
		id: 1,
		name: "Date",
	},
	{
		id: 2,
		name: "Status",
	},
];

const savedItems = [
	{
		id: 1,
		name: "Lana",
	},
	{
		id: 2,
		name: "Devin",
	},
];

const contentItems = [
	{
		name: "Total User",
		amount: "614",
	},
	{
		name: "Active User",
		amount: "124",
	},
	{
		name: "Deleted User",
		amount: "504",
	},
	{
		name: "Blocked User",
		amount: "100",
	},
];

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

export const UserManagement = () => {
	const context = useContext(MyContext);

	const [openSortMenu, setOpenSortMenu] = useState(false);
	const [openSavedMenu, setOpenSavedMenu] = useState(false);
	const [selectedPage, setSelectedPage] = useState(0);

	const [sortBy, setSorting] = useState({});
	const [savedSearch, setSavedSearch] = useState({});

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(1);
	}, [context]);
	return (
		<>
			<div className="userWrapper flex flex-col w-full h-full pl-2 gap-3">
				<div className="topBarUsers flex flex-col justify-center items-start gap-2">
					<span className="pageName">Users</span>
					<div className="flex flex-row gap-4">
						<div className="user-search flex items-center ">
							<span className=" w-[30px] h-[30px] flex items-center justify-center rounded-sm text-black">
								<img src={SearchIcon} alt="icon" />
							</span>
							<input className="searchBox" placeholder="Search" />
						</div>
						<div className="add-user-btn">
							<AddUserDialog />
						</div>
						<div className="sort-menu">
							<Menu open={openSortMenu} handler={setOpenSortMenu} allowHover>
								<MenuHandler>
									<Button
										variant="text"
										className="bg-transparent rounded-xl flex items-center gap-3 h-[40px] w-[120px] p-2">
										{sortBy.name ?? "Sort by"}
										<span
											className={`w-[25px] h-[25px] flex items-center justify-center ml-auto transition-transform ${
												openSortMenu ? "rotate-180" : ""
											}`}>
											<img src={ArrowDownIcon} alt="arrow down" />
										</span>
									</Button>
								</MenuHandler>
								<MenuList className="w-40 p-2">
									<ul className="menuItems flex flex-col gap-2 w-full">
										{sortItems.map(({ id, name }) => (
											<MenuItem
												className="bg-slate-50/50 flex justify-center items-center gap-3 px-4 py-2 w-full capitalize rounded-md hover:bg-blue-400/50"
												key={id}
												onClick={() => setSorting({ id, name })}>
												<Typography variant="h6" color="blue-gray" className="">
													{name}
												</Typography>
											</MenuItem>
										))}
									</ul>
								</MenuList>
							</Menu>
						</div>
						<div className="saved-searches">
							<Menu open={openSavedMenu} handler={setOpenSavedMenu} allowHover>
								<MenuHandler>
									<Button
										variant="text"
										className="bg-transparent rounded-xl flex items-center gap-3 h-[40px] w-[120px] p-2">
										{savedSearch.name ?? "Saved Searches"}
										<span
											className={`w-[25px] h-[25px] flex items-center justify-center ml-auto transition-transform ${
												openSavedMenu ? "rotate-180" : ""
											}`}>
											<img src={ArrowDownIcon} alt="arrow down" />
										</span>
									</Button>
								</MenuHandler>
								<MenuList className="w-40 p-2">
									<ul className="menuItems flex flex-col gap-2 w-full">
										{savedItems.map(({ id, name }) => (
											<MenuItem
												className="bg-slate-50/50 flex justify-center items-center gap-3 px-4 py-2 w-full capitalize rounded-md hover:bg-blue-400/50"
												key={id}
												onClick={() => setSavedSearch({ id, name })}>
												<Typography variant="h6" color="blue-gray" className="">
													{name}
												</Typography>
											</MenuItem>
										))}
									</ul>
								</MenuList>
							</Menu>
						</div>
						<div className="filter-wrapper flex w-10 h-10  items-center justify-center">
							<IconButton
								variant="text"
								className="flex items-center justify-center w-10 h-10 rounded-xl px-2 py-0">
								<img src={FilterIcon} className="h-full w-full" alt="icon" />
							</IconButton>
						</div>
					</div>
				</div>

				<div className="content-grid-view">
					{contentItems.map(({ name, amount }) => (
						<div
							className="content-item bg-zinc-50 flex px-4 py-2 w-full capitalize rounded-md hover:bg-slate-50/50"
							key={name}
							onClick={() => {}}>
							<div className="flex flex-col justify-start items-center gap-3">
								<Typography variant="h6" className="text-gray-500/50">
									{name}
								</Typography>
								<div className="flex flex-row justify-center items-center gap-3">
									<AccountBoxTwoToneIcon />
									<Typography variant="h2" color="black" className="p-0">
										{amount}
									</Typography>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="user-details-wrapper flex flex-col">
					<Card className="h-full w-full">
						<CardBody className="overflow-x-hidden overflow-y-auto px-0">
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
													{head}
												</Typography>
											</th>
										))}
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
														<div className="actions-container">
															<Tooltip content="Edit User">
																<IconButton ripple={true} variant="text">
																	<img src={EditIcon} className="h-4 w-4" />
																</IconButton>
															</Tooltip>
															<Tooltip
																content="Delete User"
																className="rounded-sm hover:bg-red-100/50">
																<IconButton ripple={true} variant="text">
																	<img
																		src={DeleteIcon}
																		className="h-4 w-4 rounded-sm text-grey"
																	/>
																</IconButton>
															</Tooltip>
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
			</div>
		</>
	);
};
