import React, { useContext, useEffect } from "react";
import "./invoice.css";
import { MyContext } from "../../App";
import { InvoiceScreen } from "./components/invoice-screen";
import { InvoiceDetailsScreen } from "./components/invoice-details-screen";

export const InvoiceManagement = () => {
	const context = useContext(MyContext);

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(7);
		context.setActiveSubmenu(0);
	}, [context]);

	const renderContent = () => {
		switch (context.activeSubmenu) {
			case 0:
				return <InvoiceScreen />;
			case 1:
				return <InvoiceDetailsScreen />;
			default:
				return <div>{context.setActiveSubmenu(2) && `No Data Found`}</div>;
		}
	};

	return (
		<div className="content-wrapper">
			{context.activeTab === 7 && renderContent()}
		</div>
	);
};
