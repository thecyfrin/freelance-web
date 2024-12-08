import Button from "@mui/material/Button";
import React from "react";
import ArrowDownIcon from "../../assets/images/svg/arrow-down.svg";

export default function SidebarButton({
	icon,
	endIcon = false,
	label,
	onTap,
	btnClass = "",
}) {
	return (
		<Button
			className={`w-100 flex gap-2 hover:bg-blue-700/10 items-center p2 ${btnClass}`}
			onClick={onTap}>
			{/* Left Icon */}
			<span className="icon w-[20px] h-[20px] flex items-center justify-center rounded-sm text-black">
				<img src={icon} alt="icon" />
			</span>
			<div className="no-select font-normal text-gray-700">{label}</div>
			
			{/* End Icon (optional) */}
			{endIcon && (
				<span
					className={`arrow w-[25px] h-[25px] flex items-center justify-center ml-auto ${
						btnClass === "active" ? "rotate" : ""
					}`}>
					<img src={ArrowDownIcon} alt="arrow down" />
				</span>
			)}
		</Button>
	);
}

export function SidebarSubmenu({ label, onTap, btnClass = "" }) {
	return (
		<Button className={`subMenu w-100  ${btnClass}`} onClick={onTap}>
			{label}
		</Button>
	);
}
