import React from "react";
import { Link } from "react-router-dom";
import GreaterThan from "../../assets/images/svg/greater-than.svg";
import { TapButton } from "../buttons";

const PageTopbar = ({ pageName = "", items = [] }) => {
	return (
		<>
			<div className="topbarWrapper flex flex-row items-center pr-2 pl-2">
				<div className="leftTopItem flex flex-col items-center justify-center ">
					<span className="pageName">{pageName}</span>
					<span className="pageLocation pl-2 ">
						<div className="flex flex-row items-center w-max">
							{items.map((item, index) => (
								<React.Fragment key={index}>
									<Link to={item.link}>
										<div
											className={`linkName text-sm  w-fit ${
												pageName === item.page ? "thisPage" : ""
											}  `}>
											{item.page}
										</div>
									</Link>
									{index < items.length - 1 && (
										<span
											className={`arrow w-[25px] h-[25px] flex items-center justify-center ml-auto `}>
											<img src={GreaterThan} />
										</span>
									)}
								</React.Fragment>
							))}
						</div>
					</span>
				</div>
			</div>
		</>
	);
};

export default PageTopbar;
