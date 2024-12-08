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
import PlusIcon from "../../../../public/assets/images/svg/plus.svg";
import XMarkIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { ListDivider, ListItemDecorator } from "@mui/joy";
import ArrowForward from "../../../../public/assets/images/svg/forward-arrow.svg";

function renderValue(label) {
	if (!label) {
		return null;
	}

	return (
		<React.Fragment>
			<ListItemDecorator>
				<div
					style={{ backgroundColor: label.color }}
					className={`rounded-full min-h-5 min-w-5  mr-5`}></div>
			</ListItemDecorator>
			{label.name}
		</React.Fragment>
	);
}

const labelColors = [
	{
		value: 1,
		name: "Red",
		color: "#d50000 ",
	},
	{
		value: 2,
		name: "Green",
		color: "#0c8c4e",
	},
	{
		value: 3,
		name: "Brown",
		color: "#793200",
	},
	{
		value: 4,
		name: "Sky Blue",
		color: "#00b5dd",
	},
	{
		value: 5,
		name: "Orage",
		color: "#ff9904 ",
	},
];

const LabelAddDialog = ({ open, setOpen }) => {
	const [selectedLabel, setLabel] = useState(labelColors[0]);
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
											Create New Label
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
									<div className=" flex flex-row justify-center items-center w-full gap-2">
										<div className=" w-1/6 gap-1 flex flex-col">
											<span className="font-medium text-gray-400"> Label</span>
											<Select
												onChange={(event, newValue) => {
													const selected = labelColors.find(
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
												{labelColors.map((label, index) => (
													<React.Fragment key={label.value}>
														{index !== 0 ? (
															<ListDivider role="none" inset="startContent" />
														) : null}
														<Option value={label.value}>
															<ListItemDecorator>
																<div
																	style={{ backgroundColor: label.color }}
																	className={`rounded-full min-h-5 min-w-5  mr-5`}></div>
															</ListItemDecorator>
															{label.name}
														</Option>
													</React.Fragment>
												))}
											</Select>
										</div>
										<div className=" w-full gap-1 flex flex-col">
											<span className="font-medium text-gray-400"> Title</span>
											<Input
												placeholder="Add label title"
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
										Create Label
										<span className=" w-[30px] h-[30px] flex items-center justify-center rounded-sm text-black">
											<img src={ArrowForward} alt="icon" />
										</span>
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

export default LabelAddDialog;
