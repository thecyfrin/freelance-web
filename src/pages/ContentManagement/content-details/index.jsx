import React, { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../../App";
import { Transition } from "react-transition-group";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Input from "@mui/joy/Input";
import ArrowForward from "../../../../public/assets/images/svg/forward-arrow.svg?react";
import { Divider } from "@mui/material";
import {
	Avatar,
	Chip,
	IconButton,
	Typography,
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	Button,
} from "@material-tailwind/react";
import { ListItemDecorator } from "@mui/joy";
import moment from "moment";

function getColorByPriority(pCode) {
	switch (pCode) {
		case "High":
			return "bg-red-100/50 rounded-full text-red-500/70";
		case "Medium":
			return "bg-blue-100/50 rounded-full text-blue-500/70";
		case "Low":
			return "bg-orange-100/50 rounded-full text-orange-500/70";
		default:
			return "bg-indigo-100/50 rounded-full text-indigo-500/70";
	}
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
				stroke="#000"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

function MenuIcon() {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10 12.5H7.5V10L15 2.5L17.5 5L10 12.5Z"
				stroke="#191B1C"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.125 4.375L15.625 6.875"
				stroke="#191B1C"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.875 9.375V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V3.75C3.125 3.58424 3.19085 3.42527 3.30806 3.30806C3.42527 3.19085 3.58424 3.125 3.75 3.125H10.625"
				stroke="#191B1C"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function MessageBubbleIcon() {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M3.54912 13.828C2.6173 12.2572 2.29097 10.4002 2.6314 8.60583C2.97184 6.81142 3.95563 5.203 5.39803 4.08261C6.84044 2.96222 8.64224 2.40692 10.4651 2.52099C12.2879 2.63506 14.0065 3.41065 15.2979 4.70212C16.5894 5.99359 17.365 7.71211 17.4791 9.53496C17.5932 11.3578 17.0379 13.1596 15.9175 14.602C14.7971 16.0444 13.1887 17.0282 11.3943 17.3687C9.59988 17.7091 7.74291 17.3828 6.17207 16.451L6.17209 16.4509L3.58173 17.191C3.47456 17.2216 3.36115 17.223 3.25325 17.1951C3.14536 17.1671 3.0469 17.1108 2.96809 17.032C2.88927 16.9532 2.83297 16.8547 2.80501 16.7468C2.77705 16.6389 2.77846 16.5255 2.80908 16.4184L3.54918 13.828L3.54912 13.828Z"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z"
				fill="#005CE8"
			/>
			<path
				d="M6.25 10.9375C6.76777 10.9375 7.1875 10.5178 7.1875 10C7.1875 9.48223 6.76777 9.0625 6.25 9.0625C5.73223 9.0625 5.3125 9.48223 5.3125 10C5.3125 10.5178 5.73223 10.9375 6.25 10.9375Z"
				fill="#005CE8"
			/>
			<path
				d="M13.75 10.9375C14.2678 10.9375 14.6875 10.5178 14.6875 10C14.6875 9.48223 14.2678 9.0625 13.75 9.0625C13.2322 9.0625 12.8125 9.48223 12.8125 10C12.8125 10.5178 13.2322 10.9375 13.75 10.9375Z"
				fill="#005CE8"
			/>
		</svg>
	);
}

const CommentSection = ({ comment }) => (
	<div className="comment-section w-full flex flex-col gap-4 ">
		<div className="w-full gap-1 flex flex-col">
			<span className="font-medium text-black text-sm">Post Comments</span>
			<div className="flex flex-row justify-center items-center gap-3">
				<Input
					placeholder="Write down your questions and comments"
					variant="solid"
					startDecorator={<MessageBubbleIcon />}
					sx={{
						color: "#949292",
						backgroundColor: "#f7f7f7",
						flex: "1",
						justifyContent: "start",
						alignItems: "center",
						"--Input-minHeight": "40px",
						"--Input-radius": "20px",
					}}
				/>
				<Button
					variant="solid"
					color="primary"
					size="md"
					className="w-28 max-w-32 rounded-3xl flex flex-row items-center justify-center gap-2"
					onClick={() => {}}>
					Post
					<span className="h-5 max-w-4 p-0 m-0">
						<ArrowForward />
					</span>
				</Button>
			</div>
		</div>
		<div className=" w-full gap-1 flex flex-col">
			<span className="font-medium text-black text-sm">Latest Comments</span>
			<div className="flex flex-col gap-3 pt-2">
				{comment.map((c) => (
					<div
						key={c}
						className="flex flex-row items-center justify-start gap-2">
						<Avatar
							src="https://docs.material-tailwind.com/img/face-2.jpg"
							withBorder={false}
							className="w-10 h-10 rounded-full"
						/>
						<div className="flex flex-col items-start justify-start gap-1">
							<div className="flex flex-row items-center justify-start gap-2">
								<Typography className="m-0 p-0 text-sm font-medium text-blue-950">
									Jane
								</Typography>
								<Typography className="m-0 p-0 text-xs font-medium text-black">
									•
								</Typography>
								<Typography className="m-0 p-0 text-xs font-medium text-gray-400">
									10 mins ago
								</Typography>
							</div>
							<Typography className="m-0 p-0 text-sm font-normal text-black">
								{c}
							</Typography>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
);

const AttachmentSection = ({ attachment }) => {
	console.log(attachment);

	return (
		<div className="attachment-section w-full flex flex-col gap-2">
			<div className="w-full gap-1 flex flex-col">
				<span className="font-medium text-gray-400"> {attachment.length}</span>
				<Input
					multiline
					placeholder="Write something about your events..."
					variant="outlined"
					color="neutral"
					sx={{
						padding: "10px",
						overflowWrap: "anywhere",
						justifyContent: "start",
						alignItems: "start",
						"--Input-minHeight": "50px",
						"--Input-radius": "5px",
					}}
				/>
			</div>
		</div>
	);
};

const ContentDetails = ({ open, setOpen, handleClose, content, labels }) => {
	const context = useContext(MyContext);
	const modalRef = useRef(null);
	const label = labels.find((e) => e.value === content.data.work.label);

	const { comment, attachment } = content?.data?.work || {};

	const tabs = [];
	if (comment) tabs.push({ label: "Comments", value: "comment" });
	if (attachment) tabs.push({ label: "Attach File", value: "attachment" });

	const [activeTab, setActiveTab] = useState(tabs[0]?.value);

	const renderActiveTabContent = () => {
		switch (activeTab) {
			case comment != null && "comment":
				return <CommentSection comment={comment} />;
			case attachment != null && "attachment":
				return <AttachmentSection attachment={attachment} />;
			default:
				return null;
		}
	};
	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveSubmenu(1);
	}, [context]);
	return (
		<React.Fragment>
			<Transition in={open} timeout={400} nodeRef={modalRef}>
				{(state) => (
					<div>
						<Modal
							ref={modalRef}
							keepMounted
							animation="false"
							open={!["exited", "exiting"].includes(state)}
							onClose={handleClose}
							slotProps={{
								backdrop: {
									sx: {
										opacity: 0,
										backdropFilter: "none",
										transition: `opacity 400ms, backdrop-filter 400ms`,
										...{
											entering: { opacity: 1, backdropFilter: "blur(8px)" },
											entered: { opacity: 1, backdropFilter: "blur(8px)" },
										}[state],
									},
								},
							}}
							sx={[
								state === "exited"
									? { visibility: "hidden" }
									: { visibility: "visible" },
							]}>
							<ModalDialog
								layout="center"
								className="w-1/2"
								sx={{
									padding: 0,
									opacity: 0,
									overflowY: "auto",
									overflowX: "hidden",
									transition: `opacity 300ms`,
									...{
										entering: { opacity: 1 },
										entered: { opacity: 1 },
									}[state],
								}}>
								<DialogTitle>
									<div className="flex w-full flex-col items-center justify-center gap-2  py-3">
										<div className="flex flex-row items-center justify-end w-full px-3 gap-2">
											<IconButton
												onClick={() => {}}
												className="p-2 max-w-8 max-h-8 rounded-full bg-slate-200">
												<MenuIcon />
											</IconButton>
											<IconButton
												onClick={() => {}}
												className="p-2 max-w-8 max-h-8 rounded-full bg-slate-200">
												<VerticalOptionIcon />
											</IconButton>
										</div>
										<Divider />
									</div>
								</DialogTitle>
								<DialogContent className=" flex flex-col pt-2 pb-4 px-4 gap-3 overflow-visible ">
									<div className=" w-full  flex flex-row items-center justify-between">
										<span className="font-medium text-black">
											{content.data.work.title}
										</span>
										<Chip
											value={`${content.data.work.priority} Priority`}
											className={`${getColorByPriority(
												content.data.work.priority
											)}`}
										/>
									</div>
									<div className=" w-full  flex flex-row items-center justify-between">
										<div className=" w-full gap-1 flex flex-col">
											<span className="font-normal text-xs text-gray-400">
												LABEL
											</span>
											<div className="flex flex-row items-center justify-start gap-2">
												<ListItemDecorator>
													<div
														style={{ backgroundColor: label.colorCode }}
														className={`rounded-full min-h-2 min-w-2  `}></div>
												</ListItemDecorator>
												<Typography className="m-0 p-0 text-sm font-bold">
													{label.name}
												</Typography>
											</div>
										</div>
										<div className=" w-full gap-1 flex flex-col">
											<span className="font-normal text-xs text-gray-400">
												CREATED DATE
											</span>

											<Typography className="m-0 p-0 text-sm font-bold">
												{`${moment(content.start).format(
													"DD MMM, YYYY"
												)} at ${moment(content.start).format("hh:MM A")}`}
											</Typography>
										</div>
										<div className=" w-full gap-1 flex flex-col">
											<span className="font-normal text-xs text-gray-400">
												DUE DATE
											</span>

											<Typography className="m-0 p-0 text-sm font-bold">
												{`${moment(content.end).format(
													"DD MMM, YYYY"
												)} at ${moment(content.end).format("hh:MM A")}`}
											</Typography>
										</div>
									</div>
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-bold text-sm text-black">
											Description
										</span>
										<Typography className="m-0 p-0 text-xs font-normal text-gray-500">
											{content.data.work.desc}
										</Typography>
									</div>
									{content.data.work.members != null && (
										<div className=" w-full gap-2 flex flex-col">
											<span className=" flex flex-row gap-1 items-center font-bold text-sm text-black">
												Members
												<Typography className="m-0 p-0 text-sm font-normal text-gray-500">
													({content.data.work.members.length})
												</Typography>
											</span>
											<div className="details-members-container  ">
												{content.data.work.members.map((e) => (
													<div
														key={e.email}
														className="flex flex-row items-center justify-start gap-2">
														<Avatar
															src="https://docs.material-tailwind.com/img/face-2.jpg"
															withBorder={false}
															className="w-10 h-10 rounded-full"
														/>
														<div className="flex flex-col items-start justify-center gap-1">
															<Typography className="m-0 p-0 text-sm font-medium text-black">
																{e.name}
															</Typography>
															<Typography className="m-0 p-0 text-xs font-normal text-gray-500">
																{e.email}
															</Typography>
														</div>
													</div>
												))}
											</div>
										</div>
									)}
								</DialogContent>
								{tabs.length > 0 && (
									<DialogActions
										className=" w-full mb-3  py-2"
										sx={{
											alignItems: "start",
											justifyContent: "start",
										}}>
										<Tabs className="w-full " value={activeTab}>
											<TabsHeader
												className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
												indicatorProps={{
													className:
														"bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
												}}>
												{tabs.map(({ label, value }) => (
													<Tab
														key={value}
														value={value}
														className={
															activeTab === value
																? " w-40 text-black font-medium border-b-2 border-blue-400 "
																: " w-40 text-gray-500"
														}
														onClick={() => setActiveTab(value)}>
														{label}
													</Tab>
												))}
											</TabsHeader>
											<TabsBody className="w-full px-4 py-2">
												{renderActiveTabContent()}
											</TabsBody>
										</Tabs>
									</DialogActions>
								)}
							</ModalDialog>
						</Modal>
					</div>
				)}
			</Transition>
		</React.Fragment>
	);
};

export default ContentDetails;
