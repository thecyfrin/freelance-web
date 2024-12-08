import React, { useContext, useEffect } from "react";
import "./profile.css";
import { MyContext } from "../../App";
import { ProfileScreen } from "./ProfileScreen/profile-screen";
import { ProfileSettings } from "./ProfileSettings/profile-settings";

export const ProfileManagement = () => {
	const context = useContext(MyContext);

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(6);
		context.setActiveSubmenu(0);
	}, [context]);

	const renderContent = () => {
		switch (context.activeSubmenu) {
			case 0:
				return <ProfileScreen />;
			case 1:
				return <ProfileSettings />;
			default:
				return <div>{context.setActiveSubmenu(2) && `No Data Found`}</div>;
		}
	};

	return (
		<div className="content-wrapper">
			{context.activeTab === 6 && renderContent()}
		</div>
	);
};
