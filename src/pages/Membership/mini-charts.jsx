import Chart from "react-apexcharts";
import { Card, CardBody } from "@material-tailwind/react";

const chartConfig = {
	type: "line",
	height: 80,
    
	series: [
		{
			name: "Members",
			data: [2000, 10000, 5000, 12000],
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
		colors: ["#FF8901"],
		stroke: {
			lineCap: "round",
			curve: "smooth",
		},
		markers: {
			size: 0,
		},
		xaxis: {
			show: false,
			labels: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			category: {
				show: false,
			},
			categories: ["Apr", "May", "Jun", "Jul"],
		},
		yaxis: {
			show: false,
			labels: {
				show: false,
			},
		},
		grid: {
			show: false,
		},
		fill: {
			opacity: 0.8,
		},
		tooltip: {
			theme: "dark",
		},
	},
};

export default function ShowMiniChart() {
	return <Chart {...chartConfig} />;
}
