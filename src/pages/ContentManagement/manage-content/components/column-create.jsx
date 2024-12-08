import { Transition } from "react-transition-group";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Input from "@mui/joy/Input";
import React, { useRef } from "react";
import { Divider } from "@mui/material";
import ArrowForward from "../../../../assets/images/svg/forward-arrow.svg?react";

const ColumnCreate = ({ open, setOpen }) => {
	const modalRef = useRef(null);

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
								className="w-2/5"
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
											placeholder="Add Column Title"
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
										Create Column
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

export default ColumnCreate;
