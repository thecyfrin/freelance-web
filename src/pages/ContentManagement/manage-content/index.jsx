import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../content-management.css";
import { MyContext } from "../../../App";
import PageTopbar from "../../../components/PageTopbar";
import PlusIcon from "../../../assets/images/svg/plus.svg?react";
import ClockIcon from "../../../assets/images/svg/ic-clock.svg?react";
import AttachmentClipIcon from "../../../assets/images/svg/attachment-clip.svg?react";
import CommentBubbleIcon from "../../../assets/images/svg/comment-content.svg?react";

import LoginCard from "../../../assets/images/png/login-card.png";

import moment from "moment";
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	IconButton,
	Chip,
	Avatar,
} from "@material-tailwind/react";
import { ListItemDecorator } from "@mui/joy";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { Link } from "react-router-dom";
import ContentDetails from "../content-details";
import ColumnCreate from "./components/column-create";
import PostCreate from "./components/post-create";
import GetUtils from "../../../utils/get-functions";

const rawData = [
	{
		start: moment("2024-12-12T09:00:00").toDate(),
		end: moment("2024-11-11T09:15:00").toDate(),
		data: {
			work: {
				id: 1,
				label: "TD",
				type: "event",
				title:
					"Meeting with UI/UX Team to manage our  upcoming projects & task.",
				priority: "High",
				image: LoginCard,

				location: "Store",
				column: "news",
				desc: "In lobortis fermentum venenatis. Phasellus orci libero, feugiat et velit non, sagittis feugiat eros. In placerat risus vitae est faucibus, in laoreet enim rutrum. Mauris posuere vitae felis at convallis. Integer consequat et tellus vel tincidunt. Aenean rhoncus ligula eu risus molestie semper.",
				bookmarkUrl: "dribble.com",
				members: [
					{ name: "Mushfiq", email: "mushfiq@gmail.com" },
					{ name: "Alex", email: "alex@gmail.com" },
					{ name: "Alex", email: "alex@gmail.com" },
					{ name: "Alex", email: "alex@gmail.com" },
					{ name: "Alex", email: "alex@gmail.com" },
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
				image: LoginCard,
				type: "task",
				priority: "Low",
				column: "done",
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
				priority: "Medium",
				column: "news",
				type: "task",
				location: "Home",
				desc: "Create 3d Illustration",
				bookmarkUrl: "dribble.com",
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
				priority: "High",
				column: "blog",
				location: "Home",
				desc: "Create 3d Illustration",
				bookmarkUrl: "dribble.com",
				attachment: ["Something", "Somewhere", "Somehow", "But where"],
				comment: [
					"Something is fishy",
					"Somewhere there",
					"What are you doing",
				],
			},
		},
	},

	{
		start: moment("2024-11-15T12:00:00").toDate(),
		end: moment("2024-11-11T15:00:00").toDate(),
		data: {
			work: {
				id: 5,
				label: "TD",
				title: "More of this stuff",
				type: "event",
				priority: "Medium",
				column: "done",
				image: LoginCard,

				location: "Home",
				desc: "Create 3d Illustration",
				bookmarkUrl: "dribble.com",
				comment: [
					"Something is fishy",
					"Somewhere there",
					"What are you doing",
				],
				attachment: ["Something", "Somewhere", "Somehow"],
			},
		},
	},
	{
		start: moment("2024-11-15T12:00:00").toDate(),
		end: moment("2024-11-11T15:00:00").toDate(),
		data: {
			work: {
				id: 6,
				label: "TD",
				title: "More of this stuff",
				type: "event",
				priority: "Medium",
				column: "blog",
				location: "Home",
				desc: "Create 3d Illustration",
				bookmarkUrl: "dribble.com",
				comment: [
					"Something is fishy",
					"Somewhere there",
					"What are you doing",
				],
				attachment: ["Something", "Somewhere", "Somehow"],
			},
		},
	},
	{
		start: moment("2024-11-15T12:00:00").toDate(),
		end: moment("2024-11-11T15:00:00").toDate(),
		data: {
			work: {
				id: 7,
				label: "TD",
				title: "More of this stuff",
				type: "event",
				priority: "Medium",
				column: "blog",
				image: LoginCard,

				location: "Home",
				desc: "Create 3d Illustration",
				bookmarkUrl: "dribble.com",

				attachment: [
					"Something",
					"Somewhere",
					"Somehow",
					"But how",
					"Also when",
				],
			},
		},
	},
	{
		start: moment("2024-11-15T12:00:00").toDate(),
		end: moment("2024-11-11T15:00:00").toDate(),
		data: {
			work: {
				id: 8,
				label: "TD",
				title: "More of this stuff",
				type: "event",
				priority: "Medium",
				column: "blog",
				location: "Home",
				desc: "Create 3d Illustration",
				bookmarkUrl: "dribble.com",

				comment: [
					"Something is fishy",
					"Somewhere there",
					"What are you doing",
					"I am not doing anything",
					"Something is fishy",
					"Somewhere there",
					"What are you doing",
					"I am not doing anything",
					"Something is fishy",
					"Somewhere there",
					"What are you doing",
					"I am not doing anything",
				],
				attachment: ["Something", "Somewhere", "Somehow"],
			},
		},
	},
];

const groupByColumn = (data) => {
	return data.reduce((acc, item) => {
		const column = item.data.work.column.toUpperCase(); // Normalize case for consistency
		if (!acc[column]) acc[column] = [];
		acc[column].push(item);
		return acc;
	}, {});
};

const items = [
	{ page: "Home", link: "/" },
	{ page: "Manage Content", link: "/content-management" },
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

let priorityItems = [
	{ name: "High Priority", code: "High" },
	{ name: "Medium Priority", code: "Medium" },
	{ name: "Not Important", code: "Low" },
];

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
				fill="#000"
			/>
			<path
				d="M10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12Z"
				fill="#000"
			/>
			<path
				d="M16.5 12C16.5 11.1716 17.1716 10.5 18 10.5C18.8284 10.5 19.5 11.1716 19.5 12C19.5 12.8284 18.8284 13.5 18 13.5C17.1716 13.5 16.5 12.8284 16.5 12Z"
				fill="#000"
			/>
		</svg>
	);
}

const reorderColumns = (result, columns) => {
	if (!result.destination) return columns;

	const reordered = Array.from(Object.entries(columns));
	const [removed] = reordered.splice(result.source.index, 1);
	reordered.splice(result.destination.index, 0, removed);

	return Object.fromEntries(reordered);
};

const bottomItems = [
	{ name: "Documentation", link: "/" },
	{ name: "Privacy Policy", link: "/" },
	{ name: "FAQs", link: "/faq" },
];

const ManageContents = () => {
	const context = useContext(MyContext);

	const groups = groupByColumn(rawData);
	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveSubmenu(0);
	}, [context]);

	const [columns, setColumns] = useState(groups);
	const [selectedContent, setSelectedContent] = useState(null);
	const [openDetails, setOpenDetails] = useState(false);
	const [openColumnCreate, setOpenColumnCreate] = useState(false);
	const [openPostCreate, setOpenPostCreate] = useState(false);

	const handleDetailsClick = (content) => {
		setSelectedContent(content);
		setOpenDetails(true);
	};

	const handleCloseDetails = () => {
		setSelectedContent(null);

		setOpenDetails(false);
	};

	const onDragEnd = (result) => {
		const reordered = reorderColumns(result, columns);
		setColumns(reordered);
	};

	// Render a single content item
	const renderColumnContent = (columnName, filteredContent) => (
		<Card className="  h-fit w-full p-3 gap-3" key={columnName}>
			<CardHeader className="m-0 p-0">
				<div className="  flex flex-row items-center justify-between py-1 px-2 ">
					<Typography className="flex text-center text-black text-xs font-bold m-0">
						{columnName}
					</Typography>
					<IconButton
						variant="filled"
						onClick={() => {}}
						className=" max-h-6 max-w-6 bg-white"
						ripple={true}>
						<OptionIcon />
					</IconButton>
				</div>
			</CardHeader>
			<CardBody>
				<div className="w-full h-full py-2 flex flex-col  gap-2">
					{filteredContent.map((content) => renderContent(content))}
				</div>
			</CardBody>
			<CardFooter>
				<Button
					onClick={() => {}}
					ripple={true}
					size="lg"
					variant="gradient"
					className="rounded-full bg-blue-100 text-[#005CE8]">
					<span
						className={` max-w-4 max-h-5 flex items-center justify-center rounded-sm text-black`}>
						<PlusIcon style={{ fill: "#005CE8" }} />
					</span>
					Add New
				</Button>
			</CardFooter>
		</Card>
	);

	const renderContent = (content) => {
		const label = labelItems.find((e) => e.value === content.data.work.label);
		const { priority, pStyle } = GetUtils.getColorByPriority(
			content.data.work.priority
		);
		return (
			<Card
				onClick={() => handleDetailsClick(content)}
				className="content-item-card w-full py-0.5 gap-1 bg-white  border-2 hover:py-0 hover:border-1 "
				key={content.data.work.id}>
				<CardHeader className="m-0 p-0">
					<div className="  flex flex-row items-center justify-between py-1 px-2 m-0">
						<Typography className="text-xs font-normal flex flex-row items-center justify-start gap-2 m-0">
							<span className="h-4 w-4 flex items-center justify-center">
								<ClockIcon />
							</span>
							{moment(content.start).format("DD MMM, YYYY")}
						</Typography>
						<IconButton
							variant="filled"
							onClick={() => {}}
							className=" max-h-6 max-w-6 bg-white"
							ripple={true}>
							<OptionIcon />
						</IconButton>
					</div>
				</CardHeader>
				<CardBody className="flex flex-col gap-2 p-2 mt-2">
					{content.data.work.image != null && (
						<div className="max-h-44 w-full overflow-hidden ">
							<img
								src={content.data.work.image}
								alt="card-image"
								className="rounded-xl flex object-contain"
							/>
						</div>
					)}
					<div className="flex flex-row items-center justify-between">
						<Chip value={priority} className={`${pStyle}`} />
						<div className="flex flex-row items-center justify-center gap-2">
							<ListItemDecorator>
								<div className={`smallCircle ${label.extra} `}></div>
							</ListItemDecorator>
							<span className="text-sm">{label.name}</span>
						</div>
					</div>
					<div className="content-card-title h-fit  py-2 m-0">
						<Typography className="flex text-start text-black text-md m-0 font-medium h-fit">
							{content.data.work.title}
						</Typography>
					</div>
				</CardBody>
				<CardFooter className="flex flex-row items-center justify-between p-0 m-0">
					<div className="content-footer-left flex flex-row gap-1">
						{content.data.work.attachment != null && (
							<div className="content-footer-item p-0 m-0">
								<Button
									variant="text"
									size="sm"
									ripple={false}
									className="bg-inherit flex flex-row gap-1 py-0 px-2 m-0 rounded-md hover:bg-slate-50/50">
									<AttachmentClipIcon
										style={{ fill: "#959FA3" }}
										className="p-0 m-0 max-h-[1.15rem] max-w-5"
									/>
									<Typography className="flex text-center text-[#959FA3] text-sm m-0 font-medium ">
										{content.data.work.attachment.length}
									</Typography>
								</Button>
							</div>
						)}
						{content.data.work.comment != null && (
							<div className="content-footer-item p-0 m-0">
								<Button
									variant="text"
									size="sm"
									ripple={false}
									className="bg-inherit flex flex-row gap-1 py-0 px-2 m-0 rounded-md hover:bg-slate-50/50">
									<CommentBubbleIcon
										style={{ fill: "#959FA3" }}
										className="p-0 m-0 max-h-[1.15rem] max-w-5"
									/>
									<Typography className="flex text-center text-[#959FA3] text-sm m-0 font-medium ">
										{content.data.work.comment.length}
									</Typography>
								</Button>
							</div>
						)}
					</div>
					{content.data.work.members != null && (
						<div className="content-footer-item flex flex-row items-center justify-center -space-x-5 p-0 mx-3 my-2">
							{content.data.work.members.map((member, index) =>
								renderMember(member, index)
							)}
						</div>
					)}
				</CardFooter>
			</Card>
		);
	};

	const renderMember = (member, index) => (
		<div
			key={index}
			className={`relative w-8 h-8  rounded-full outline-2 border-white ${
				index == 1 ? "overflow-visible flex-1" : "overflow-hidden"
			} `}>
			<Avatar
				src="https://docs.material-tailwind.com/img/face-2.jpg"
				withBorder={false}
				className=" rounded-full"
			/>
		</div>
	);

	return (
		<div className="all-contents-wrapper flex flex-col p-2  w-full h-[100vh]">
			{selectedContent != null && (
				<ContentDetails
					open={openDetails}
					setOpen={setOpenDetails}
					handleClose={handleCloseDetails}
					content={selectedContent}
					labels={labelItems}
				/>
			)}

			<ColumnCreate open={openColumnCreate} setOpen={setOpenColumnCreate} />
			<PostCreate
				open={openPostCreate}
				setOpen={setOpenPostCreate}
				labels={labelItems}
				priorityList={priorityItems}
			/>

			<div className="flex flex-row justify-between items-center">
				<PageTopbar items={items} pageName="Manage Content" />
				<div className="flex flex-row px-2 gap-2">
					<Button
						onClick={() => {}}
						ripple={true}
						size="lg"
						variant="gradient"
						className={`min-w-28 max-w-32 rounded-full bg-zinc-50 text-black hover:bg-slate-100 `}>
						Share Board
					</Button>
					<Button
						onClick={() => setOpenPostCreate(true)}
						ripple={true}
						size="sm"
						variant="gradient"
						className={`min-w-28 max-w-32 rounded-full gap-2 bg-["#005CE8"] `}>
						<span
							className={` max-w-4 max-h-5 flex items-center justify-center rounded-sm text-black`}>
							<PlusIcon style={{ fill: "#fff" }} />
						</span>
						Post
					</Button>
				</div>
			</div>
			<div className="column-cards-container flex flex-row flex-shrink-0 gap-3 overflow-x-auto overflow-y-hidden">
				<DragDropContext onDragEnd={onDragEnd} className="p-0 m-0">
					<Droppable droppableId="columns" direction="horizontal" type="column">
						{(provided) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								className="flex flex-row gap-3">
								{Object.entries(columns).map(
									([columnName, contents], index) => (
										<div key={columnName} className="flex flex-1 w-[20vw]">
											<Draggable draggableId={columnName} index={index}>
												{(provided) => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														style={{
															...provided.draggableProps.style, // Merge draggable styles
															display: "flex", // Ensure the element remains a flexbox
															flex: "1", // Apply flex-1 explicitly
														}}>
														{renderColumnContent(columnName, contents)}
													</div>
												)}
											</Draggable>
										</div>
									)
								)}
								{provided.placeholder}
							</div>
						)}
					</Droppable>

					<Card
						className="add-column-button flex flex-row flex-1 items-start justify-center py-4 max-w-[20%] gap-3 bg-[#fff] h-fit hover:bg-indigo-50/50"
						onClick={() => setOpenColumnCreate(true)}>
						<CardBody className="flex flex-row gap-2  items-center justify-center">
							<span
								className={` max-w-4 max-h-5 flex items-center justify-center rounded-sm text-black`}>
								<PlusIcon style={{ fill: "#005CE8" }} />
							</span>
							<Typography className="flex text-center text-[#005CE8] text-md m-0 font-medium ">
								Add New Column
							</Typography>
						</CardBody>
					</Card>
				</DragDropContext>
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
	);
};

export default ManageContents;
