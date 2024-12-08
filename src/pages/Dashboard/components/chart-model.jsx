import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChartSingle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: {
				colors: [this.props.color],
				annotations: {
					points: [
						{
							x: this.props.categories[7], // Ensure this x value corresponds to a category
							y: this.props.series[0].data[7],
							marker: {
								size: 5,
								fillColor: "#fff",
								strokeColor: this.props.color,
								strokeWidth: 3,
								radius: 1,
							},
							label: {
								borderColor: this.props.color,
								offsetY: 0,
								style: {
									color: "#fff",
									background: this.props.color,
								},
							},
						},
					],
				},
				title: {
					enabled: false,
					text: this.props?.title,
					align: "right",
					offsetX: 0,
					offsetY: 3,
					floating: true,
					style: {
						fontSize: "14px",
						fontWeight: "bold",
						fontFamily: undefined,
						color: this.props.color,
					},
				},
				chart: {
					dropShadow: {
						enabled: true,
						opacity: 0.25,
						blur: 4,
					},
					toolbar: {
						show: false,
					},
					sparkline: {
						enabled: true,
					},
					id: "dashboard-mini-chart",
				},
				stroke: {
					curve: "smooth",
					lineCap: "round",
				},
				xaxis: {
					type: "numeric",
					categories: this.props.categories,
					axisTicks: {
						show: false,
					},
					axisBorder: {
						show: false,
					},
				},
			},
			series: this.props.series,
		};
	}

	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				type="line"
				height={144}
			/>
		);
	}
}

class BarChart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: {
				colors: ["#FF8901"],
				chart: {
					width: "100%",
					dropShadow: {
						enabled: true,
						opacity: 0.25,
						blur: 4,
					},
					toolbar: {
						show: false,
					},

					id: "dashboard-bar-chart",
				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: "15%",
						borderRadius: 3,
					},
				},
				dataLabels: {
					enabled: false,
					style: {
						colors: ["#000"],
					},
				},
				xaxis: {
					categories: [20, 22, 24, 26, 28, 30, 2, 4, 6],
				},
			},
			series: [
				{
					name: "series-1",
					data: [
						{
							x: "Category A",
							y: 3800,
						},
						{
							x: "Category A",
							y: 6653,
						},
						{
							x: "Category A",
							y: 5000,
						},
						{
							x: "Category A",
							y: 5625,
						},
						{
							x: "Category A",
							y: 4000,
						},
						{
							x: "Category B",
							y: 8133,
							fillColor: "#FF392B",
							strokeColor: "#C23829",
						},
						{
							x: "Category C",
							y: 3500,
						},
						{
							x: "Category C",
							y: 4800,
						},
						{
							x: "Category C",
							y: 4200,
						},
					],
				},
			],
		};
	}
	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				type="bar"
			/>
		);
	}
}

class RadialChart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: {
				chart: {
					height: 300,
				},

				colors: ["#20E647"],
				plotOptions: {
					radialBar: {
						hollow: {
							margin: 20,
							size: "50%",
							background: "#ffffff",
							dropShadow: {
								enabled: true,
								blur: 10,
								opacity: 0.4,
							},
						},
						track: {
							background: "transparent",
							margin: 20,
							dropShadow: {
								enabled: true,
								top: 2,
								blur: 4,
								opacity: 0.15,
							},
						},
						dataLabels: {
							name: {
								show: false,
							},
							value: {
								color: "#000",
								offsetY: 10,
								fontSize: "1.5rem",
								fontWeight: "bold",
								show: true,
							},
						},
					},
				},
				fill: {
					colors: ["#fff", "#623CEA"],
					type: "gradient",
					gradient: {
						shade: "dark",
						type: "vertical",
						gradientToColors: ["#623CEA"],
						stops: [0, 100, 100],
					},
				},
				stroke: {
					lineCap: "round",
				},
			},
			series: [68],
		};
	}
	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				type="radialBar"
			/>
		);
	}
}

class PieChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: props.colors,

			options: {
				fill: {
					colors: props.colors,
				},
				chart: {
					id: "apexchart-example",
					donutPoint: (event, chartContext, config) => {
						// this will print mango, apple etc. when clicked on respective datapoint
						console.log(config.w.config.labels[config.dataPointIndex]);
					},
				},
				legend: {
					show: false,
					floating: false,
					customLegendItems: [
						"Customer",
						"Electric",
						"Free Coffee",
						"Promotions",
					],
				},
				plotOptions: {
					pie: {
						donut: {
							labels: {
								show: true,
								name: {
									show: true,
									fontFamily: "Public Sans, sans-serif",
									fontWeight: 200,
								},
								value: {
									show: true,
									fontFamily: "Public Sans, sans-serif",
									fontWeight: 700,
									formatter: function (w) {
										return `$${w}`;
									},
								},
								total: {
									show: true,
									label: "Total",
									fontFamily: "Public Sans, sans-serif",
									fontWeight: 600,

									formatter: function (w) {
										return `$${w.globals.seriesTotals.reduce((a, b) => {
											return a + b;
										}, 0)}`;
									},
								},
							},
						},
					},
				},
				dataLabels: {
					enabled: false,
				},
				labels: ["Customer", "Electric", "Free Coffee", "Promotions"],
			},
			series: props.series,
		};
	}
	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				colors={this.state.colors}
				type="donut"
				height={500}
				width={500}
			/>
		);
	}
}

class LineChartWithXAxis extends Component {
	constructor(props) {
		super(props);
		const formattedCategories = props.categories.map((category) => {
			const cat = category.toString().padStart(2, "0");
			console.log(cat);
			return cat;
		});

		this.state = {
			options: {
				colors: [this.props.color],
				annotations: {
					points: [
						{
							x: this.props.categories[7], // Ensure this x value corresponds to a category
							y: this.props.series[0].data[7],
							marker: {
								size: 5,
								fillColor: "#fff",
								strokeColor: this.props.color,
								strokeWidth: 3,
								radius: 1,
							},
							label: {
								borderColor: this.props.color,
								offsetY: 0,
								style: {
									color: "#fff",
									background: this.props.color,
								},
							},
						},
					],
				},
				title: {
					show: false,
				},
				chart: {
					dropShadow: {
						enabled: true,
						opacity: 0.25,
						blur: 4,
					},
					toolbar: {
						show: false,
					},
					sparkline: {
						enabled: false,
					},
					id: "dashboard-mini-chart",
				},
				stroke: {
					curve: "smooth",
				},
				xaxis: {
					type: "category",
					categories: formattedCategories,
					axisTicks: {
						show: false,
					},
					axisBorder: {
						show: false,
					},
					crosshairs: {
						show: true,
						position: "back",
						stroke: {
							color: "#b6b6b6",
							width: 1,
							dashArray: 40,
						},
					},
				},
				yaxis: {
					show: false,
				},
			},
			series: this.props.series,
		};
	}

	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				type="line"
				height={400}
			/>
		);
	}
}

export { LineChartSingle, BarChart, RadialChart, PieChart, LineChartWithXAxis };
