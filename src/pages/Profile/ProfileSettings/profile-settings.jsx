import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../App";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PasswordIcon from "@mui/icons-material/Password";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PageTopbar from "../../../components/PageTopbar";
import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardHeader,
	Typography,
	Checkbox,
	List,
	ListItem,
	ListItemPrefix,
} from "@material-tailwind/react";
import { ListDivider, Input, Option, Select } from "@mui/joy";

import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import DtePicker from "../../../utils/date-picker";
import ReactLanguageSelect from "react-languages-select";
import SvgIcons from "../../../utils/icon-functions";

function UploadIcon() {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.71875 6.40539L10 3.125L13.2812 6.40539"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 11.8751V3.12744"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.875 11.875V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V11.875"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const teams = [
	{ id: 1, name: "Designer" },
	{ id: 2, name: "Product" },
	{ id: 3, name: "Services" },
	{ id: 4, name: "Marketing" },
	{ id: 5, name: "Support" },
];

function renderTeam(team) {
	if (!team) {
		return null;
	}
	console.log(team.name);
	return <React.Fragment>{team.name}</React.Fragment>;
}

export const ProfileSettings = () => {
	const context = useContext(MyContext);
	const items = [
		{ page: "Home", link: "/" },
		{ page: "Pages", link: "/" },
		{ page: "Profile", link: "/profile" },
		{ page: "Account Setting", link: "/profile-settings" },
	];

	const bottomItems = [
		{ name: "Documentation", link: "/" },
		{ name: "Privacy Policy", link: "/" },
		{ name: "FAQs", link: "/faq" },
	];
	const [selectedTeam, setTeam] = useState(teams[0]);
	const [selectedCountry, setCountry] = useState("");
	const [selectedRegion, setRegion] = useState("");
	const [selectedDate, changeSelectedDate] = useState(null);

	const [file, setFile] = useState();
	const [bannerFile, setBannerFile] = useState();
	function handleChange(e) {
		const input = e.target;
		const file = input.files[0];

		if (!file) {
			alert("No file selected.");
			return false;
		}

		const fileName = file.name.toLowerCase();

		if (
			!fileName.endsWith(".png") &&
			!fileName.endsWith(".jpg") &&
			!fileName.endsWith(".jpeg")
		) {
			alert("You can upload PNG, JPG, JPEG files only.");
			return false;
		}
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	function handleBannerChange(e) {
		const input = e.target;
		const file = input.files[0];

		if (!file) {
			alert("No file selected.");
			return false;
		}

		const fileName = file.name.toLowerCase();

		if (
			!fileName.endsWith(".png") &&
			!fileName.endsWith(".jpg") &&
			!fileName.endsWith(".jpeg")
		) {
			alert("You can upload PNG, JPG, JPEG files only.");
			return false;
		}
		setBannerFile(URL.createObjectURL(e.target.files[0]));
	}

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleMouseUpPassword = (event) => {
		event.preventDefault();
	};

	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const [showNewPassword, setShowNewPassword] = useState(false);
	const handleClickNewPassword = () => setShowNewPassword((show) => !show);

	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const handleClickShowConfirmPassword = () =>
		setShowConfirmPassword((show) => !show);

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(6);
		context.setActiveSubmenu(1);
	}, [context]);
	return (
		<>
			<div className="profile-view flex flex-col gap-2 ">
				<PageTopbar items={items} pageName="Account Setting" />
				<div className="profile-settings-contents px-3 py-0 ">
					<div className="setting-top-img-info flex flex-row items-center justify-start gap-3">
						<div className="setting-profile-pic      flex flex-col flex-1">
							<Card
								shadow={true}
								className="flex items-center justify-center rounded-md h-[21rem] w-full bg-slate-50">
								<CardBody className="w-full p-3 flex flex-col items-center justify-center gap-4">
									<div className="profile-image  max-w-32 flex items-center justify-center">
										<Avatar
											src={
												file != null
													? file
													: "https://image.lexica.art/full_webp/53a964cf-80dd-4cf5-85d2-2ffc9bf52220"
											}
											withBorder={false}
											className="h-32 w-32 object-center rounded-full"
										/>
									</div>
									<div className="image-input-wrapper w-full">
										<Button className="flex flex-row justify-center items-center gap-2 bg-transparent text-[#005CE8f2] border-2 border-[#005CE8f2] text-sm rounded-3xl">
											<UploadIcon />
											Upload Profile Photo
										</Button>
										<input
											className="profile-image-input"
											type="file"
											onChange={handleChange}
										/>
									</div>

									<Typography className="   text-[0.85rem] font-normal m-0">
										<span className="font-bold mr-1">Remember:</span>
										<span className="text-gray-500">
											For best results, use an image at least 200px by 200px in
											.jpg or .png format
										</span>
									</Typography>
								</CardBody>
							</Card>
						</div>
						<div className="settings-banner h-fit flex flex-col flex-1 ">
							<Card
								shadow={true}
								className="flex items-center rounded-md h-[21rem] w-full  bg-slate-50">
								<CardHeader
									floated={false}
									shadow={false}
									className="w-full overflow-visible p-0 m-0">
									<img
										src={
											bannerFile != null
												? bannerFile
												: "https://image.lexica.art/full_webp/1f787df0-3aa6-4169-b615-0007245d8633"
										}
										className="h-32 w-full rounded-tl-md rounded-tr-md object-cover "
									/>
								</CardHeader>
								<CardBody className="w-full p-3 flex flex-col items-center justify-center gap-2">
									<div className="image-input-wrapper w-full ">
										<Button className="flex flex-row justify-center items-center gap-2 bg-transparent text-[#005CE8f2] border-2 border-[#005CE8f2] text-sm rounded-3xl">
											<UploadIcon />
											Upload Banner Image
										</Button>
										<input
											className="profile-image-input"
											type="file"
											onChange={handleBannerChange}
										/>
									</div>
									<div className="image-input-wrapper w-full ">
										<Button
											onClick={() => setBannerFile(null)}
											className="flex flex-row justify-center items-center bg-red-100/50 gap-2 text-red-500/70 text-sm rounded-3xl">
											Remove Banner
										</Button>
									</div>
									<div className="h-2"></div>
									<Typography className="   text-[0.85rem] font-normal m-0">
										<span className="font-bold mr-1">Remember:</span>
										<span className="text-gray-500">
											For best results, use an image at least 200px by 200px in
											.jpg or .png format
										</span>
									</Typography>
								</CardBody>
							</Card>
						</div>
						<div className="settings-basic-info h-fit flex flex-col flex-[2]">
							<Card
								shadow={true}
								className="flex items-center h-[21rem]  w-full ">
								<CardHeader
									floated={false}
									shadow={false}
									className="w-full overflow-visible p-0 m-0">
									<div className="flex flex-col items-start justify-center">
										<span className="text-md font-medium px-3 py-2">
											Basic Info
										</span>
										<Divider />
									</div>
								</CardHeader>
								<CardBody className="w-full px-3 py-2 flex flex-col gap-2">
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">Name</span>
										<Input
											placeholder="Full name"
											variant="outlined"
											color="neutral"
											sx={{
												justifyContent: "center",
												alignItems: "center",
												"--Input-minHeight": "44px",

												"--Input-radius": "5px",
											}}
										/>
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
												"--Input-minHeight": "6rem",

												"--Input-radius": "5px",
											}}
										/>
									</div>
									<span className="h-2"></span>
									<Button className="flex max-w-[25%]  gap-2 bg-[#005CE8f2] text-white text-sm rounded-3xl">
										Save Changes
									</Button>
								</CardBody>
							</Card>
						</div>
					</div>
					<div className="h-3"></div>
					<div className="setting-center-personal-info ">
						<div className="settings-private-info settings-center-divs w-[33%] h-fit flex flex-col ">
							<Card
								shadow={true}
								className="flex items-center justify-center h-[28rem] ">
								<CardHeader
									floated={false}
									shadow={false}
									className="w-full overflow-visible p-0 m-0">
									<div className="flex flex-col items-start justify-center">
										<span className="text-md font-medium px-3 py-2">
											Private Info
										</span>
										<Divider />
									</div>
								</CardHeader>
								<CardBody className="w-full px-3 py-2 flex flex-col gap-2">
									<div className="  gap-1 flex flex-col flex-1">
										<span className="font-medium text-gray-400">Team</span>
										<Select
											value={selectedTeam?.id.toString()}
											onChange={(event, newValue) => {
												const selected = teams.find(
													(team) => team.id.toString() === newValue
												);
												console.log(newValue);
												console.log(selected);
												setTeam(selected); // Update state correctly
											}}
											className="flex justify-start items-start "
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
											renderValue={() => renderTeam(selectedTeam)}
											sx={{
												flex: 1,
												"--ListItemDecorator-size": "44px",
												borderRadius: 5,
											}}>
											{teams != null &&
												teams.length > 0 &&
												teams.map((team, index) => (
													<React.Fragment key={team.id}>
														{index !== 0 ? (
															<ListDivider role="none" inset="gutter" />
														) : null}
														<Option value={team.id.toString()}>
															<div className="flex flex-row items-center justify-start bg-inherit hover:bg-blue-50">
																<div className="w-5"></div>
																{team.name}
															</div>
														</Option>
													</React.Fragment>
												))}
										</Select>
									</div>
									<div className="flex flex-row w-full gap-2 items-center justify-center">
										<div className="w-1/2  gap-1 flex flex-col flex-1">
											<span className="font-medium text-gray-400">Country</span>
											<CountryDropdown
												value={selectedCountry}
												onChange={(val) => setCountry(val)}
												className="min-h-[40px] bg-blue-50/50 px-3"
											/>
										</div>
										<div className=" w-1/2 gap-1 flex flex-col flex-1">
											<span className="font-medium text-gray-400">City</span>
											<RegionDropdown
												defaultOptionLabel="Select City"
												country={selectedCountry}
												value={selectedRegion}
												onChange={(val) => setRegion(val)}
												className="min-h-[40px] bg-blue-50/50 px-3"
											/>
										</div>
									</div>
									<div className="  gap-1 flex flex-col flex-1">
										<span className="font-medium text-gray-400">
											Date of Birth
										</span>
										<div className="">
											<DtePicker onDateChange={changeSelectedDate} />
										</div>
									</div>
									<div className="language-selector  gap-1 flex flex-col flex-1">
										<span className="font-medium text-gray-400">Language</span>
										<div className=" bg-white">
											<ReactLanguageSelect
												names={"international"}
												placeholder="Select Language"
												alignOptions="center"
											/>
										</div>
									</div>

									<span className="h-2"></span>
									<Button className="flex max-w-[40%] mb-2  gap-2 bg-[#005CE8f2] text-white text-sm rounded-3xl">
										Save Changes
									</Button>
								</CardBody>
							</Card>
						</div>
						<div className="settings-social-info settings-center-divs w-[33%] h-fit flex flex-col ">
							<Card
								shadow={true}
								className="flex items-center justify-center h-[28rem] ">
								<CardHeader
									floated={false}
									shadow={false}
									className="w-full overflow-visible p-0 m-0">
									<div className="flex flex-col items-start justify-center">
										<span className="text-md font-medium px-3 py-2">
											Social Account
										</span>
										<Divider />
									</div>
								</CardHeader>
								<CardBody className="w-full px-3 py-2 flex flex-col gap-2">
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">Facebook</span>
										<Input
											placeholder="Facebook profile url"
											variant="outlined"
											color="neutral"
											sx={{
												justifyContent: "center",
												alignItems: "center",
												"--Input-minHeight": "44px",

												"--Input-radius": "5px",
											}}
										/>
									</div>
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">Twitter</span>
										<Input
											placeholder="Twitter profile url"
											variant="outlined"
											color="neutral"
											sx={{
												justifyContent: "center",
												alignItems: "center",
												"--Input-minHeight": "44px",

												"--Input-radius": "5px",
											}}
										/>
									</div>
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">LinkedIn</span>
										<Input
											placeholder="LinkedIn profile url"
											variant="outlined"
											color="neutral"
											sx={{
												justifyContent: "center",
												alignItems: "center",
												"--Input-minHeight": "44px",

												"--Input-radius": "5px",
											}}
										/>
									</div>
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">Instagram</span>
										<Input
											placeholder="Instagram profile url"
											variant="outlined"
											color="neutral"
											sx={{
												justifyContent: "center",
												alignItems: "center",
												"--Input-minHeight": "44px",

												"--Input-radius": "5px",
											}}
										/>
									</div>

									<span className="h-2"></span>
									<Button className="flex max-w-[40%] mb-2  gap-2 bg-[#005CE8f2] text-white text-sm rounded-3xl">
										Save Changes
									</Button>
								</CardBody>
							</Card>
						</div>
						<div className="settings-contact-info settings-center-divs w-[33%] h-fit flex flex-col ">
							<Card
								shadow={true}
								className="flex items-center justify-center h-[28rem] ">
								<CardHeader
									floated={false}
									shadow={false}
									className="w-full overflow-visible p-0 m-0">
									<div className="flex flex-col items-start justify-center">
										<span className="text-md font-medium px-3 py-2">
											Contact Info
										</span>
										<Divider />
									</div>
								</CardHeader>
								<CardBody className="w-full px-3 py-2 flex flex-col gap-2">
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">Phone</span>
										<Input
											placeholder="Phone Number"
											variant="outlined"
											color="neutral"
											startDecorator={<SvgIcons.PhoneIcon />}
											sx={{
												justifyContent: "center",
												alignItems: "center",
												"--Input-minHeight": "44px",

												"--Input-radius": "5px",
											}}
										/>
									</div>
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">Email</span>
										<Input
											placeholder="Email Address"
											variant="outlined"
											color="neutral"
											startDecorator={<SvgIcons.EmailIcon />}
											sx={{
												justifyContent: "center",
												alignItems: "center",
												"--Input-minHeight": "44px",

												"--Input-radius": "5px",
											}}
										/>
									</div>
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">Address</span>
										<Input
											placeholder="Current Location"
											variant="outlined"
											color="neutral"
											startDecorator={<SvgIcons.LocationIcon />}
											sx={{
												justifyContent: "center",
												alignItems: "center",
												"--Input-minHeight": "44px",

												"--Input-radius": "5px",
											}}
										/>
									</div>
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">Portfolio</span>
										<Input
											placeholder="Personal Portfolio Url"
											variant="outlined"
											color="neutral"
											startDecorator={<SvgIcons.BusinessBagIcon />}
											sx={{
												justifyContent: "center",
												alignItems: "center",
												"--Input-minHeight": "44px",

												"--Input-radius": "5px",
											}}
										/>
									</div>

									<span className="h-2"></span>
									<Button className="flex max-w-[40%] mb-2  gap-2 bg-[#005CE8f2] text-white text-sm rounded-3xl">
										Save Changes
									</Button>
								</CardBody>
							</Card>
						</div>
					</div>
					<div className="h-3"></div>
					<div className="setting-bottom-advanced-info ">
						<div className="settings-change-password settings-bottom-divs w-[33%] max-h-[40%] flex flex-col ">
							<Card
								shadow={true}
								className="flex items-center justify-start h-full ">
								<CardHeader
									floated={false}
									shadow={false}
									className="w-full overflow-visible p-0 m-0">
									<div className="flex flex-col items-start justify-center">
										<span className="text-md font-medium px-3 py-2">
											Change Password
										</span>
										<Divider />
									</div>
								</CardHeader>
								<CardBody className="w-full h-full px-3 py-2 flex flex-col items-start justify-evenly gap-2">
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">
											Current Password
										</span>
										<FormControl variant="outlined">
											<OutlinedInput
												id="outlined-adornment-password"
												type={showPassword ? "text" : "password"}
												endAdornment={
													<InputAdornment position="end">
														<IconButton
															aria-label={
																showPassword
																	? "hide the password"
																	: "display the password"
															}
															onClick={handleClickShowPassword}
															onMouseDown={handleMouseDownPassword}
															onMouseUp={handleMouseUpPassword}
															edge="end"
															className="bg-white max-w-8">
															{showPassword ? (
																<PasswordIcon />
															) : (
																<LockOpenIcon />
															)}
														</IconButton>
													</InputAdornment>
												}
												placeholder="Password"
											/>
										</FormControl>
									</div>
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">
											New Password
										</span>
										<FormControl variant="outlined">
											<OutlinedInput
												id="outlined-adornment-password"
												type={showNewPassword ? "text" : "password"}
												endAdornment={
													<InputAdornment position="end">
														<IconButton
															aria-label={
																showNewPassword
																	? "hide the password"
																	: "display the password"
															}
															onClick={handleClickNewPassword}
															onMouseDown={handleMouseDownPassword}
															onMouseUp={handleMouseUpPassword}
															edge="end"
															className="bg-white max-w-8">
															{showNewPassword ? (
																<PasswordIcon />
															) : (
																<LockOpenIcon />
															)}
														</IconButton>
													</InputAdornment>
												}
												placeholder="Password"
											/>
										</FormControl>
									</div>
									<div className=" w-full gap-1 flex flex-col">
										<span className="font-medium text-gray-400">
											Confirm Password
										</span>
										<FormControl variant="outlined">
											<OutlinedInput
												id="outlined-adornment-password"
												type={showConfirmPassword ? "text" : "password"}
												endAdornment={
													<InputAdornment position="end">
														<IconButton
															aria-label={
																showConfirmPassword
																	? "hide the password"
																	: "display the password"
															}
															onClick={handleClickShowConfirmPassword}
															onMouseDown={handleMouseDownPassword}
															onMouseUp={handleMouseUpPassword}
															edge="end"
															className="bg-white max-w-8">
															{showConfirmPassword ? (
																<PasswordIcon />
															) : (
																<LockOpenIcon />
															)}
														</IconButton>
													</InputAdornment>
												}
												placeholder="Password"
											/>
										</FormControl>
									</div>

									<span className="h-2"></span>
									<Button className="flex max-w-[40%] mb-2  gap-2 bg-[#005CE8f2] text-white text-sm rounded-3xl">
										Save Changes
									</Button>
								</CardBody>
							</Card>
						</div>
						<div className="settings-advance-settings settings-bottom-divs w-[27%] max-h-[40%] flex flex-col ">
							<Card
								shadow={true}
								className="flex items-center justify-center h-full ">
								<CardHeader
									floated={false}
									shadow={false}
									className="w-full overflow-visible p-0 m-0">
									<div className="flex flex-col items-start justify-center">
										<span className="text-md font-medium px-3 py-2">
											Advance Setting
										</span>
										<Divider />
									</div>
								</CardHeader>
								<CardBody className="w-full px-3 py-2 flex flex-col gap-2">
									<List className="flex flex-col items-center p-0 justify-start">
										<ListItem className="settings-list-items p-0 m-0 gap-0  max-h-[44px]">
											<label
												htmlFor="total-balance"
												className="flex w-full cursor-pointer items-center ">
												<ListItemPrefix className="flex items-center max-h-[40px] w-[50px]">
													<Checkbox
														id="total-balance"
														// checked={showTask}
														ripple={false}
														className="hover:before:opacity-0"
														// onChange={() => {
														// 	handleCBtask(!showTask);
														// }}
													/>
												</ListItemPrefix>
												<span className="font-medium text-gray-900">
													Show my balance
												</span>
											</label>
										</ListItem>

										<ListItem className="settings-list-items p-0 m-0 gap-0 max-h-[44px]">
											<label
												htmlFor="total-board-card"
												className="flex w-full cursor-pointer items-center ">
												<ListItemPrefix className="flex items-center max-h-[40px] w-[50px]">
													<Checkbox
														id="total-board-card"
														// checked={showTask}
														ripple={false}
														className="hover:before:opacity-0"
														// onChange={() => {
														// 	handleCBtask(!showTask);
														// }}
													/>
												</ListItemPrefix>
												<span className="font-medium text-gray-900">
													Show total Kanban Board card
												</span>
											</label>
										</ListItem>
										<ListItem className="settings-list-items p-0 m-0 gap-0 max-h-[44px]">
											<label
												htmlFor="total-calendar-task"
												className="flex w-full cursor-pointer items-center ">
												<ListItemPrefix className="flex items-center max-h-[40px] w-[50px]">
													<Checkbox
														id="total-calendar-task"
														// checked={showTask}
														ripple={false}
														className="hover:before:opacity-0"
														// onChange={() => {
														// 	handleCBtask(!showTask);
														// }}
													/>
												</ListItemPrefix>
												<span className="font-medium text-gray-900">
													Show total Calendar task
												</span>
											</label>
										</ListItem>
										<ListItem className="settings-list-items p-0 m-0 gap-0 max-h-[44px]">
											<label
												htmlFor="total-calendar-event"
												className="flex w-full cursor-pointer items-center ">
												<ListItemPrefix className="flex items-center max-h-[40px] w-[50px]">
													<Checkbox
														id="total-calendar-event"
														// checked={showTask}
														ripple={false}
														className="hover:before:opacity-0"
														// onChange={() => {
														// 	handleCBtask(!showTask);
														// }}
													/>
												</ListItemPrefix>
												<span className="font-medium text-gray-900">
													Show total Calendar events
												</span>
											</label>
										</ListItem>
										<ListDivider />
										<ListItem className="settings-list-items p-0 m-0 gap-0 max-h-[44px]">
											<label
												htmlFor="private-info"
												className="flex w-full cursor-pointer items-center ">
												<ListItemPrefix className="flex items-center max-h-[40px] w-[50px]">
													<Checkbox
														id="private-info"
														// checked={showTask}
														ripple={false}
														className="hover:before:opacity-0"
														// onChange={() => {
														// 	handleCBtask(!showTask);
														// }}
													/>
												</ListItemPrefix>
												<span className="font-medium text-gray-900">
													Show private information
												</span>
											</label>
										</ListItem>
										<ListItem className="settings-list-items p-0 m-0 gap-0 max-h-[44px]">
											<label
												htmlFor="contact-info"
												className="flex w-full cursor-pointer items-center ">
												<ListItemPrefix className="flex items-center max-h-[40px] w-[50px]">
													<Checkbox
														id="contact-info"
														// checked={showTask}
														ripple={false}
														className="hover:before:opacity-0"
														// onChange={() => {
														// 	handleCBtask(!showTask);
														// }}
													/>
												</ListItemPrefix>
												<span className="font-medium text-gray-900">
													Contact Information
												</span>
											</label>
										</ListItem>
										<ListItem className="settings-list-items p-0 m-0 gap-0 max-h-[44px]">
											<label
												htmlFor="social-media"
												className="flex w-full cursor-pointer items-center ">
												<ListItemPrefix className="flex items-center max-h-[40px] w-[50px]">
													<Checkbox
														id="social-media"
														// checked={showTask}
														ripple={false}
														className="hover:before:opacity-0"
														// onChange={() => {
														// 	handleCBtask(!showTask);
														// }}
													/>
												</ListItemPrefix>
												<span className="font-medium text-gray-900">
													Social media link
												</span>
											</label>
										</ListItem>
									</List>

									<span className="h-2"></span>
									<Button className="flex max-w-[50%] mb-2  gap-2 bg-[#005CE8f2] text-white text-sm rounded-3xl">
										Save Changes
									</Button>
								</CardBody>
							</Card>
						</div>
						<div className="settings-subscription settings-bottom-divs w-[40%] max-h-[40%] flex flex-col ">
							<Card
								shadow={true}
								className="flex items-center justify-start h-full ">
								<CardBody className="w-full h-full  py-2 flex flex-col items-start justify-evenly gap-2">
									<div className="flex flex-col gap-2 px-4 py-3 items-start justify-center">
										<Typography
											variant="h6"
											color="blue-gray"
											className="font-medium text-sm">
											Pricing Plans
										</Typography>

										<Typography
											variant="h4"
											color="blue-gray"
											className=" text-blue-500 flex flex-row gap-2">
											<div>{String.fromCodePoint(0x1f680)} </div> Premium
										</Typography>

										<Typography className="text-gray-400 text-xs font-regular">
											Transfer this account to another user or to an
											organization where you have the ability to create
											repositories.
										</Typography>

										<Button className="flex max-w-[35%] mb-2  gap-2 bg-[#005CE8f2] text-white text-sm rounded-3xl">
											Upgrade Plan
										</Button>
									</div>
									<Divider />

									<div className="flex flex-col gap-2 px-4 py-3 items-start justify-center">
										<Typography
											variant="h6"
											color="blue-gray"
											className="font-medium text-sm">
											Deactivate this account
										</Typography>

										<Typography className="text-gray-400 text-xs font-regular">
											Once you delete a account, there is no going back. Please
											be certain.
										</Typography>

										<Button className="flex max-w-[60%] mb-2  gap-2 bg-[#005CE8f2] text-white text-sm bg-red-100/50 rounded-full text-red-500/70">
											Deactivate Account
										</Button>
									</div>
								</CardBody>
							</Card>
						</div>
					</div>
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
		</>
	);
};

{
	/* <div className=" w-full gap-1 flex flex-col">
	<span className="font-medium text-gray-400">Team</span>
	<Select
		value={selectedPriority?.code}
		onChange={(event, newValue) => {
			const selected = priorityList.find((a) => priority.code === newValue);
			console.log(newValue);
			console.log(selected);
			setPriority(selected); // Update state correctly
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
			priorityList.length > 0 &&
			priorityList.map((a, index) => (
				<React.Fragment key={priority.code}>
					{index !== 0 ? (
						<ListDivider role="none" inset="startContent" />
					) : null}
					<Option value={priority.code}>
						<div className="bg-inherit hover:bg-blue-50">{team.name}</div>
					</Option>
				</React.Fragment>
			))}
	</Select>
</div> */
}
