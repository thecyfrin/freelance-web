import React, { useContext, useEffect } from "react";
import "./content-management.css";
import { MyContext } from "../../App";
import ManageContents from "./manage-content"; // Adjust based on export type
import ContentDetails from "./manage-content";

export const ContentManagement = () => {
	const context = useContext(MyContext);

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(3);
		context.setActiveSubmenu(0);
	}, [context]);

	const renderContent = () => {
		switch (context.activeSubmenu) {
			case 0:
				return <ManageContents />;
			case 1:
				return <ContentDetails />;
			default:
				return <div>{context.setActiveSubmenu(2) && `No Data Found`}</div>;
		}
	};

	return (
		<div className="content-wrapper">
			{context.activeTab === 3 && renderContent()}
		</div>
	);
};
