import React, { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../../App";
import { Transition } from "react-transition-group";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import PlusIcon from "../../../../public/assets/images/svg/plus.svg?react";
import { Divider } from "@mui/material";
import { Card, CardBody, CardFooter, Radio } from "@material-tailwind/react";
import VerticalLayout from "../../../../public/assets/images/png/sidebar-vertical.png";
import HorizontalLayout from "../../../../public/assets/images/png/topbar-horizontal.png";
import SvgIcons from "../../../utils/icon-functions";

function CloseIcon() {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.5 3.5L3.5 12.5"
				stroke="#959FA3"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.5 12.5L3.5 3.5"
				stroke="#959FA3"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ForwardWhite() {
	return (
		<svg
			width="21"
			height="20"
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M3.625 10H17.375"
				stroke="white"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.75 4.375L17.375 10L11.75 15.625"
				stroke="white"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const UtilityDialog = ({ open, setOpen }) => {
	const modalRef = useRef(null);
	const context = useContext(MyContext);

	const [verticalBool, setVerticalBool] = useState(context.menuVertical);
	const [sideColor, setSideColor] = useState(context.sidebarColor);

	const handleSave = () => {
		context.setMenuVertical(verticalBool);
		context.setSidebarColor(sideColor);
		setOpen(false);
	};

	const handleReset = () => {
		setVerticalBool(true);
		context.setMenuVertical(true);
		setSideColor("white");
		context.setSidebarColor("white");
	};

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
								layout="right"
								className="w-1/4"
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
									<div className="flex w-full flex-col items-center justify-center gap-2  py-2">
										<div className="flex flex-row items-center justify-center w-full px-3">
											<div className=" text-sm font-medium pl-2 text-black">
												Settings
											</div>
											<div className="flex-grow"></div>
											<Button
												ripple="true"
												onClick={() => setOpen(false)}
												variant="text"
												className=" text-xs text-end font-medium text-gray-500 bg-inherit max-w-fit px-2 py-0 m-0">
												<CloseIcon />
											</Button>
										</div>
										<Divider />
									</div>
								</DialogTitle>
								<DialogContent className=" flex flex-col py-2 px-4 gap-4 divide-y-2 divide-gray-300">
									<div className="layout-selector flex flex-col items-start justify-center gap-2">
										<div className=" text-md font-semibold  text-black">
											Layout
										</div>
										<div className="flex flex-row items-center justify-center gap-4">
											<Card
												className="w-full h-fit p-2 m-0 shadow-xl gap-2"
												shadow={true}>
												<CardBody className="w-full p-0 m-0 ">
													<img src={VerticalLayout} alt="vertical" />
												</CardBody>
												<CardFooter className="p-0 m-0 flex flex-row items-center justify-start hover:bg-blue-50 rounded-md w-full">
													<div
														onClick={() => setVerticalBool(true)}
														className=" no-select flex flex-row items-center justify-start gap-2 w-full p-2">
														<Radio
															name="vertical"
															color="blue"
															className="border-gray-900/10 bg-gray-900/5 p-0  hover:before:opacity-0"
															checked={verticalBool}
															onChange={() => {}}
														/>
														<div
															color="blue-gray"
															className="no-select font-normal text-blue-gray-400">
															Vertical
														</div>
													</div>
												</CardFooter>
											</Card>
											<Card
												className="w-full h-fit p-2 m-0 shadow-xl gap-2"
												shadow={true}>
												<CardBody className="w-full p-0 m-0 ">
													<img src={HorizontalLayout} alt="vertical" />
												</CardBody>
												<CardFooter className="w-full p-0 m-0 flex flex-row items-center justify-start hover:bg-blue-50 rounded-md">
													<div
														onClick={() => setVerticalBool(false)}
														className="no-select w-full flex flex-row items-center justify-start gap-2 p-2">
														<Radio
															name="horizontal"
															color="blue"
															className="border-gray-900/10 bg-gray-900/5 p-0  hover:before:opacity-0"
															checked={!verticalBool}
															onChange={() => {}}
														/>
														<div className="no-select font-normal text-blue-gray-400">
															Horizontal
														</div>
													</div>
												</CardFooter>
											</Card>
										</div>
									</div>
									<div className="bar-color-settings flex flex-col items-start justify-center gap-2 py-4">
										<div className=" text-md font-semibold  text-black">
											Left Side Bar
										</div>
										<div className="flex flex-col items-start justify-center gap-1">
											<div
												onClick={() => setSideColor("white")}
												className="no-select w-full flex flex-row items-center justify-start gap-2 py-1 px-0">
												<Radio
													name="whiteC"
													color="blue"
													className="border-gray-900/10 bg-gray-900/5 p-0  hover:before:opacity-0  m-0"
													checked={sideColor === "white"}
													onChange={() => {}}
												/>
												<div
													color="blue-gray"
													className="no-select font-medium text-blue-gray-400">
													White
												</div>
											</div>
											<div
												onClick={() => setSideColor("black")}
												className="no-select w-full flex flex-row items-center justify-start gap-2">
												<Radio
													name="blackC"
													color="blue"
													className="border-gray-900/10 bg-gray-900/5 p-0  hover:before:opacity-0  m-0"
													checked={sideColor === "black"}
													onChange={() => {}}
												/>
												<div
													color="blue-gray"
													className="no-select font-medium text-blue-gray-400">
													Black
												</div>
											</div>
											<div
												onClick={() => setSideColor("blue")}
												className="no-select w-full flex flex-row items-center justify-start gap-2">
												<Radio
													name="blueC"
													color="blue"
													className="border-gray-900/10 bg-gray-900/5 p-0  hover:before:opacity-0  m-0"
													checked={sideColor === "blue"}
													onChange={() => {}}
												/>
												<div
													color="blue-gray"
													className="no-select font-medium text-blue-gray-400">
													Navy Blue
												</div>
											</div>
										</div>
									</div>
								</DialogContent>
								<DialogActions className=" w-full mb-3  py-2 px-5">
									<Button
										onClick={handleSave}
										className="purchase-button-utility flex w-full mb-2  gap-2 bg-[#005CE8f2] text-white text-sm rounded-full">
										Purchase Now
										<span className="h-fit w-5">
											<ForwardWhite className="max-h-3 max-w-5 object-cover m-0 p-0" />
										</span>
									</Button>
									<Button
										onClick={handleReset}
										className="reset-utility-button  flex w-full mb-2  gap-2  text-sm">
										Reset To Default
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

export default UtilityDialog;
