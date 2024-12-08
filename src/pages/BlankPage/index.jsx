import PageTopbar from "../../components/PageTopbar";
import HomeIcon from "../../assets/images/svg/home.svg";
import FistImage from "../../assets/images/png/blank-page.png";
import { Button } from "@material-tailwind/react";
import "./blank-page.css";
import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";

export const BlankPage = () => {
	const items = [
		{ page: "Home", link: "/" },
		{ page: "Pages", link: "/" },
		{ page: "Blank Page", link: "/blank" },
	];

	const bottomItems = [
		{ name: "Documentation", link: "/" },
		{ name: "Privacy Policy", link: "/" },
		{ name: "FAQs", link: "/faq" },
	];
	const context = useContext(MyContext);

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(11);

	}, [context]);
	return (
		<>
			<div className="blankPageWrapper flex flex-col w-full h-full">
				<PageTopbar items={items} pageName="Blank Page" />
				<div className="blankContent flex flex-col justify-center items-center p-4">
					<span className=" w-[200px] h-[200px] flex items-center justify-center rounded-sm">
						<img src={FistImage} alt="icon" />
					</span>
					<span className="pageTitle">This is a awesome blank page</span>
					<div className="p-1"></div>
					<span className="pageDesc">
						{`Try adjusting your search or filter to find what you're looking for.`}
					</span>
					<div className="p-3"></div>
					<Link to="/">
						<Button
							ripple={true}
							variant="gradient"
							className={`blankPageButton flex flex-row justify-center items-center`}>
							<span className=" w-[30px] h-[30px] flex items-center justify-center rounded-sm gap-2">
								<img src={HomeIcon} alt="icon" />
							</span>
							Go To Home
						</Button>
					</Link>

					<div className="bottomFooter flex flex-row items-center justify-center">
						{bottomItems.map((item, index) => (
							<React.Fragment key={index}>
								<Link to={item.link}>
									<div className={`linkName   overflow-hidden rounded-r-sm`}>
										{item.name}
									</div>
								</Link>
								{index < bottomItems.length - 1 && (
									<span
										className={`nothing w-[25px] h-[25px] flex items-center justify-center ml-auto `}>
										⚈
									</span>
								)}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
