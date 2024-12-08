import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { createContext, useState } from "react";
import { Dashboard } from "./pages/Dashboard";
import StatusBar from "./components/StatusBar";
import { Calendar } from "./pages/Calender";
import { Faqs } from "./pages/Faq";
import { BlankPage } from "./pages/BlankPage";
import { LoginScreen } from "./pages/LoginScreen";
import { SignupScreen } from "./pages/SignupScreen";
import { UserManagement } from "./pages/UserManagement";
import { ContentManagement } from "./pages/ContentManagement";
import { Membership } from "./pages/Membership";
import { PlanPrices } from "./pages/Membership/pricing";
import { BillingScreen } from "./pages/Billing";
import { PricingPlans } from "./pages/PricingPlans";
import { Extras } from "./extra";
import { ProfileManagement } from "./pages/Profile";
import { ProfileSettings } from "./pages/Profile/ProfileSettings/profile-settings";
import { InvoiceManagement } from "./pages/Invoice";
import { InvoiceDetailsScreen } from "./pages/Invoice/components/invoice-details-screen";
import { ReportAnalyticsScreen } from "./pages/ReportAnalytics";
import { HorizontalBar } from "./components/HorizontalBar";

const MyContext = createContext();

function App() {
	const [loggedIn, setLoggedIn] = useState(true);
	const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
	const [activeTab, setActiveTab] = useState(0);
	const [activeSubmenu, setActiveSubmenu] = useState(0);
	const [menuVertical, setMenuVertical] = useState(true);
	const [sidebarColor, setSidebarColor] = useState("white");

	const values = {
		isHeaderFooterShow,
		setIsHeaderFooterShow,
		activeTab,
		setActiveTab,
		loggedIn,
		setLoggedIn,
		activeSubmenu,
		setActiveSubmenu,
		menuVertical,
		setMenuVertical,
		sidebarColor,
		setSidebarColor,
	};

	return (
		<>
			<section className="main flex">
				<BrowserRouter>
					<MyContext.Provider value={values}>
						{isHeaderFooterShow === false && menuVertical === true && (
							<div className="sidebarWrapper w-[18%]">
								<Sidebar />
							</div>
						)}

						<div
							className={`screen h-fit ${
								menuVertical ? "w-[82%]" : "w-full"
							} `}>
							{isHeaderFooterShow === false && menuVertical === false && (
								<div className="horizontal-bar-wrapper h-[50px]">
									<HorizontalBar />
								</div>
							)}
							{isHeaderFooterShow === false && <StatusBar />}

							<div className="o-web-content-view">
								<Routes>
									<Route
										path="/"
										element={
											<Navigate
												to={loggedIn ? "/dashboard" : "login"}
												replace={true}
											/>
										}
									/>
									<Route path="/login" exact={true} element={<LoginScreen />} />
									<Route
										path="/signup"
										exact={true}
										element={<SignupScreen />}
									/>
								</Routes>
								{loggedIn === true && (
									<Routes>
										<Route
											path="/dashboard"
											exact={true}
											element={<Dashboard />}
										/>
										<Route
											path="/userManage"
											exact={true}
											element={<UserManagement />}
										/>
										<Route
											path="/calendar"
											exact={true}
											element={<Calendar />}
										/>
										<Route
											path="/content-management"
											exact={true}
											element={<ContentManagement />}
										/>
										<Route
											path="/membership"
											exact={true}
											element={<Membership />}
										/>
										<Route
											path="/report-analytics"
											exact={true}
											element={<ReportAnalyticsScreen />}
										/>

										<Route
											path="/pricing"
											exact={true}
											element={<PlanPrices />}
										/>
										<Route
											path="/billing"
											exact={true}
											element={<BillingScreen />}
										/>
										<Route
											path="/pricing-plans"
											exact={true}
											element={<PricingPlans />}
										/>
										<Route
											path="/profile"
											exact={true}
											element={<ProfileManagement />}
										/>
										<Route
											path="/profile-settings"
											exact={true}
											element={<ProfileSettings />}
										/>
										<Route
											path="/invoice"
											exact={true}
											element={<InvoiceManagement />}
										/>
										<Route
											path="/invoice-details"
											exact={true}
											element={<InvoiceDetailsScreen />}
										/>

										<Route path="/faq" exact={true} element={<Faqs />} />
										<Route path="/blank" exact={true} element={<BlankPage />} />
										<Route path="/extras" exact={true} element={<Extras />} />
									</Routes>
								)}
							</div>
						</div>
					</MyContext.Provider>
				</BrowserRouter>
			</section>
		</>
	);
}

export default App;
export { MyContext };
