import {
	Card,
	CardBody,
	CardHeader,
	Select,
	Option,
} from "@material-tailwind/react";
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
			data: [0, 100, 12000, 8000, 10000, 13500, 20000, 18000, 50000, 40000],
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

export default function ShowChart() {
	const [month, setMonth] = useState("monthly");
	const handleMonth = (val) => {
		setMonth(val);
	};
	return (
		<Card className="flex items-center justify-center h-96 w-full overflow-visible">
			<CardHeader className="w-full flex flex-row items-center justify-between px-5 rounded-none py-1.5 overflow-visible">
				Statistics
				<div className="flex flex-grow min-w-[80%]"></div>
				<Select
					className="max-w-36 max-h-9  rounded-md "
					onChange={(value) => handleMonth(value)}
					size="md"
					value={month}>
					<Option className="mt-1" value="monthly">
						This month
					</Option>
					<Option className="mt-1" value="yearly">
						This Year
					</Option>
				</Select>
			</CardHeader>
			<CardBody className="px-2 mt-3 w-full">
				<Chart {...chartConfig} />
			</CardBody>
		</Card>
	);
}
