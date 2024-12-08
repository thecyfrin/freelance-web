import { Transition } from "react-transition-group";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import React, { createRef, useEffect, useRef, useState } from "react";
import PlusIcon from "../../../assets/images/svg/plus.svg";
import XMarkIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { ListDivider, ListItemDecorator } from "@mui/joy";
import ArrowForward from "../../../assets/images/svg/forward-arrow.svg";

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

const EventAddDialog = ({ open, setOpen, labels = [] }) => {
	const [type, setType] = useState("event");
	const [selectedLabel, setLabel] = useState(labels[0]);
	const [showAdvance, setShowAdvance] = useState(false);
	const modalRef = useRef(null);

	return (
		<React.Fragment>
			<Transition in={open} timeout={400} nodeRef={modalRef}>
				{(state) => (
					<div>
						<Modal
							ref={modalRef}
							keepMounted
							animation={false}
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
								className="w-4/5"
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
									<div className="flex w-full flex-col items-center justify-center gap-2  py-1">
										<div className="flex flex-row items-center justify-between w-full px-3">
											Create New
											<IconButton
												variant="outlined"
												onClick={() => setOpen(false)}
												className="max-h-1 max-w-1 ">
												<XMarkIcon />
											</IconButton>
										</div>
										<Divider />
									</div>
								</DialogTitle>
								<DialogContent className=" flex flex-col py-2 px-5 gap-2">
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400"> Title</span>
										<Input
											placeholder="First Name *"
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
												value={type}
												onChange={(event, val) => setType(val)}
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
												sx={{
													flex: 1,
													borderRadius: 5,
												}}>
												<Option value="event">Events</Option>
												<Option value="task">Task</Option>
											</Select>
										</div>
										<div className=" w-full gap-1 flex flex-col">
											<span className="font-medium text-gray-400"> Label</span>
											<Select
												onChange={(event, newValue) => {
													const selected = labels.find(
														(label) => label.value === newValue
													);
													setLabel(selected); // Update state correctly
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
										<span className="font-medium text-gray-400"> Date</span>
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

									<div className={!showAdvance && "hidden"}>
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
													"--Input-minHeight": "230px",

													"--Input-radius": "5px",
												}}
											/>
										</div>
										<div className=" w-full gap-1 flex flex-col">
											<span className="font-medium text-gray-400">
												{" "}
												Bookmark URL
											</span>
											<Input
												placeholder="Meeting, file, zoom etc url..."
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
										<div className=" w-full gap-1 flex flex-col">
											<span className="font-medium text-gray-400">
												{" "}
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
									</div>
								</DialogContent>
								<DialogActions
									className=" w-full mb-3  p-4"
									sx={{
										alignItems: "start",
										justifyContent: "start",
									}}>
									<Button
										variant="solid"
										color="primary"
										size="md"
										onClick={() => setOpen(false)}>
										Save
										<span className=" w-[30px] h-[30px] flex items-center justify-center rounded-sm text-black">
											<img src={ArrowForward} alt="icon" />
										</span>
									</Button>

									<Button
										variant="outlined"
										color="primary"
										size="md"
										onClick={() => setShowAdvance(!showAdvance)}>
										{!showAdvance ? "Advance Option" : "Hide Advance Option"}
									</Button>
									<div className="w-[60%]"></div>

									<Button
										variant="plain"
										size="md"
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

export default EventAddDialog;
