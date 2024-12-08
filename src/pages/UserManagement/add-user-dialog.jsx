import { Transition } from "react-transition-group";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import React from "react";
import PlusIcon from "../../../public/assets/images/svg/plus.svg";
import XMarkIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import PowerChart from "../../../public/assets/images/png/power-chart.png";

const AddUserDialog = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<React.Fragment>
			<Button
				variant="solid"
				color="primary"
				className="gap-2"
				onClick={() => setOpen(true)}>
				Add user
				<span className=" w-[15px] h-[15px] flex items-center justify-center rounded-sm text-black">
					<img src={PlusIcon} alt="icon" />
				</span>
			</Button>
			<Transition in={open} timeout={400}>
				{(state) => (
					<Modal
						keepMounted
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
										Add User
										<IconButton
											variant="outlined"
											onClick={() => setOpen(false)}
											className="max-h-1 max-w-1">
											<XMarkIcon />
										</IconButton>
									</div>
									<Divider />
								</div>
							</DialogTitle>
							<DialogContent className=" flex flex-col py-2 px-5 gap-1">
								<div className=" w-full">
									<Input
										placeholder="User ID *"
										variant="outlined"
										color="neutral"
										sx={{
											justifyContent: "center",
											alignItems: "center",
											"--Input-minHeight": "50px",

											"--Input-radius": "15px",
										}}
									/>
								</div>
								<div className=" flex flex-row justify-center items-center w-full gap-2">
									<Input
										placeholder="First Name *"
										variant="outlined"
										color="neutral"
										sx={{
											flex: 1,
											justifyContent: "center",
											alignItems: "center",
											"--Input-minHeight": "50px",

											"--Input-radius": "15px",
										}}
									/>
									<Input
										placeholder="Last name *"
										variant="outlined"
										color="neutral"
										sx={{
											flex: 1,
											justifyContent: "center",
											alignItems: "center",
											"--Input-minHeight": "50px",

											"--Input-radius": "15px",
										}}
									/>
								</div>
								<div className=" flex flex-row justify-center items-center w-full gap-2">
									<Input
										placeholder="Email ID *"
										variant="outlined"
										color="neutral"
										sx={{
											flex: 1,
											justifyContent: "center",
											alignItems: "center",
											"--Input-minHeight": "50px",

											"--Input-radius": "15px",
										}}
									/>
									<Input
										placeholder="Mobile No"
										variant="outlined"
										color="neutral"
										sx={{
											flex: 1,
											justifyContent: "center",
											alignItems: "center",
											"--Input-minHeight": "50px",

											"--Input-radius": "15px",
										}}
									/>
									<Select
										placeholder="Select Role Type"
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
											borderRadius: 15,
										}}>
										<Option value="sAdmin">Super Admin</Option>
										<Option value="admin">Admin</Option>
										<Option value="employee">Employee</Option>
										<Option value="member">Membership level</Option>
									</Select>
								</div>
								<div className=" flex flex-row justify-center items-center w-full gap-2">
									<Input
										placeholder="Username *"
										variant="outlined"
										color="neutral"
										sx={{
											flex: 1,
											justifyContent: "center",
											alignItems: "center",
											"--Input-minHeight": "50px",

											"--Input-radius": "15px",
										}}
									/>
									<Input
										placeholder="Password *"
										variant="outlined"
										color="neutral"
										sx={{
											flex: 1,
											justifyContent: "center",
											alignItems: "center",
											"--Input-minHeight": "50px",

											"--Input-radius": "15px",
										}}
									/>
									<Input
										placeholder="Confirm Password *"
										variant="outlined"
										color="neutral"
										sx={{
											flex: 1,
											justifyContent: "center",
											alignItems: "center",
											"--Input-minHeight": "50px",

											"--Input-radius": "15px",
										}}
									/>
								</div>
								<div className=" flex items-center justify-center  w-full mt-3">
									<img src={PowerChart} alt="icon" />
								</div>
							</DialogContent>
							<DialogActions className=" w-1/4 mb-3  p-4">
								<Button
									variant="solid"
									color="primary"
									onClick={() => setOpen(false)}>
									Add User
								</Button>
								<Button
									variant="plain"
									color="neutral"
									onClick={() => setOpen(false)}>
									Cancel
								</Button>
							</DialogActions>
						</ModalDialog>
					</Modal>
				)}
			</Transition>
		</React.Fragment>
	);
};

export default AddUserDialog;
