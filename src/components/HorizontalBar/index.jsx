import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

import LogoFirst from "../../../public/assets/images/svg/splash-f1.svg";
import LogoSecond from "../../../public/assets/images/svg/splash-f2.svg";
import DashboardIcon from "../../../public/assets/images/svg/dashboard.svg";
import UserManagementIcon from "../../../public/assets/images/svg/user-management.svg";
import CalendarIcon from "../../../public/assets/images/svg/calender.svg";
import ContentManagementIcon from "../../../public/assets/images/svg/content-management.svg";
import MembershipIcon from "../../../public/assets/images/svg/membership.svg";
import ReportAnalyticsIcon from "../../../public/assets/images/svg/report-analytics.svg";

import FileManagerIcon from "../../../public/assets/images/svg/file-manager.svg";
import AuthenticationIcon from "../../../public/assets/images/svg/authentication.svg";
import ProfileIcon from "../../../public/assets/images/svg/profile.svg";
import InvoiceIcon from "../../../public/assets/images/svg/invoice.svg";
import BillingIcon from "../../../public/assets/images/svg/billing.svg";
import PricingPlanIcon from "../../../public/assets/images/svg/pricing-plans.svg";
import FaqIcon from "../../../public/assets/images/svg/faqs.svg";
import BlankPageIcon from "../../../public/assets/images/svg/blank-page.svg";
import CardIcon from "../../../public/assets/images/svg/card.svg";
import TableIcon from "../../../public/assets/images/svg/table.svg";
import FormElementsIcon from "../../../public/assets/images/svg/form-elements.svg";
import WidgetIcon from "../../../public/assets/images/svg/widgets.svg";
import DocumentationIcon from "../../../public/assets/images/svg/documentation.svg";
import SidebarButton, { SidebarSubmenu } from "../Sidebar/button";
export const HorizontalBar = () => {
	const context = useContext(MyContext);
	const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
	const isOpenSubmenu = (index) => {
		context.setActiveTab(index);
		setIsToggleSubmenu(!isToggleSubmenu);
	};

	return (
		<>
			<div className="horizontalbar  w-full h-fit flex flex-row items-center justify-evenly">
				<Link to="/" onClick={() => isOpenSubmenu(0)}>
					<div className="logoWrapper flex items-start space-x-0.5 py-2">
						<div className="firstLogo overflow-hidden rounded-r-sm ">
							<img
								src={LogoFirst}
								alt="First Half Logo"
								className="w-[90px] h-[35px] object-cover"
							/>
						</div>
						<div className="secondLogo overflow-hidden rounded-sm">
							<img
								src={LogoSecond}
								alt="Second Half Logo"
								className="w-[50px] h-[35px] object-contain"
							/>
						</div>
					</div>
				</Link>
				<Link viewTransition to="/">
					<SidebarButton
						icon={DashboardIcon}
						btnClass={context.activeTab === 0 ? "hori-active" : ""}
						label="Dashboard"
						onTap={() => isOpenSubmenu(0)}
					/>
				</Link>
				<Link viewTransition to="/userManage">
					<SidebarButton
						icon={UserManagementIcon}
						btnClass={context.activeTab === 1 ? "hori-active" : ""}
						label="User Management"
						onTap={() => isOpenSubmenu(1)}
					/>
				</Link>
				<Link to="/calendar" viewTransition>
					<SidebarButton
						icon={CalendarIcon}
						btnClass={context.activeTab === 2 ? "hori-active" : ""}
						label="Calendar"
						onTap={() => isOpenSubmenu(2)}
					/>
				</Link>
				<Link viewTransition to="/content-management">
					<SidebarButton
						icon={ContentManagementIcon}
						btnClass={context.activeTab === 3 ? "hori-active" : ""}
						label="Content Management"
						onTap={() => isOpenSubmenu(3)}
					/>
				</Link>

				<Link to="/membership" viewTransition>
					<SidebarButton
						icon={MembershipIcon}
						btnClass={context.activeTab === 4 ? "hori-active" : ""}
						label="Membership"
						onTap={() => isOpenSubmenu(4)}
					/>
				</Link>

				<Link to="/report-analytics" viewTransition>
					<SidebarButton
						icon={ReportAnalyticsIcon}
						btnClass={context.activeTab === 5 ? "hori-active" : ""}
						label="Report and analytics"
						onTap={() => isOpenSubmenu(5)}
					/>
				</Link>
				<Link to="/profile" viewTransition>
					<SidebarButton
						icon={ProfileIcon}
						btnClass={context.activeTab === 6 ? "hori-active" : ""}
						label="Profile"
						onTap={() => isOpenSubmenu(6)}
					/>
				</Link>

				<Link to="/invoice" viewTransition>
					<SidebarButton
						icon={InvoiceIcon}
						btnClass={context.activeTab === 7 ? "hori-active" : ""}
						label="Invoice"
						onTap={() => isOpenSubmenu(7)}
					/>
				</Link>

				<Link to="/billing" viewTransition>
					<SidebarButton
						icon={BillingIcon}
						btnClass={context.activeTab === 8 ? "hori-active" : ""}
						label="Billing"
						onTap={() => isOpenSubmenu(8)}
					/>
				</Link>
				<Link to="/pricing-plans" viewTransition>
					<SidebarButton
						icon={PricingPlanIcon}
						btnClass={context.activeTab === 9 ? "hori-active" : ""}
						label="Pricing Plans"
						onTap={() => isOpenSubmenu(9)}
					/>
				</Link>
				<Link to="/faq" viewTransition>
					<SidebarButton
						icon={FaqIcon}
						btnClass={context.activeTab === 10 ? "hori-active" : ""}
						label="FAQs"
						onTap={() => isOpenSubmenu(10)}
					/>
				</Link>
				<Link to="/blank" viewTransition>
					<SidebarButton
						icon={BlankPageIcon}
						btnClass={context.activeTab === 11 ? "hori-active" : ""}
						label="Blank Page"
						endIcon={false}
						onTap={() => isOpenSubmenu(11)}
					/>
				</Link>
			</div>
		</>
	);
};
