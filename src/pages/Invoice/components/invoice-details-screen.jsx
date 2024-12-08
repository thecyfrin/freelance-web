import React, { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../../App";
import PageTopbar from "../../../components/PageTopbar";
import { Link } from "react-router-dom";
import moment from "moment";
import LogoFirst from "../../../assets/images/svg/splash-f1.svg?react";
import LogoSecond from "../../../assets/images/svg/splash-f2.svg?react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import {
	Button,
	Typography,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@material-tailwind/react";
import GetUtils from "../../../utils/get-functions";
import SvgIcons from "../../../utils/icon-functions";

const invoiceDetail = {
	id: 1,
	invoiceNo: "LA-0012",
	invoiceSubject: "Design Work",
	status: "Pending",
	client: {
		name: "Vic don",
		email: "vic@example.com",
		country: "United States",
		address: {
			street: "Miami Road",
			state: "Florida",
			region: "New York",
			postal: "132456",
		},
	},
	company: {
		name: "Coffee House",
		email: "coffee@drinkhere.com",
		country: "United States",
		address: {
			street: "Miami Road",
			state: "Florida",
			region: "New York",
			postal: "132456",
		},
	},
	invoiceVatNo: "123456798",
	vat: "10%",
	invoiceDate: moment("2020-12-15T13:00:00").toDate(),
	items: [
		{
			id: 123,
			product: "Something really long is coming here. How to do it?",
			quantity: 2,
			pup: 199.99,
		},
		{
			id: 321,
			product: "Something really long is coming here. How to do it?",
			quantity: 4,
			pup: 49.99,
		},
	],
};

export const InvoiceDetailsScreen = () => {
	const context = useContext(MyContext);
	const items = [
		{ page: "Home", link: "/" },
		{ page: "Pages", link: "/" },
		{ page: "Invoice", link: "/invoice" },
	];

	const bottomItems = [
		{ name: "Documentation", link: "/" },
		{ name: "Privacy Policy", link: "/" },
		{ name: "FAQs", link: "/faq" },
	];

	const { beforeVat, vatDue, total } = GetUtils.getSubVatTotal(invoiceDetail);

	const Print = () => {
		console.log("print");
		let originalContents = document.body.innerHTML;
		let input = document.getElementById("printableArea");
		const buttons = input.querySelector(".no-print");
		if (buttons) {
			buttons.remove();
		}
		let printContents = input.innerHTML;
		document.body.innerHTML = printContents;
		window.print();
		document.body.innerHTML = originalContents;
	};

	function downloadDocument() {
		const input = document.getElementById("printableArea");
		const buttons = input.querySelector(".no-print");
		console.log(buttons);
		if (buttons) {
			buttons.remove();
		}
		html2canvas(input).then((canvas) => {
			const imgData = canvas.toDataURL("image/png");
			const pdf = new jsPDF();
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
			if (pdfHeight <= pdf.internal.pageSize.getHeight()) {
				pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
			} else {
				let position = 0;
				let pageHeight = pdf.internal.pageSize.getHeight();

				while (position < canvas.height) {
					if (position > 0) pdf.addPage();

					const currentCanvasPart = canvas
						.getContext("2d")
						.getImageData(
							0,
							position,
							canvas.width,
							Math.min(canvas.height - position, pageHeight)
						);

					const tempCanvas = document.createElement("canvas");
					tempCanvas.width = canvas.width;
					tempCanvas.height = Math.min(canvas.height - position, pageHeight);

					tempCanvas.getContext("2d").putImageData(currentCanvasPart, 0, 0);

					pdf.addImage(
						tempCanvas.toDataURL("image/png"),
						"PNG",
						0,
						0,
						pdfWidth,
						(pdfHeight * tempCanvas.height) / canvas.height
					);

					position += pageHeight;
				}
			}
			const fileName = `${invoiceDetail.invoiceNo}.pdf`;
			pdf.save(fileName);
		});
	}

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveSubmenu(1);
	}, [context]);
	return (
		<>
			<div className="invoice-view flex flex-col gap-2 ">
				<PageTopbar items={items} pageName="Invoice" />
				<div id="printableArea" className="invoice-details-content  px-3 py-0 ">
					<Card
						shadow={true}
						className="h-fit w-full divide-y-4 divide-slate-300">
						<CardHeader
							floated={false}
							shadow={false}
							className="w-full overflow-visible pt-4 pb-0 m-0 flex items-center justify-start">
							<div className="flex flex-col items-start justify-center w-full px-3 pb-3 gap-3">
								<div className="logoWrapper flex items-start space-x-0.5 py-2">
									<div className="firstLogo overflow-hidden rounded-r-sm ">
										<LogoFirst className="w-[90px] h-[35px] object-cover" />
									</div>
									<div className="secondLogo overflow-hidden rounded-sm">
										<LogoSecond className="w-[50px] h-[35px] object-cover" />
									</div>
								</div>
								<div className="w-full invoice-brief-details flex flex-row items-center justify-between ">
									<div className="flex flex-col items-start justify-center ">
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal text-sm text-gray-500 p-0 m-0">
											Hello {invoiceDetail.client.name}.
										</Typography>
										<span className="flex flex-row gap-1 items-center justify-start">
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal text-sm text-gray-500 p-0 m-0">
												This is the receipt for a payment of
											</Typography>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-semibold text-sm text-gray-700 p-0 m-0">
												${total}
											</Typography>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal text-sm text-gray-500 p-0 m-0">
												you made to
											</Typography>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-semibold text-sm text-gray-700 p-0 m-0">
												{invoiceDetail.company.name}
											</Typography>
										</span>
									</div>
									<div
										id="invoice-buttons"
										className="no-print w-[50%] flex flex-row items-center justify-end gap-3">
										<Button
											onClick={downloadDocument}
											className="flex max-w-[25%] min-w-20 mb-2  gap-2 bg-blue-100 text-blue-700 text-sm rounded-3xl">
											<span className="max-h-5 max-w-">
												<SvgIcons.DownloadIcon />
											</span>
											Download
										</Button>
										<Button
											className="flex max-w-[25%] min-w-20 mb-2  gap-2 bg-[#005CE8f2] text-white text-sm rounded-3xl"
											onClick={Print}>
											<span className="max-h-5 max-w-">
												<SvgIcons.WhitePrintIcon />
											</span>
											Print Invoice
										</Button>
									</div>
								</div>
								<div className="w-full invoice-brief-details flex flex-row items-center justify-between gap-4">
									<div className="flex flex-col items-start justify-center ">
										<Typography
											variant="small"
											color="blue-gray"
											className="p-0 m-0 font-normal text-sm text-gray-400 ">
											Payment No
										</Typography>
										<Typography
											variant="small"
											color="blue-gray"
											className="p-0 m-0 font-semibold text-md ">
											{invoiceDetail.invoiceNo}
										</Typography>
									</div>
									<div className="flex flex-col items-end justify-center ">
										<Typography
											variant="small"
											color="blue-gray"
											className="p-0 m-0 font-normal text-sm text-gray-400 ">
											Payment Date
										</Typography>
										<Typography
											variant="small"
											color="blue-gray"
											className="p-0 m-0 font-semibold text-md ">
											{moment(invoiceDetail.invoiceDate).format(
												"MMM DD, YYYY - hh:MM A"
											)}
										</Typography>
									</div>
								</div>
							</div>
						</CardHeader>
						<CardBody className="overflow-auto p-4 pb-1 flex flex-col  gap-3">
							<div className="company-details flex flex-row items-center justify-between">
								<div className="flex flex-col company-details items-start justify-center">
									<Typography
										variant="small"
										color="blue-gray"
										className="p-0 m-0 font-medium text-sm ">
										{invoiceDetail.company.name}
									</Typography>
									<Typography
										variant="small"
										color="blue-gray"
										className="p-0 m-0 text-sm text-gray-400 ">
										{invoiceDetail.company.address.street}
									</Typography>
									<Typography
										variant="small"
										color="blue-gray"
										className="p-0 m-0 text-sm text-gray-400 ">
										{invoiceDetail.company.address.state},{" "}
										{invoiceDetail.company.address.postal}
									</Typography>
									<Typography
										variant="small"
										color="blue-gray"
										className="p-0 m-0 text-sm text-gray-400 ">
										{invoiceDetail.company.address.region},{" "}
										{invoiceDetail.company.country}
									</Typography>
									<Typography
										variant="small"
										color="blue-gray"
										className="p-0 m-0 text-sm text-gray-400 ">
										{invoiceDetail.company.email}
									</Typography>
								</div>
								<div className="flex flex-col company-details items-end justify-center">
									<Typography
										variant="small"
										color="blue-gray"
										className="p-0 m-0 font-medium text-sm ">
										{invoiceDetail.client.name}
									</Typography>
									<Typography
										variant="small"
										color="blue-gray"
										className="p-0 m-0 text-sm text-gray-400 ">
										{invoiceDetail.client.address.street}
									</Typography>
									<Typography
										variant="small"
										color="blue-gray"
										className="p-0 m-0 text-sm text-gray-400 ">
										{invoiceDetail.client.address.state},{" "}
										{invoiceDetail.client.address.postal}
									</Typography>
									<Typography
										variant="small"
										color="blue-gray"
										className="p-0 m-0 text-sm text-gray-400 ">
										{invoiceDetail.client.address.region},{" "}
										{invoiceDetail.client.country}
									</Typography>
									<Typography
										variant="small"
										color="blue-gray"
										className="p-0 m-0 text-sm text-gray-400 ">
										{invoiceDetail.client.email}
									</Typography>
								</div>
							</div>
							<div className="h-3"></div>
							<div className="invoice-table w-full">
								<table className="w-full h-fit px-3 ">
									<thead>
										<tr className="bg-slate-300 ">
											<th className="px-3 py-2 mb-1">PRODUCT</th>
											<th className="px-3 py-2 mb-1">QNT</th>
											<th className="px-3 py-2 mb-1">UNIT</th>
											<th className="px-3 py-2 mb-1">AMOUNT</th>
										</tr>
									</thead>

									<tbody>
										{invoiceDetail.items.length > 0 &&
											invoiceDetail.items.map((i, index) => {
												const total = i.quantity * i.pup;
												const isLast = index === invoiceDetail.items.length - 1;
												const classes = isLast
													? "px-3 py-2  mb-1 "
													: "px-3 py-2  mb-1 border-b border-blue-gray-50";
												return (
													<tr key={i.id} className="  px-4 py-0">
														<td className={classes}>{i.product}</td>
														<td className={classes}>{i.quantity}</td>
														<td className={classes}>{`$${i.pup}`}</td>
														<td className={classes}>{`$${total}`}</td>
													</tr>
												);
											})}
									</tbody>
								</table>
							</div>
						</CardBody>
						<CardFooter className="w-full p-4 pt-1 flex flex-col gap-8">
							<div className=" min-w-full divide-y-2 divide-gray-100/80 gap-8">
								<div className="flex flex-col w-full items-end justify-start">
									<div className="sub-total w-1/5  mr-28 flex flex-row items-center justify-center  max-h-[80px]">
										<Typography
											variant="small"
											color="blue-gray"
											className="font-semibold text-sm p-2 m-0 text-nowrap">
											Sub-Total
										</Typography>
										<div className="flex-grow"></div>
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal m-0 text-end ">
											${beforeVat}
										</Typography>
									</div>
								</div>
								<div className="flex flex-col w-full items-end justify-center">
									<div className="sub-total w-1/5  mr-28 flex flex-row items-center justify-center  max-h-[80px]">
										<Typography
											variant="small"
											color="blue-gray"
											className="font-semibold text-sm p-2 m-0 ">
											Vat Rate
										</Typography>
										<div className="flex-grow"></div>
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal m-0 text-end">
											{invoiceDetail.vat}
										</Typography>
									</div>
								</div>
								<div className="flex flex-col w-full items-end justify-center">
									<div className="sub-total w-1/5  mr-28 flex flex-row items-center justify-center  max-h-[80px]">
										<Typography
											variant="small"
											color="blue-gray"
											className="font-semibold text-sm p-2 m-0 ">
											Vat Due
										</Typography>
										<div className="flex-grow"></div>
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal m-0 text-end">
											${vatDue}
										</Typography>
									</div>
								</div>
								<div className="flex flex-col w-full items-end justify-center">
									<div className="sub-total w-1/5  mr-28 flex flex-row items-center justify-center  max-h-[80px]">
										<Typography
											variant="small"
											color="blue-gray"
											className="font-bold text-sm p-2 m-0 ">
											TOTAL
										</Typography>
										<div className="flex-grow"></div>
										<Typography
											variant="small"
											color="blue-gray"
											className="font-semibold m-0 text-start">
											${total}
										</Typography>
									</div>
								</div>
							</div>
							<div className="greetings w-full text-center text-sm">
								Thank you very much for doing business with us. We look forward
								to working with you again!
							</div>
						</CardFooter>
					</Card>
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
