import { Transition } from "react-transition-group";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Input from "@mui/joy/Input";
import React, { useRef, useState } from "react";
import ArrowForward from "../../../../assets/images/svg/forward-arrow.svg?react";
import { Divider } from "@mui/material";
import { ListDivider, ListItemDecorator, Option, Select } from "@mui/joy";
import { Chip } from "@material-tailwind/react";

function renderValue(label) {
	if (!label) {
		return null;
	}

	return (
		<React.Fragment>
			<ListItemDecorator>
				<div className={`smallCircle ${label.extra} mr-5`}></div>
			</ListItemDecorator>
			{label.name}
		</React.Fragment>
	);
}

function renderPriority(priority) {
	if (!priority) {
		return null;
	}

	return (
		<React.Fragment>
			<Chip
				value={`${priority.name}`}
				className={`${getColorByPriority(priority.code)}`}
			/>
		</React.Fragment>
	);
}

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

const PostCreate = ({ open, setOpen, labels = [], priorityList = [] }) => {
	const modalRef = useRef(null);
	const [selectedPriority, setPriority] = useState(priorityList[0]);
	const [selectedLabel, setLabel] = useState(labels[0]);

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
							onClose={() => setOpen(false)}
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
									transition: `opacity 300ms`,
									...{
										entering: { opacity: 1 },
										entered: { opacity: 1 },
									}[state],
								}}>
								<DialogTitle>
									<div className="flex w-full flex-col items-center justify-center gap-2  py-3">
										<div className="flex flex-row items-center justify-between w-full px-3">
											Create New
										</div>
										<Divider />
									</div>
								</DialogTitle>
								<DialogContent className=" flex flex-col py-2 px-5 gap-2">
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">Title</span>
										<Input
											placeholder="Add title"
											variant="outlined"
											color="neutral"
											sx={{
												justifyContent: "center",
												alignItems: "center",
												"--Input-minHeight": "50px",

												"--Input-radius": "5px",
											}}
										/>
									</div>
									<div className=" flex flex-row justify-center items-center w-full gap-2">
										<div className=" w-full gap-1 flex flex-col">
											<span className="font-medium text-gray-400"> Type</span>
											<Select
												value={selectedPriority?.code}
												onChange={(event, newValue) => {
													const selected = priorityList.find(
														(priority) => priority.code === newValue
													);
													setPriority(selected);
												}}
												className="flex justify-start items-start"
												slotProps={{
													button: {
														sx: {
															alignItems: "center",
															justifyContent: "start",
														},
													},

													listbox: {
														sx: {
															alignItems: "center",
															justifyContent: "start",
															gap: 1,
														},
													},
												}}
												renderValue={() => renderPriority(selectedPriority)}
												sx={{
													flex: 1,
													"--ListItemDecorator-size": "44px",
													borderRadius: 5,
												}}>
												{priorityList != null &&
													priorityList.map((priority, index) => (
														<React.Fragment key={priority.code}>
															{index !== 0 ? (
																<ListDivider role="none" inset="startContent" />
															) : null}
															<Option value={priority.code}>
																<Chip
																	value={priority.name}
																	className={`${getColorByPriority(
																		priority.code
																	)}`}
																/>
															</Option>
														</React.Fragment>
													))}
											</Select>
										</div>
										<div className=" w-full gap-1 flex flex-col">
											<span className="font-medium text-gray-400"> Label</span>
											<Select
												onChange={(event, newValue) => {
													const selected = labels.find(
														(label) => label.value === newValue
													);
													setLabel(selected); 
												}}
												value={selectedLabel?.value}
												slotProps={{
													button: {
														sx: {
															alignItems: "center",
															justifyContent: "start",
														},
													},
													listbox: {
														sx: {
															"--ListItemDecorator-size": "44px",
															alignItems: "center",
															justifyContent: "start",
														},
													},
												}}
												sx={{
													flex: 1,
													"--ListItemDecorator-size": "44px",
													minWidth: 240,
												}}
												renderValue={() => renderValue(selectedLabel)}>
												{labels != null &&
													labels.map((label, index) => (
														<React.Fragment key={label.value}>
															{index !== 0 ? (
																<ListDivider role="none" inset="startContent" />
															) : null}
															<Option value={label.value}>
																<ListItemDecorator>
																	<div
																		className={`smallCircle ${label.extra} mr-5`}></div>
																</ListItemDecorator>
																{label.name}
															</Option>
														</React.Fragment>
													))}
											</Select>
										</div>
									</div>
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">
											{" "}
											Description
										</span>
										<Input
											multiline="true"
											placeholder="Write something about your events..."
											variant="outlined"
											color="neutral"
											sx={{
												padding: "10px",
												overflowWrap: "anywhere",
												justifyContent: "start",
												alignItems: "start",
												"--Input-minHeight": "120px",

												"--Input-radius": "5px",
											}}
										/>
									</div>
									<div className=" flex flex-row justify-center items-center w-full gap-2">
										<div className=" w-full gap-1 flex flex-col">
											<span className="font-medium text-gray-400">
												{" "}
												Created Date
											</span>
											<Input
												type="date"
												slotProps={{
													input: {
														min: "2010-06-07",
														max: "2100-06-14",
													},
												}}
												sx={{
													justifyContent: "center",
													alignItems: "center",
													"--Input-minHeight": "50px",
													"--Input-radius": "5px",
												}}
											/>
										</div>
										<div className=" w-full gap-1 flex flex-col">
											<span className="font-medium text-gray-400">
												{" "}
												Due Date
											</span>
											<Input
												type="date"
												slotProps={{
													input: {
														min: "2010-06-07",
														max: "2100-06-14",
													},
												}}
												sx={{
													justifyContent: "center",
													alignItems: "center",
													"--Input-minHeight": "50px",
													"--Input-radius": "5px",
												}}
											/>
										</div>
									</div>
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">
											Add Member
										</span>
										<Input
											placeholder="Member email address"
											variant="outlined"
											color="neutral"
											sx={{
												justifyContent: "center",
												alignItems: "center",
												"--Input-minHeight": "50px",

												"--Input-radius": "5px",
											}}
										/>
									</div>
								</DialogContent>
								<DialogActions
									className=" w-full mb-3  py-2 px-5"
									sx={{
										alignItems: "start",
										justifyContent: "space-between",
									}}>
									<Button
										variant="solid"
										color="primary"
										size="md"
										className="w-30 max-w-44 rounded-full flex flex-row items-center justify-center gap-2"
										onClick={() => setOpen(false)}>
										Create Now
										<span className="h-4 w-5 p-0 m-0">
											<ArrowForward />
										</span>
									</Button>

									<Button
										variant="plain"
										size="md"
										className="w-30 max-w-40 rounded-full"
										onClick={() => setOpen(false)}>
										Cancel
									</Button>
								</DialogActions>
							</ModalDialog>
						</Modal>
					</div>
				)}
			</Transition>
		</React.Fragment>
	);
};

export default PostCreate;
