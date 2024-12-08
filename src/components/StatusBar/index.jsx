import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import "./statusbar.css";

import SearchIcon from "../../assets/images/svg/search.svg";
import ArrowDownIcon from "../../assets/images/svg/arrow-down.svg";
import IndiaFlag from "../../assets/images/png/india-flag.png";
import UsaFlag from "../../assets/images/png/usa-flag.png";
import UserImage from "../../assets/images/png/user-image.png";
import UtilityIcon from "../../assets/images/svg/utilities.svg?react";
import NotificationIcon from "../../assets/images/svg/notification.svg";

import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
	Typography,
	IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import moment from "moment";
import { NotificationMenu } from "./components/NotificationMenu";
import UtilityDialog from "./components/UtilityDialog";

const menuItems = [
	{
		name: "English",
		image: UsaFlag,
	},
	{
		name: "Hindi",
		image: IndiaFlag,
	},
];

const notificationDetails = [
	{
		title: "This is success notification",
		time: moment("2024-12-09T01:14:00").toDate(),
		image:
			"https://images.vexels.com/media/users/3/157890/isolated/preview/4f2c005416b7f48b3d6d09c5c6763d87-check-mark-circle-icon.png?w=360",
	},
	{
		title: "Kevin mentioned you in Free Coffee",
		time: moment("2024-12-09T12:15:00").toDate(),
		image:
			"https://image.lexica.art/full_webp/d4d6152e-d2c6-4529-87f3-4ebd53fc2f59",
	},
	{
		title: "Fault",
		time: moment("2024-12-08T23:55:00").toDate(),
		image:
			"https://cdn-icons-png.freepik.com/256/11560/11560437.png?semt=ais_hybrid",
	},
	{
		title: "Jenny invited you in New Hiring",
		time: moment("2024-12-06T01:15:00").toDate(),
		image:
			"https://image.lexica.art/full_webp/e963fdeb-6d89-4f37-add3-fcdda37e58e0",
	},
	{
		title: "Your pricing plan is updated",
		time: moment("2024-12-04T01:15:00").toDate(),
		image:
			"https://www.kindpng.com/picc/m/160-1608792_circle-document-icon-png-transparent-png.png",
	},
];

const StatusBar = () => {
	const [language, selectLanguage] = useState(menuItems[0]);
	const [openLangMenu, setOpenLangMenu] = useState(false);
	const [openNotiMenu, setOpenNotiMenu] = useState(false);
	const [notiItems, setNotiItems] = useState(notificationDetails);
	const [openUtilityMenu, setOpenUtilityMenu] = useState(false);

	const context = useContext(MyContext);
	const handleClick = () => {
		if (context && context.setActiveTab) {
			context.setActiveTab(0); // Update activeTab to 0
		} else {
			console.error("Context or setActiveTab is undefined.");
		}
	};

	return (
		<>
			<div className="appStatusBar flex flex-row gap-3">
				<UtilityDialog open={openUtilityMenu} setOpen={setOpenUtilityMenu} />

				<div className="searchWrapper flex items-center p-2 gap-1">
					<span className=" w-[30px] h-[30px] flex items-center justify-center rounded-sm text-black">
						<img src={SearchIcon} alt="icon" />
					</span>
					<input className="searchBox" placeholder="Search" />
				</div>
				<div className="flex-grow"></div>
				<div className="selectLanguage flex items-center justify-center p-0 gap-1">
					<Menu open={openLangMenu} handler={setOpenLangMenu} allowHover>
						<MenuHandler>
							<Button
								variant="text"
								className="bg-slate-200/50 rounded-xl flex items-center gap-3 h-[40px] w-[150px] p-2">
								<span className="languageImage w-[30px] h-[30px] flex items-center justify-center rounded-xl">
									<img src={language.image} alt="icon" />
								</span>
								{language.name}
								<span
									className={`w-[25px] h-[25px] flex items-center justify-center ml-auto transition-transform ${
										openLangMenu ? "rotate-180" : ""
									}`}>
									<img src={ArrowDownIcon} alt="arrow down" />
								</span>
							</Button>
						</MenuHandler>
						<MenuList className="w-40 p-2">
							<ul className="menuItems flex flex-col gap-2 w-full">
								{menuItems.map(({ name, image }) => (
									<MenuItem
										className="bg-slate-200/50 flex justify-center items-center gap-3 px-4 py-2 w-full capitalize rounded-md hover:bg-slate-300"
										key={name}
										onClick={() => selectLanguage({ name, image })}>
										<span className="languageImage w-[25px] h-[20px] rounded-xl">
											<img src={image} alt="icon" />
										</span>
										<Typography variant="h6" color="blue-gray" className="">
											{name}
										</Typography>
									</MenuItem>
								))}
							</ul>
						</MenuList>
					</Menu>
				</div>

				<div className="utilityWrapper">
					<Button
						onClick={() => setOpenUtilityMenu(true)}
						className=" flex items-center rounded-xl bg-inherit">
						<UtilityIcon className="max-w-5 max-h-5" />
					</Button>
				</div>
				<div className="notificationWrapper">
					<Menu open={openNotiMenu} handler={setOpenNotiMenu}>
						<MenuHandler>
							<span className="w-[30px] h-[30px] flex items-center rounded-xl">
								<img src={NotificationIcon} alt="icon" />
							</span>
						</MenuHandler>
						<MenuList className="w-[20%] p-0 m-0">
							<ul className="menuItems flex flex-col gap-2 w-full h-fit p-0 mb-4">
								<li className="w-full p-2 m-0 flex flex-row items-center justify-center border-b-2 border-gray-200">
									<div className=" text-sm font-medium pl-2 text-black">
										Notification
									</div>
									<div className="flex-grow"></div>
									<Button
										ripple={false}
										onClick={() => setNotiItems(null)}
										variant="text"
										className=" text-xs text-end font-medium text-gray-500 bg-inherit max-w-fit px-2 py-0 m-0">
										Clear All
									</Button>
								</li>
								{notiItems === null ? (
									<div className="none-activity flex items-center justify-center h-40 p-3">
										<div className="flex text-start  text-gray-500 text-md font-normal m-0 ">
											No Notifications
										</div>
									</div>
								) : (
									<NotificationMenu notiItems={notiItems} />
								)}
							</ul>
						</MenuList>
					</Menu>
				</div>
				<Link to="/login">
					<div className="user-image-button p-0">
						<IconButton
							variant="gradient"
							onClick={handleClick}
							className="rounded-full h-[50px] w-[50px] flex justify-center items-center  bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10 "
							ripple={true}>
							<img src={UserImage} alt="icon" />
						</IconButton>
					</div>
				</Link>
			</div>
		</>
	);
};

export default StatusBar;
