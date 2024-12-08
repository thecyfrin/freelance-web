import {
	Avatar,
	Button,
	Menu,
	MenuHandler,
	MenuItem,
} from "@material-tailwind/react";
import { MenuList } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import NotificationIcon from "../../../../public/assets/images/svg/notification.svg";
import GetUtils from "../../../utils/get-functions";

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

export const NotificationMenu = ({ notiItems }) => {
	return (
		<React.Fragment>
			{notiItems.length > 0 &&
				notiItems.map(({ title, time, image }, index) => {
					const isLast = index === notiItems.length - 1;
					return (
						<MenuItem
							className={`h-fit  gap-3 p-3 w-full bg-inherit mt-3 ${
								isLast ? "mb-2 " : ""
							}`}
							key={title}>
							<div className=" flex flex-row items-center justify-start p-2 rounded-md hover:bg-slate-200 w-full gap-4">
								<Avatar
									src={image}
									alt={title}
									size="md"
									className="h-[30px] w-[30px] rounded-full "
								/>
								<div className="flex flex-col items-start justify-center gap-1">
									<div className="">{title}</div>
									<div className="">{GetUtils.getRelativeTime(time)}</div>
								</div>
							</div>
						</MenuItem>
					);
				})}
		</React.Fragment>
	);
};
