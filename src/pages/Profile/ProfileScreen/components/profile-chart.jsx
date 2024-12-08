import {
	Card,
	CardBody,
	CardHeader,
	Select,
	Option,
	Typography,
} from "@material-tailwind/react";
import { Divider } from "@mui/material";
import React, { Component, useState } from "react";

import Chart from "react-apexcharts";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
	type: "area",
	height: 240,
	series: [
		{
			name: "Members",
			data: [0, 20000, 12000, 8000, 10000, 13500,  18000, 49000, 40000],
		},
	],
	options: {
		chart: {
			toolbar: {
				show: false,
			},
		},
		title: {
			show: "",
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#0E5FD9"],
		stroke: {
			lineCap: "round",
			curve: "smooth",
		},
		markers: {
			size: 0,
		},
		xaxis: {
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			labels: {
				style: {
					colors: "#616161",
					fontSize: "12px",
					fontFamily: "inherit",
					fontWeight: 400,
				},
			},
			categories: [
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
				"Jan",
			],
		},
		yaxis: {
			labels: {
				style: {
					colors: "#616161",
					fontSize: "12px",
					fontFamily: "inherit",
					fontWeight: 400,
				},
			},
		},
		grid: {
			show: true,
			borderColor: "#dddddd",
			strokeDashArray: 5,
			xaxis: {
				lines: {
					show: true,
				},
			},
			padding: {
				top: 5,
				right: 20,
			},
		},
		fill: {
			opacity: 0.8,
		},
		tooltip: {
			theme: "dark",
		},
	},
};

export default function ProfileChart() {
	const [value, setFilterValue] = useState("monthly");
	const handleValue = (val) => {
		setFilterValue(val);
	};
	return (
		<Card className="flex items-center  h-fit w-full">
			<CardHeader
				floated={false}
				shadow={false}
				className="w-full  m-0 overflow-visible">
				<div className="w-full ">
					<div className="flex flex-row items-center p-3 ">
						<span className="text-lg font-bold">Statistics</span>
						<div
							style={{
								position: "absolute",
								right: 10,
							}}
							className="filter-selector-statistics min-w-44">
							<Select
								className="max-w-44 max-h-9 rounded-md outline-none"
								size="md"
								onChange={(value) => handleValue(value)}
								value={value}>
								<Option
									className="m-0 p-1 outline-none hover:bg-blue-100"
									value="monthly">
									This month
								</Option>
								<Option
									className="m-0 p-1 outline-none hover:bg-blue-100"
									value="yearly">
									This Year
								</Option>
							</Select>
						</div>
					</div>
					<Divider />
				</div>
			</CardHeader>
			<CardBody className="px-2 mt-3 w-full  items-center ">
				<Chart {...chartConfig} />
			</CardBody>
		</Card>
	);
}
