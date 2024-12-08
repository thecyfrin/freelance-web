import { TapButton } from "../../components/buttons";
import PageTopbar from "../../components/PageTopbar";
import PlusIcon from "../../assets/images/svg/plus.svg?react";
import EditIcon from "../../assets/images/svg/edit.svg";
import DeleteIcon from "../../assets/images/svg/delete.svg";
import ExtraMenuIcon from "../../assets/images/svg/extra-menu.svg";

import moment from "moment";
import ControlCalender from "./ControlCalander";
import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
	Checkbox,
	List,
	ListItem,
	ListItemPrefix,
} from "@material-tailwind/react";
import SmallCalendar from "./SmallCalendar";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../App";
import EventAddDialog from "./components/add-event-dialog";
import LabelAddDialog from "./components/add-label-dialog";
import { Link } from "react-router-dom";

export const Calendar = () => {
	const rawData = [
		{
			start: moment("2024-11-11T09:00:00").toDate(),
			end: moment("2024-11-11T09:15:00").toDate(),
			data: {
				work: {
					id: 1,
					label: "TD",
					type: "event",
					title: "Buy Flowers",

					location: "Store",
					desc: "For my love",
					bookmarkUrl: "dribble.com",
					members: [
						{ name: "Mushfiq", email: "mushfiq@gmail.com" },
						{ name: "Alex", email: "alex@gmail.com" },
					],
				},
			},
		},
		{
			start: moment("2024-11-11T20:00:00").toDate(),
			end: moment("2024-11-11T22:00:00").toDate(),
			data: {
				work: {
					id: 2,
					label: "U",
					type: "task",

					title: "Clear files",

					location: "Office",
					desc: "Clear the finance files",
					bookmarkUrl: "dribble.com",
					members: [{ name: "Mushfiq", email: "mushfiq@gmail.com" }],
				},
			},
		},

		{
			start: moment("2024-11-11T14:00:00").toDate(),
			end: moment("2024-11-11T16:00:00").toDate(),
			data: {
				work: {
					id: 3,
					label: "PTD",
					title: "Learn Adobe Illustrator",
					type: "task",

					location: "Home",
					desc: "Create 3d Illustration",
					bookmarkUrl: "dribble.com",
					members: [],
				},
			},
		},
		{
			start: moment("2024-11-11T14:00:00").toDate(),
			end: moment("2024-11-11T15:00:00").toDate(),
			data: {
				work: {
					id: 4,
					label: "OW",
					type: "task",
					title: "Do Something",
					location: "Home",
					desc: "Create 3d Illustration",
					bookmarkUrl: "dribble.com",
					members: [],
				},
			},
		},

		{
			start: moment("2024-11-11T12:00:00").toDate(),
			end: moment("2024-11-11T15:00:00").toDate(),
			data: {
				work: {
					id: 5,
					label: "TD",
					title: "More of this stuff",
					type: "event",
					location: "Home",
					desc: "Create 3d Illustration",
					bookmarkUrl: "dribble.com",
					members: [],
				},
			},
		},
	];

	const items = [
		{ page: "Home", link: "/" },
		{ page: "App", link: "/" },
		{ page: "Calendar", link: "/calendar" },
	];

	let labelItems = [
		{ name: "Project", value: "PR", extra: "project", colorCode: "#ff9904" },
		{ name: "To-do List", value: "TD", extra: "todo", colorCode: "#0c8c4e" },
		{
			name: "Personal To-do",
			value: "PTD",
			extra: "pTodo",
			colorCode: "#793200",
		},
		{
			name: "Office Work",
			value: "OW",
			extra: "officeWork",
			colorCode: "#00b5dd",
		},
		{ name: "Urgents", value: "U", extra: "urgent", colorCode: "#d50000" },
	];

	const [labels, setLabel] = useState(labelItems);

	const removeFromLabel = (labelCode) => {
		const newLabel = labels.filter((l) => l.value !== labelCode);

		setLabel(newLabel);
	};

	const [showEvent, handleCBevent] = useState(true);
	const [showTask, handleCBtask] = useState(true);

	const filteredEvents = rawData.filter((item) => {
		const itemType = item.data.work.type;

		if (showEvent && itemType === "event") {
			return true;
		}
		if (showTask && itemType === "task") {
			return true;
		}

		return false; // Exclude everything else
	});

	const [createWorkDialog, setWorkDialogOpen] = useState(false);
	const [createLabelDialog, setLabelDialogOpen] = useState(false);

	const context = useContext(MyContext);

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(2);
	}, [context]);
	return (
		<>
			<div className="calenderWrapper flex flex-row gap-1">
				<EventAddDialog
					open={createWorkDialog}
					setOpen={setWorkDialogOpen}
					labels={labelItems}
				/>
				<LabelAddDialog open={createLabelDialog} setOpen={setLabelDialogOpen} />

				<div className="leftPartCalendar flex flex-col gap-2">
					<div className="calendarTopbar flex flex-row items-center justify-center">
						<PageTopbar items={items} pageName="Calendar" />
						<div className="flex-grow"></div>
						<div className="calendarButtons  flex flex-row justify-center items-center gap-1">
							<TapButton btnText="Share Calendar" isWhite={true} />
							<div className=" ">
								<Menu
									animate={{
										mount: { y: 0 },
										unmount: { y: 25 },
									}}>
									<MenuHandler>
										<div className="createButton flex flex-row gap-1">
											<Button
												ripple={true}
												variant="gradient"
												className="createNewButton rounded-full  mr-0 ">
												Create New
												<span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-sm text-black">
													<PlusIcon style={{ fill: "#fff" }} />
												</span>
											</Button>
										</div>
									</MenuHandler>
									<MenuList className="max-h-72 w-[150px] p-2 ">
										<MenuItem
											className="bg-slate-50/100 hover:bg-blue-300/50 flex justify-start items-center p-1"
											onClick={() => setWorkDialogOpen(true)}>
											Event
										</MenuItem>
										<MenuItem className="bg-slate-50/100 hover:bg-blue-300/50 flex justify-start items-center p-1">
											Task
										</MenuItem>
										<MenuItem
											className="bg-slate-50/100 hover:bg-blue-300/50 flex justify-start items-center p-1"
											onClick={() => setLabelDialogOpen(true)}>
											Label
										</MenuItem>
									</MenuList>
								</Menu>
							</div>
						</div>
					</div>

					<div className="calendarView">
						<ControlCalender events={filteredEvents} />
					</div>
				</div>
				<div className="rightPartCalendar flex flex-col gap-3 items-center justify-start p-2">
					<div className="smallCalendar ">
						<div className="textRightCl flex items-center justify-start p-b-1  ml-3 mt-2">
							Calendar
						</div>
						<hr className=" my-b-1" />
						<SmallCalendar />
					</div>
					<div className="typeBox">
						<div className="textRightCl flex items-center justify-start p-b-1  ml-3 mt-2">
							Types
						</div>
						<hr className="my-t-1 my-b-2" />
						<div className="eventTypes ">
							<List className="flex flex-row items-center p-0 justify-center">
								<ListItem className="listItemsCl m-0">
									<label
										htmlFor="horizontal-list-event"
										className="flex w-full cursor-pointer items-center justify-center m-0">
										<ListItemPrefix className="h-[50px] w-[50px] m-0">
											<Checkbox
												id="horizontal-list-event"
												checked={showEvent}
												ripple={false}
												onChange={() => {
													handleCBevent(!showEvent);
												}}
												className="hover:before:opacity-0 "
											/>
										</ListItemPrefix>
										Event
									</label>
								</ListItem>

								<ListItem className="listItemsCl px-2">
									<label
										htmlFor="horizontal-list-task"
										className="flex w-full cursor-pointer items-center ">
										<ListItemPrefix className="h-[50px] w-[50px]">
											<Checkbox
												id="horizontal-list-task"
												checked={showTask}
												ripple={false}
												className="hover:before:opacity-0"
												onChange={() => {
													handleCBtask(!showTask);
												}}
											/>
										</ListItemPrefix>
										Task
									</label>
								</ListItem>
							</List>
						</div>
					</div>
					<div
						className={`labelCl w-[180px] h-[${
							labels.length * 30
						}px] min-h-[120px]  min-w-[180px]`}>
						<div className="textRightCl flex items-center justify-start p-b-1  ml-3 mt-2">
							Label
						</div>
						<hr className=" my-b-1" />
						<div className="flex flex-col items-center gap-2 pl-2 pr-2">
							{labels.map((label, index) => (
								<React.Fragment key={index}>
									<div
										className={`showLabels ${label.value.toLowerCase()} flex flex-row justify-start items-center p-1 gap-2`}>
										<div className={`smallCircle ${label.extra}`}></div>
										{label.name}
										<div className="flex-grow"></div>
										<div className="menuList">
											<Menu
												animate={{
													mount: { y: -15 },
													unmount: { y: 25 },
												}}>
												<MenuHandler>
													<div className="createButton flex flex-row gap-1  ">
														<Button
															ripple={true}
															variant="gradient"
															className=" bg-transparent rounded-full  mr-0 ">
															<span className=" w-[30px] h-[30px] flex items-center justify-center rounded-sm ">
																<img src={ExtraMenuIcon} />
															</span>
														</Button>
													</div>
												</MenuHandler>
												<MenuList className="max-h-72 w-[150px] p-2 ">
													<MenuItem className="labelMenu bg-inherit hover:bg-blue-300/50 flex justify-start items-center p-1">
														<span className=" w-[30px] h-[30px] flex items-center justify-center rounded-sm pr-1">
															<img src={EditIcon} />
														</span>
														Edit
													</MenuItem>
													<MenuItem
														onClick={() => removeFromLabel(label.value)}
														className="labelMenu bg-red-100/50 hover:bg-blue-300/50 flex justify-start items-center p-1">
														<span className=" w-[30px] h-[30px] flex items-center justify-center rounded-sm pr-1">
															<img src={DeleteIcon} />
														</span>
														Delete
													</MenuItem>
												</MenuList>
											</Menu>
										</div>
									</div>
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
