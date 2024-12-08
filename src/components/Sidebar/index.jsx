import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

import LogoFirst from "../../assets/images/svg/splash-f1.svg";
import LogoSecond from "../../assets/images/svg/splash-f2.svg";
import DashboardIcon from "../../assets/images/svg/dashboard.svg";
import UserManagementIcon from "../../assets/images/svg/user-management.svg";
import CalendarIcon from "../../assets/images/svg/calender.svg";
import ContentManagementIcon from "../../assets/images/svg/content-management.svg";
import MembershipIcon from "../../assets/images/svg/membership.svg";
import ReportAnalyticsIcon from "../../assets/images/svg/report-analytics.svg";

import FileManagerIcon from "../../assets/images/svg/file-manager.svg";
import AuthenticationIcon from "../../assets/images/svg/authentication.svg";
import ProfileIcon from "../../assets/images/svg/profile.svg";
import InvoiceIcon from "../../assets/images/svg/invoice.svg";
import BillingIcon from "../../assets/images/svg/billing.svg";
import PricingPlanIcon from "../../assets/images/svg/pricing-plans.svg";
import FaqIcon from "../../assets/images/svg/faqs.svg";
import BlankPageIcon from "../../assets/images/svg/blank-page.svg";
import CardIcon from "../../assets/images/svg/card.svg";
import TableIcon from "../../assets/images/svg/table.svg";
import FormElementsIcon from "../../assets/images/svg/form-elements.svg";
import WidgetIcon from "../../assets/images/svg/widgets.svg";
import DocumentationIcon from "../../assets/images/svg/documentation.svg";
import SidebarButton, { SidebarSubmenu } from "./button";
const Sidebar = () => {
	const context = useContext(MyContext);
	const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
	const isOpenSubmenu = (index) => {
		context.setActiveTab(index);
		setIsToggleSubmenu(!isToggleSubmenu);
	};

	return (
		<>
			<div className="sidebar fixed top-0 left-0 z-[100] w-[18%]">
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

				<div className="sidebarTabs  px-2 mt-3">
					<div className="dashboardPartition">
						<ul className="flex gap-2 flex-col">
							<li>
								<h6 className="identifier text-black/50">Dashboard</h6>
							</li>
							<li>
								<Link viewTransition to="/">
									<SidebarButton
										icon={DashboardIcon}
										btnClass={context.activeTab === 0 ? "active" : ""}
										label="Dashboard"
										onTap={() => isOpenSubmenu(0)}
									/>
								</Link>
							</li>
							<li>
								<Link viewTransition to="/userManage">
									<SidebarButton
										icon={UserManagementIcon}
										btnClass={context.activeTab === 1 ? "active" : ""}
										label="User Management"
										onTap={() => isOpenSubmenu(1)}
									/>
								</Link>
							</li>
							<li>
								<Link to="/calendar" viewTransition>
									<SidebarButton
										icon={CalendarIcon}
										btnClass={context.activeTab === 2 ? "active" : ""}
										label="Calendar"
										onTap={() => isOpenSubmenu(2)}
									/>
								</Link>
							</li>
							<li>
								<Link viewTransition to="/content-management">
									<SidebarButton
										icon={ContentManagementIcon}
										btnClass={context.activeTab === 3 ? "active" : ""}
										label="Content Management"
										endIcon={true}
										onTap={() => isOpenSubmenu(3)}
									/>
								</Link>
								<div
									className={`submenuWrapper ${
										context.activeTab === 3 ? "shown" : "collapsed"
									}`}>
									<div className="sidebarMenu">
										<SidebarSubmenu
											btnClass={`${
												context.activeSubmenu === 0 ? "selected" : ""
											}`}
											label="Manage Content"
											onTap={() => context.setActiveSubmenu(0)}
										/>
										<SidebarSubmenu
											btnClass={`${
												context.activeSubmenu === 1 ? "selected" : ""
											}`}
											label="Content Details"
											onTap={() => context.setActiveSubmenu(1)}
										/>
										<SidebarSubmenu
											btnClass={`${
												context.activeSubmenu === 2 ? "selected" : ""
											}`}
											label="Create New"
											onTap={() => context.setActiveSubmenu(2)}
										/>
									</div>
								</div>
							</li>
							<li>
								<Link to="/membership" viewTransition>
									<SidebarButton
										icon={MembershipIcon}
										btnClass={context.activeTab === 4 ? "active" : ""}
										label="Membership"
										onTap={() => isOpenSubmenu(4)}
									/>
								</Link>
							</li>
							<li>
								<Link to="/report-analytics" viewTransition>
									<SidebarButton
										icon={ReportAnalyticsIcon}
										btnClass={context.activeTab === 5 ? "active" : ""}
										label="Report and analytics"
										onTap={() => isOpenSubmenu(5)}
									/>
								</Link>
							</li>
						</ul>
						<div className="showOnSettings hidden py-2">
							<ul>
								<li>
									<SidebarButton
										icon={FileManagerIcon}
										btnClass={context.activeTab === 17 ? "active" : ""}
										label="File Manager"
										endIcon={true}
										onTap={() => isOpenSubmenu(17)}
									/>
								</li>
								<li>
									<SidebarButton
										icon={AuthenticationIcon}
										btnClass={context.activeTab === 18 ? "active" : ""}
										label="Authentication"
										endIcon={true}
										onTap={() => isOpenSubmenu(18)}
									/>
								</li>
							</ul>
						</div>
					</div>
					{/* Pages Section */}
					<div className="pagesPartition">
						<ul>
							<li>
								<h6 className="identifier text-black/50">Pages</h6>
							</li>
							<li>
								<Link to="/profile" viewTransition>
									<SidebarButton
										icon={ProfileIcon}
										btnClass={context.activeTab === 6 ? "active" : ""}
										label="Profile"
										endIcon={true}
										onTap={() => isOpenSubmenu(6)}
									/>
								</Link>
								{context.activeTab === 6 && (
									<div
										className={`submenuWrapper ${
											context.activeTab === 6 ? "shown" : "collapsed"
										}`}>
										<div className="sidebarMenu">
											<SidebarSubmenu
												label="Profile"
												onTap={() => context.setActiveSubmenu(0)}
												btnClass={`${
													context.activeSubmenu === 0 ? "selected" : ""
												}`}
											/>
											<SidebarSubmenu
												label="Settings"
												onTap={() => context.setActiveSubmenu(1)}
												btnClass={`${
													context.activeSubmenu === 1 ? "selected" : ""
												}`}
											/>
										</div>
									</div>
								)}
							</li>
							<li>
								<Link to="/invoice" viewTransition>
									<SidebarButton
										icon={InvoiceIcon}
										btnClass={context.activeTab === 7 ? "active" : ""}
										label="Invoice"
										endIcon={true}
										onTap={() => isOpenSubmenu(7)}
									/>
								</Link>
								<div
									className={`submenuWrapper ${
										context.activeTab === 7 ? "shown" : "collapsed"
									}`}>
									<div className="sidebarMenu">
										<SidebarSubmenu
											label="Invoice"
											onTap={() => context.setActiveSubmenu(0)}
											btnClass={`${
												context.activeSubmenu === 0 ? "selected" : ""
											}`}
										/>
										<SidebarSubmenu
											label="Invoice Details"
											onTap={() => context.setActiveSubmenu(0)}
											btnClass={`${
												context.activeSubmenu === 1 ? "selected" : ""
											}`}
										/>
									</div>
								</div>
							</li>
							<li>
								<Link to="/billing" viewTransition>
									<SidebarButton
										icon={BillingIcon}
										btnClass={context.activeTab === 8 ? "active" : ""}
										label="Billing"
										onTap={() => isOpenSubmenu(8)}
									/>
								</Link>
							</li>
							<li>
								<Link to="/pricing-plans" viewTransition>
									<SidebarButton
										icon={PricingPlanIcon}
										btnClass={context.activeTab === 9 ? "active" : ""}
										label="Pricing Plans"
										onTap={() => isOpenSubmenu(9)}
									/>
								</Link>
							</li>
							<li>
								<Link to="/faq" viewTransition>
									<SidebarButton
										icon={FaqIcon}
										btnClass={context.activeTab === 10 ? "active" : ""}
										label="FAQs"
										onTap={() => isOpenSubmenu(10)}
									/>
								</Link>
							</li>
							<li>
								<Link to="/blank" viewTransition>
									<SidebarButton
										icon={BlankPageIcon}
										btnClass={context.activeTab === 11 ? "active" : ""}
										label="Blank Page"
										endIcon={false}
										onTap={() => isOpenSubmenu(11)}
									/>
								</Link>
							</li>
						</ul>
					</div>
					{/* Components Section */}

					<div className="componentsPartition hidden showOnSettings py-2">
						<ul>
							<li>
								<h6 className="identifier text-black/50">Components</h6>
							</li>

							<li>
								<SidebarButton
									icon={CardIcon}
									btnClass={context.activeTab === 12 ? "active" : ""}
									label="Card"
									onTap={() => isOpenSubmenu(12)}
								/>
							</li>
							<li>
								<SidebarButton
									icon={TableIcon}
									btnClass={context.activeTab === 13 ? "active" : ""}
									label="Table"
									onTap={() => isOpenSubmenu(13)}
								/>
							</li>
							<li>
								<SidebarButton
									icon={FormElementsIcon}
									btnClass={context.activeTab === 14 ? "active" : ""}
									label="Form Elements"
									onTap={() => isOpenSubmenu(14)}
								/>
							</li>
							<li>
								<SidebarButton
									icon={WidgetIcon}
									btnClass={context.activeTab === 15 ? "active" : ""}
									label="Widgets"
									onTap={() => isOpenSubmenu(15)}
								/>
							</li>
							<li>
								<SidebarButton
									icon={DocumentationIcon}
									btnClass={context.activeTab === 16 ? "active" : ""}
									label="Documentation"
									onTap={() => isOpenSubmenu(16)}
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
