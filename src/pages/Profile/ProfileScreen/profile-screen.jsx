import React, { useContext, useEffect } from "react";
import { MyContext } from "../../../App";

import PageTopbar from "../../../components/PageTopbar";
import {
	Avatar,
	Card,
	CardBody,
	CardHeader,
	Chip,
	Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ProfileChart from "./components/profile-chart";
import { Divider } from "@mui/material";
import FacebookIcon from "../../../../public/assets/images/svg/social_icons/ic-facebook.svg?react";
import LinkedInIcon from "../../../../public/assets/images/svg/social_icons/ic-linkedin.svg?react";
import TwitterIcon from "../../../../public/assets/images/svg/social_icons/ic-twitter.svg?react";
import InstagramIcon from "../../../../public/assets/images/svg/social_icons/ic-instagram.svg?react";
import moment from "moment";
import { ListItemDecorator } from "@mui/joy";
import GetUtils from "../../../utils/get-functions";

function EmailIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				opacity="0.2"
				d="M21.0005 5.25L12.0005 13.5L3.00049 5.25H21.0005Z"
				fill="#005CE8"
			/>
			<path
				d="M21 5.25L12 13.5L3 5.25"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.3633 12L3.23096 18.538"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.7687 18.5381L13.6362 12"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function PhoneIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				opacity="0.2"
				d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36437 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014Z"
				fill="#005CE8"
			/>
			<path
				d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36437 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.9453 3.75C16.2167 4.09194 17.376 4.76196 18.307 5.69294C19.238 6.62392 19.908 7.78319 20.2499 9.05462"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.1689 6.64844C14.9318 6.8536 15.6274 7.25561 16.186 7.8142C16.7445 8.37279 17.1466 9.06835 17.3517 9.83121"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function LocationIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				opacity="0.2"
				d="M12 2.25C10.0109 2.25 8.10323 3.04018 6.6967 4.4467C5.29018 5.85323 4.5 7.76088 4.5 9.75C4.5 16.5 12 21.75 12 21.75C12 21.75 19.5 16.5 19.5 9.75C19.5 7.76088 18.7098 5.85323 17.3033 4.4467C15.8968 3.04018 13.9891 2.25 12 2.25ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83994 11.9148 9.45542 11.4462 9.22836 10.8981C9.0013 10.3499 8.94189 9.74667 9.05764 9.16473C9.1734 8.58279 9.45912 8.04824 9.87868 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C15 10.5456 14.6839 11.3087 14.1213 11.8713C13.5587 12.4339 12.7956 12.75 12 12.75Z"
				fill="#005CE8"
			/>
			<path
				d="M5.25 21.75H18.75"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
				stroke="#005CE8"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

let labelItems = [
	{ name: "Project", value: "PR", extra: "project", colorCode: "#ff9904" },
	{ name: "To-do List", value: "TD", extra: "todo", colorCode: "#0c8c4e" },
	{
		name: "Personal To-do",
		value: "PTD",
		extra: "pTodo",
		colorCode: "#793200",
	},
	{
		name: "Office Work",
		value: "OW",
		extra: "officeWork",
		colorCode: "#00b5dd",
	},
	{ name: "Urgent", value: "U", extra: "urgent", colorCode: "#d50000" },
];

const activityList = [
	{
		id: 1,
		time: moment().toDate(),
		from: "Kevin Gilbert",
		team: "Design",
		image:
			"https://image.lexica.art/full_webp/f51c92fe-7bdf-4494-82c8-450f3a68e69b",
		events: [
			{
				start: moment("2024-12-05T09:00:00").toDate(),
				end: moment("2024-12-05T12:15:00").toDate(),
				data: {
					work: {
						id: 11,
						label: "U",
						title:
							"Meeting with UI/UX Team to manage our  upcoming projects & task.",
						location: "Store",
						card: "news",
						from: "Kevin Gilbert",
						desc: "In lobortis fermentum venenatis. Phasellus orci libero, feugiat et velit non, sagittis feugiat eros. In placerat risus vitae est faucibus, in laoreet enim rutrum. Mauris posuere vitae felis at convallis. Integer consequat et tellus vel tincidunt. Aenean rhoncus ligula eu risus molestie semper.",
						bookmarkUrl: "dribble.com",
						members: [
							{
								image:
									"https://image.lexica.art/full_webp/24c3e025-b4a1-439f-9516-0225904d5e41",
								name: "Mushfiq",
								email: "mushfiq@gmail.com",
							},
							{
								image:
									"https://image.lexica.art/full_webp/f842ee99-11d8-43a5-93fd-6bb7f0b49459 ",
								name: "Alex",
								email: "alex@gmail.com",
							},
							{
								image:
									"https://image.lexica.art/full_webp/8b533ec1-5469-491e-b50e-2be17d5b8087 ",
								name: "Alex",
								email: "alex@gmail.com",
							},
							{
								image:
									"https://image.lexica.art/full_webp/63ee4540-0837-45dd-ae07-4c9cf0e46afa ",
								name: "Alex",
								email: "alex@gmail.com",
							},
							{
								image:
									"https://image.lexica.art/full_webp/e04ddc4c-9128-4ee1-a511-9340bd3bf920 ",
								name: "Alex",
								email: "alex@gmail.com",
							},
							{
								image:
									"https://image.lexica.art/full_webp/19e6032b-93ec-4fbe-8e82-d265d28ba847 ",
								name: "Alex",
								email: "alex@gmail.com",
							},
						],
					},
				},
			},
			{
				start: moment("2024-11-15T12:00:00").toDate(),
				end: moment("2024-11-11T15:00:00").toDate(),
				data: {
					work: {
						id: 8,
						label: "TD",
						title: "More of this stuff",
						type: "event",
						column: "blog",
						location: "Home",
						desc: "Create 3d Illustration",
						bookmarkUrl: "dribble.com",

						comment: [
							"Something is fishy",
							"Somewhere there",
							"What are you doing",
							"I am not doing anything",
							"Something is fishy",
							"Somewhere there",
							"What are you doing",
							"I am not doing anything",
							"Something is fishy",
							"Somewhere there",
							"What are you doing",
							"I am not doing anything",
						],
						attachment: ["Something", "Somewhere", "Somehow"],
					},
				},
			},
		],
		tasks: [
			{
				start: moment("2024-11-11T20:00:00").toDate(),
				end: moment("2024-11-11T22:00:00").toDate(),
				data: {
					work: {
						id: 21,
						label: "U",
						type: "task",
						card: "done",
						title: "Clear files",
						location: "Office",
						from: "Kevin Gilbert",
						desc: "Clear the finance files",
						bookmarkUrl: "dribble.com",
						members: [
							{
								image:
									"https://image.lexica.art/full_webp/d3e7f630-e069-45d0-b2f4-854fb971a3de",
								name: "Mushfiq",
								email: "mushfiq@gmail.com",
							},
							{
								image:
									"https://image.lexica.art/full_webp/65cdf28e-e4db-4e72-a82c-cdf61d95a75b",
								name: "Work",
								email: "work@gmail.com",
							},
						],
					},
				},
			},
			{
				start: moment("2024-11-11T14:00:00").toDate(),
				end: moment("2024-11-11T16:00:00").toDate(),
				data: {
					work: {
						id: 3,
						label: "U",
						title: "Learn Adobe Illustrator",
						card: "news",
						type: "task",
						location: "Home",
						from: "Kevin Gilbert",
						desc: "Create 3d Illustration",
						bookmarkUrl: "dribble.com",
					},
				},
			},
		],
	},
	{
		id: 2,
		time: moment("2024-12-12T09:00:00").toDate(),
		from: "Kevin Gilbert",
		team: "Kanaban Board",
		image:
			"https://image.lexica.art/full_webp/f51c92fe-7bdf-4494-82c8-450f3a68e69b",
		cards: {
			cardImage:
				"https://image.lexica.art/full_webp/5e42cf2b-9307-49b1-ad7a-de2099feed0f",
			cardPriority: "High",
			cardTitle: "Finish this tasks asap!",
			cardDesc:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			data: {
				start: moment("2024-11-11T14:00:00").toDate(),
				end: moment("2024-11-11T16:00:00").toDate(),

				work: [
					{
						id: 31,
						title: "Learn Adobe Illustrator",
						priority: "High",
						card: "news",
						type: "task",
						location: "Home",
						from: "Kevin Gilbert",
						desc: "Create 3d Illustration",
						bookmarkUrl: "dribble.com",
						attachment: ["How is it"],
					},
					{
						id: 32,
						priority: "High",
						card: "done",
						title: "Clear files",
						location: "Office",
						from: "Kevin Gilbert",
						desc: "Clear the finance files",
						bookmarkUrl: "dribble.com",
						members: [{ name: "Mushfiq", email: "mushfiq@gmail.com" }],
					},

					{
						id: 33,
						title: "Do Something",
						priority: "High",
						card: "blog",
						location: "Home",
						from: "Kevin Gilbert",
						desc: "Create 3d Illustration",
						bookmarkUrl: "dribble.com",
						attachment: ["Something", "Somewhere", "Somehow", "But where"],
					},
				],
			},
		},
	},
];

export const ProfileScreen = () => {
	const context = useContext(MyContext);
	const items = [
		{ page: "Home", link: "/" },
		{ page: "Pages", link: "/" },
		{ page: "Profile", link: "/profile" },
	];

	const bottomItems = [
		{ name: "Documentation", link: "/" },
		{ name: "Privacy Policy", link: "/" },
		{ name: "FAQs", link: "/faq" },
	];

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveSubmenu(0);
	}, [context]);
	return (
		<>
			<div className="profile-view flex flex-col gap-2 ">
				<PageTopbar items={items} pageName="Profile" />
				<div className="profile-contents px-3 py-0 ">
					<div className="profile-images-container h-52 bg-white rounded-sm">
						<div className="banner-image w-full ">
							<img
								src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"
								className="w-full h-32 object-cover"
							/>
						</div>
						<div className="user-information flex flex-row gap-5 px-5">
							<div className="image-name flex flex-row gap-3">
								<div className="profile-image  max-w-32 relative top-[-3rem]">
									<Avatar
										src="https://docs.material-tailwind.com/img/face-2.jpg"
										withBorder={false}
										className=" rounded-full"
									/>
								</div>
								<div className="flex flex-col gap-1 items-start justify-center mb-10">
									<Typography className="flex text-center text-black text-lg font-bold m-0">
										Kevin Gilbert
									</Typography>
									<Typography className="flex text-center text-grey-400 text-sm font-normal m-0 md:text-sm">
										Electrical Engineer
									</Typography>
								</div>
							</div>
							<div className="flex flex-grow"></div>
							<div className="flex flex-col gap-1 items-center justify-center mb-10">
								<Typography className="flex text-center text-black text-sm font-bold m-0">
									$95,400
								</Typography>
								<Typography className="flex text-center text-grey-400 text-xs font-normal m-0 ">
									Total Balance
								</Typography>
							</div>
							<div className="flex flex-col gap-1 items-center justify-center mb-10">
								<Typography className="flex text-center text-black text-sm font-bold m-0">
									3,475
								</Typography>
								<Typography className="flex text-center text-grey-400 text-xs font-normal m-0 ">
									Board Card
								</Typography>
							</div>
							<div className="flex flex-col gap-1 items-center justify-center mb-10">
								<Typography className="flex text-center text-black text-sm font-bold m-0">
									63,467
								</Typography>
								<Typography className="flex text-center text-grey-400 text-xs font-normal m-0 ">
									Calendar Events
								</Typography>
							</div>
						</div>
					</div>
					<div className="h-4"></div>
					<div className="w-full h-fit flex flex-row  gap-3">
						<div className="w-1/4 h-fit flex flex-col gap-3">
							<div className="user-details h-fit flex flex-col ">
								<Card className="flex items-center  h-fit w-full">
									<CardHeader
										floated={false}
										shadow={false}
										className="w-full overflow-visible p-0 m-0">
										<div className="flex flex-col items-start justify-center">
											<span className="text-md font-medium px-3 py-2">
												Info
											</span>
											<Divider />
										</div>
									</CardHeader>
									<CardBody className="w-full p-3 flex flex-col gap-4">
										<div className="profile-info-item flex flex-row items-center justify-start gap-2">
											<EmailIcon />
											<div className="flex flex-col items-start justify-center">
												<Typography className="flex text-start text-gray-400 text-sm font-normal m-0">
													EMAIL
												</Typography>
												<Typography className="flex text-start text-black text-sm font-medium m-0 ">
													info@something.com
												</Typography>
											</div>
										</div>
										<div className="profile-info-item flex flex-row items-center justify-start gap-2">
											<PhoneIcon />
											<div className="flex flex-col items-start justify-center">
												<Typography className="flex text-start text-gray-400 text-sm font-normal m-0">
													PHONE
												</Typography>
												<Typography className="flex text-start text-black text-sm font-medium m-0 ">
													+1-202-555-5521
												</Typography>
											</div>
										</div>
										<div className="profile-info-item flex flex-row items-center justify-start gap-2">
											<LocationIcon />
											<div className="flex flex-col items-start justify-center">
												<Typography className="flex text-start text-gray-400 text-sm font-normal m-0">
													LOCATION
												</Typography>
												<Typography className="flex text-start text-black text-sm font-medium m-0 ">
													Home# 1024/N, Road# 17/A, Adabor, Dhaka-1207,
													Bangladesh
												</Typography>
											</div>
										</div>
									</CardBody>
								</Card>
							</div>
							<div className="user-bio h-fit flex flex-col ">
								<Card className="flex items-center  h-fit w-full">
									<CardHeader
										floated={false}
										shadow={false}
										className="w-full overflow-visible p-0 m-0">
										<div className="flex flex-col items-start justify-center">
											<span className="text-md font-medium px-3 py-2">
												Biography
											</span>
											<Divider />
										</div>
									</CardHeader>
									<CardBody className="w-full p-3 flex flex-col gap-4">
										<div className="flex flex-col items-start justify-center gap-1">
											<Typography className="flex text-start text-black text-sm font-medium m-0">
												About Me
											</Typography>
											<Typography className="flex text-start text-gray-500 text-sm font-normal m-0 ">
												Suspendisse iaculis tortor tortor, ac convallis quam
												dictum mattis. Integer leo ex, luctus eget ipsum sit
												amet, euismod hendrerit velit. Praesent eu vestibulum
												elit, in rutrum quam. Nulla maximus dolor enim, sed
												aliquet leo tincidunt sit amet. Sed ac est ac justo
												euismod efficitur porttitor vitae urna. Phasellus
												venenatis rutrum convallis. Curabitur efficitur lobortis
												ligula nec mollis. Vivamus a porttitor turpis.
											</Typography>
										</div>
										<div className="flex flex-col items-start justify-center gap-1">
											<div className="flex flex-row items-center w-full">
												<Typography className="flex text-start  text-gray-500 text-sm font-normal m-0 w-1/2">
													Full Name:
												</Typography>
												<Typography className="flex text-start text-black text-sm font-medium m-0">
													Kevin Gilbert
												</Typography>
											</div>
											<div className="flex flex-row items-center w-full">
												<Typography className="flex text-start  text-gray-500 text-sm font-normal m-0 w-1/2">
													Profession:
												</Typography>
												<Typography className="flex text-start text-black text-sm font-medium m-0">
													UI/UX Lead Designer
												</Typography>
											</div>
											<div className="flex flex-row items-center w-full">
												<Typography className="flex text-start  text-gray-500 text-sm font-normal m-0 w-1/2">
													Team:
												</Typography>
												<Typography className="flex text-start text-black text-sm font-medium m-0">
													Designer
												</Typography>
											</div>
											<div className="flex flex-row items-center w-full">
												<Typography className="flex text-start  text-gray-500 text-sm font-normal m-0 w-1/2">
													Date of Birth:
												</Typography>
												<Typography className="flex text-start text-black text-sm font-medium m-0">
													25 Nov, 1983
												</Typography>
											</div>
											<div className="flex flex-row items-center w-full">
												<Typography className="flex text-start  text-gray-500 text-sm font-normal m-0 w-1/2">
													Language:
												</Typography>
												<Typography className="flex text-start text-black text-sm font-medium m-0">
													English
												</Typography>
											</div>
											<div className="flex flex-row items-center w-full">
												<Typography className="flex text-start  text-gray-500 text-sm font-normal m-0 w-1/2">
													Country:
												</Typography>
												<Typography className="flex text-start text-black text-sm font-medium m-0">
													Dhaka, Bangladesh
												</Typography>
											</div>
										</div>
										<div className="flex flex-col items-start justify-center gap-2">
											<Typography className="flex text-start text-black text-sm font-medium m-0">
												Connect with me
											</Typography>
											<div className="social-links flex flex-row gap-3">
												<Link to="https://www.facebook.com">
													<div className="w-8 h-8 p-1 flex items-center justify-center rounded-full bg-blue-200">
														<FacebookIcon />
													</div>
												</Link>
												<Link to="https://www.linkedin.com">
													<div className="w-8 h-8 p-1 flex items-center justify-center rounded-full bg-blue-200">
														<LinkedInIcon />
													</div>
												</Link>
												<Link to="https://www.twitter.com">
													<div className="w-8 h-8 p-1 flex items-center justify-center rounded-full bg-blue-200">
														<TwitterIcon />
													</div>
												</Link>
												<Link to="https://www.instagram.com">
													<div className="w-8 h-8 p-1 flex items-center justify-center rounded-full bg-blue-200">
														<InstagramIcon />
													</div>
												</Link>
											</div>
										</div>
									</CardBody>
								</Card>
							</div>
						</div>
						<div className="w-3/4 h-fit flex flex-col gap-3">
							<div className="user-details h-fit flex flex-col ">
								<ProfileChart />
							</div>
							<div className="user-bio h-fit flex flex-col">
								<Card className="flex items-center rounded-md h-fit w-full">
									<CardHeader
										floated={false}
										shadow={false}
										className="w-full overflow-visible p-0 m-0">
										<div className="flex flex-col items-start justify-center">
											<span className="text-md font-medium px-3 py-2">
												Latest Activity
											</span>
											<Divider />
										</div>
									</CardHeader>
									<CardBody className="w-full p-3 flex flex-col gap-4">
										<div className="profile-activity-container">
											{activityList === null || activityList.length === 0 ? (
												<div className="none-activity flex items-center justify-center">
													<Typography className="flex text-start  text-gray-500 text-sm font-normal m-0 ">
														No Activity Found
													</Typography>
												</div>
											) : (
												activityList.map((e, index) => (
													<React.Fragment key={e.id}>
														<div className="activity-item flex flex-col py-2">
															{!e.cards ? (
																<EventActivityItem activity={e} />
															) : (
																<CardActivityItem activity={e} />
															)}
														</div>
														{/* Add ListDivider after every item except the last */}
														{index < activityList.length - 1 && (
															<hr className="my-2 border-2 border-gray-300" />
														)}
													</React.Fragment>
												))
											)}
										</div>
									</CardBody>
								</Card>
							</div>
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

function PersonIcon() {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10 12.5C12.7614 12.5 15 10.2614 15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 10.2614 7.23858 12.5 10 12.5Z"
				stroke="#4A5154"
				strokeWidth="1.25"
				strokeMiterlimit="10"
			/>
			<path
				d="M2.4209 16.8743C3.1893 15.5442 4.29419 14.4398 5.62456 13.672C6.95493 12.9042 8.46393 12.5 9.99997 12.5C11.536 12.5 13.045 12.9043 14.3754 13.6721C15.7057 14.44 16.8106 15.5444 17.579 16.8744"
				stroke="#4A5154"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ClockIcon() {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10.6252 5.8335C10.6252 5.48832 10.3453 5.2085 10.0002 5.2085C9.65498 5.2085 9.37516 5.48832 9.37516 5.8335V10.0002C9.37516 10.2157 9.48617 10.4159 9.66891 10.5302L12.1689 12.0927C12.4616 12.2756 12.8472 12.1866 13.0302 11.8939C13.2131 11.6012 13.1241 11.2156 12.8314 11.0327L10.6252 9.65376V5.8335Z"
				fill="#4A5154"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.0002 2.7085C5.97309 2.7085 2.7085 5.97309 2.7085 10.0002C2.7085 14.0272 5.97309 17.2918 10.0002 17.2918C14.0272 17.2918 17.2918 14.0272 17.2918 10.0002C17.2918 5.97309 14.0272 2.7085 10.0002 2.7085ZM3.9585 10.0002C3.9585 6.66344 6.66344 3.9585 10.0002 3.9585C13.3369 3.9585 16.0418 6.66344 16.0418 10.0002C16.0418 13.3369 13.3369 16.0418 10.0002 16.0418C6.66344 16.0418 3.9585 13.3369 3.9585 10.0002Z"
				fill="#4A5154"
			/>
		</svg>
	);
}

const EventActivityItem = ({ activity }) => {
	return (
		<div
			key={activity.id}
			className="activity-item activity-event flex flex-col gap-3">
			<div className="flex flex-row items-center justify-start gap-2">
				<div className="  max-w-12 max-h-12 ">
					<Avatar
						src={activity.image}
						withBorder={false}
						className=" rounded-full w-11 h-11 object-cover"
					/>
				</div>
				<div className="flex flex-col gap-1 items-start justify-center">
					<span className="flex flex-row gap-1 items-center justify-start">
						<Typography className="flex text-center text-black text-md font-normal m-0">
							{activity.from} created{" "}
							{activity.events.length + activity.tasks.length} new events in
						</Typography>
						<Typography className="flex text-center text-black text-md font-bold m-0">
							Calendar
						</Typography>
						<Typography className="flex text-center text-black text-md font-normal m-0">
							with
						</Typography>
						<Typography className="flex text-center text-black text-md font-bold m-0">
							Urgent
						</Typography>
						<Typography className="flex text-center text-black text-md font-normal m-0">
							Label
						</Typography>
					</span>

					<Typography className="flex text-center text-grey-400 text-sm font-normal m-0 ">
						{GetUtils.getRelativeTime(activity.time)}
					</Typography>
				</div>
			</div>

			<div className="all-events-container ">
				{activity.events != null &&
					activity.events.length > 0 &&
					activity.events.map((event) => {
						const { labelName, labelColor } = GetUtils.getLabelNameColor(
							labelItems,
							event.data.work.label
						);
						return (
							<Card
								key={event.id}
								style={{ backgroundColor: `${labelColor}2a` }}
								className={`flex items-center  h-fit w-full bg-[${labelColor}2a]`}>
								<CardHeader
									floated={false}
									shadow={false}
									color="transparent"
									className={`w-full overflow-visible p-0 m-0 `}>
									<div className="flex flex-row gap-1 items-center px-3 pt-3 justify-start">
										<div className="flex flex-row items-center justify-start gap-2">
											<ListItemDecorator>
												<div
													style={{
														backgroundColor: labelColor,
													}}
													className={`rounded-full min-h-2 min-w-2  `}></div>
											</ListItemDecorator>
											<Typography className="m-0 p-0 text-sm font-bold">
												{labelName}
											</Typography>
										</div>
									</div>
								</CardHeader>
								<CardBody className="w-full p-3 flex flex-col gap-3">
									<div className=" flex flex-row items-center justify-start gap-2">
										<Typography className="flex text-start text-black text-sm font-normal m-0">
											{event.data.work.title}
										</Typography>
									</div>
									<div className="flex flex-col items-start justify-center gap-1">
										<div className=" flex flex-row items-center justify-start gap-2">
											<PersonIcon />
											<Typography className="flex text-start text-black text-sm font-normal m-0">
												{event.data.work.from}
											</Typography>
										</div>
										<div className=" flex flex-row items-center justify-start gap-2">
											<ClockIcon />
											<Typography className="flex text-start text-black text-sm font-normal m-0">
												{GetUtils.getDateOfCalenderEvent(
													event.start,
													event.end
												)}
											</Typography>
										</div>
									</div>
									<div className="flex flex-row items-center justify-start -space-x-3">
										{event.data.work.members != null &&
											event.data.work.members.length > 0 &&
											event.data.work.members.map((member) => (
												<div
													key={member.email}
													className={`max-w-9 max-h-9  rounded-full outline-2 border-white  `}>
													<Avatar
														src={member.image}
														withBorder={true}
														color="white"
														className="w-8 h-8 object-center rounded-full"
													/>
												</div>
											))}
									</div>
								</CardBody>
							</Card>
						);
					})}
				{activity.tasks != null &&
					activity.tasks.length > 0 &&
					activity.tasks.map((task) => {
						const { labelName, labelColor } = GetUtils.getLabelNameColor(
							labelItems,
							task.data.work.label
						);
						return (
							<Card
								key={task.id}
								style={{ backgroundColor: `${labelColor}2a` }}
								className={`flex items-center  h-fit w-full bg-[${labelColor}2a]`}>
								<CardHeader
									floated={false}
									shadow={false}
									color="transparent"
									className={`w-full overflow-visible p-0 m-0 `}>
									<div className="flex flex-row gap-1 items-center px-3 pt-3 justify-start">
										<div className="flex flex-row items-center justify-start gap-2">
											<ListItemDecorator>
												<div
													style={{
														backgroundColor: labelColor,
													}}
													className={`rounded-full min-h-2 min-w-2  `}></div>
											</ListItemDecorator>
											<Typography className="m-0 p-0 text-sm font-bold">
												{labelName}
											</Typography>
										</div>
									</div>
								</CardHeader>
								<CardBody className="w-full p-3 flex flex-col gap-3">
									<div className=" flex flex-row items-center justify-start gap-2">
										<Typography className="flex text-start text-black text-sm font-normal m-0">
											{task.data.work.title}
										</Typography>
									</div>
									<div className="flex flex-col items-start justify-center gap-1">
										<div className=" flex flex-row items-center justify-start gap-2">
											<PersonIcon />
											<Typography className="flex text-start text-black text-sm font-normal m-0">
												{task.data.work.from}
											</Typography>
										</div>
										<div className=" flex flex-row items-center justify-start gap-2">
											<ClockIcon />
											<Typography className="flex text-start text-black text-sm font-normal m-0">
												{GetUtils.getDateOfCalenderEvent(task.start, task.end)}
											</Typography>
										</div>
									</div>
									<div className="flex flex-row items-center justify-start -space-x-3">
										{task.data.work.members != null &&
											task.data.work.members.length > 0 &&
											task.data.work.members.map((member) => (
												<div
													key={member.email}
													className={`max-w-9 max-h-9  rounded-full outline-2 border-white  `}>
													<Avatar
														src={member.image}
														withBorder={true}
														color="white"
														className="w-8 h-8 object-center rounded-full"
													/>
												</div>
											))}
									</div>
								</CardBody>
							</Card>
						);
					})}
			</div>
		</div>
	);
};

function getTotalTask(cardData) {
	const total = cardData.work.length;

	if (total > 9) {
		return "9+ Sub-task";
	} else {
		return `${total} Sub-task`;
	}
}

function getTotalAttachment(cardData) {
	const work = cardData.work;

	let total = 0;
	work.forEach((w) => {
		if (w.attachment != null && w.attachment.length > 0) {
			total += w.attachment.length;
		}
	});

	if (total > 9) {
		return "9+ Attach file";
	} else {
		return `${total} Attach file`;
	}
}

const CardActivityItem = ({ activity }) => {
	const { priority, pStyle } = GetUtils.getColorByPriority(
		activity.cards.cardPriority
	);

	return (
		<div
			key={activity.id}
			className="activity-item activity-card flex flex-col gap-3">
			<div className="flex flex-row items-center justify-start gap-2">
				<div className="  max-w-12 max-h-12 ">
					<Avatar
						src={activity.image}
						withBorder={false}
						className=" rounded-full w-11 h-11 object-cover"
					/>
				</div>
				<div className="flex flex-col gap-1 items-start justify-center">
					<span className="flex flex-row gap-1 items-center justify-start">
						<Typography className="flex text-center text-black text-md font-normal m-0">
							{activity.from} created a new card in
						</Typography>
						<Typography className="flex text-center text-black text-md font-bold m-0">
							{activity.team}
						</Typography>
						<Typography className="flex text-center text-black text-md font-normal m-0">
							with
						</Typography>
						<Typography className="flex text-center text-black text-md font-bold m-0">
							{priority}
						</Typography>
					</span>
					<span className="flex flex-row gap-1 items-center justify-start">
						<Typography className="flex text-center text-grey-400 text-sm font-normal m-0 ">
							{GetUtils.getRelativeTime(activity.time)}
						</Typography>
						•
						<Typography className="flex text-center text-grey-400 text-sm font-normal m-0 ">
							{getTotalTask(activity.cards.data)}
						</Typography>
						•
						<Typography className="flex text-center text-grey-400 text-sm font-normal m-0 ">
							{getTotalAttachment(activity.cards.data)}
						</Typography>
					</span>
				</div>
			</div>

			<div className="all-card-container rounded-[8px] border-2 ">
				{activity.cards != null && (
					<Card className={`flex items-center h-fit w-full p-0 m-0 `}>
						<CardBody className="w-full p-0 flex flex-row gap-3 m-0">
							<div className=" max-w-72 ">
								<img
									src={activity.cards.cardImage}
									className="min-w-72 h-full object-cover rounded-sm m-0 p-0"
								/>
							</div>
							<div className="flex flex-col items-start justify-center gap-3 p-3">
								<Chip value={priority} className={`${pStyle}`} />

								<Typography className="flex text-start text-black text-md font-normal m-0">
									{activity.cards.cardTitle}
								</Typography>
								<Typography className="flex text-start text-grey-500 text-sm font-normal m-0">
									{activity.cards.cardDesc}
								</Typography>
							</div>
						</CardBody>
					</Card>
				)}
			</div>
		</div>
	);
};
