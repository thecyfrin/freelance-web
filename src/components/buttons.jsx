import React from "react";
import { Button } from "@material-tailwind/react";

export function TapButton({ isWhite = false, onTap, btnText = "", icon = "" }) {
	return (
		<div className="tappableButton flex flex-row gap-1">
			<Button
				onClick={onTap}
				ripple={true}
				variant="gradient"
				className={`tapButton rounded-full  mr-0 ${
					!isWhite ? "directButton" : ""
				} 			}`}>
				{icon != "" && (
					<span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-sm text-black">
						<img src={icon} alt="icon" />
					</span>
				)}
				{btnText}
			</Button>
		</div>
	);
}
