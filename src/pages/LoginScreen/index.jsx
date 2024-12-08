import { useContext, useEffect, useState } from "react";
import LogoFirst from "../../../public/assets/images/svg/splash-f1.svg";
import LogoSecond from "../../../public/assets/images/svg/splash-f2.svg";
import "./login.css";
import { MyContext } from "../../App";
import LoginCard from "../../../public/assets/images/png/login-card.png";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PasswordIcon from "@mui/icons-material/Password";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ArrowForward from "../../../public/assets/images/svg/forward-arrow.svg";
import { Button } from "@material-tailwind/react";
import Divider from "@mui/material/Divider";
import AppleLogo from "../../../public/assets/images/svg/logo-apple.svg";
import FacebookLogo from "../../../public/assets/images/svg/logo-facebook.svg";
import GoogleLogo from "../../../public/assets/images/png/logo-google.png";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
	const context = useContext(MyContext);

	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleMouseUpPassword = (event) => {
		event.preventDefault();
	};

	useEffect(() => {
		context.setIsHeaderFooterShow(true);
		context.setLoggedIn(false);
	}, [context]);
	return (
		<>
			<div className="loginWrapper flex flex-col justify-center items-center gap-2">
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
							className="w-[50px] h-[35px] object-cover"
						/>
					</div>
				</div>
				<div className="containerLogin flex flex-row p-0">
					<div className="image-login">
						<img src={LoginCard} className="h-full w-full object-cover" />
					</div>
					<div className="login-details flex flex-col gap-3 p-3 items-center justify-center">
						<span className="login-title max-w-fit">Login to your account</span>
						<div className="full-width-div flex flex-col justify-start items-start gap-1">
							<span className="text-sm ">Email</span>
							<input className="titleWork" placeholder="Email address" />
						</div>
						<div className="full-width-div flex flex-col justify-start items-start gap-1">
							<span className="text-sm ">Password</span>
							<FormControl variant="outlined">
								<OutlinedInput
									id="outlined-adornment-password"
									type={showPassword ? "text" : "password"}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label={
													showPassword
														? "hide the password"
														: "display the password"
												}
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												onMouseUp={handleMouseUpPassword}
												edge="end"
												className="bg-white max-w-8">
												{showPassword ? <PasswordIcon /> : <LockOpenIcon />}
											</IconButton>
										</InputAdornment>
									}
									placeholder="Password"
								/>
							</FormControl>
						</div>
						<div className="gap-1"></div>
						<Link to="/">
							<Button
								variant="solid"
								onClick={() => context.setLoggedIn(true)}
								className=" flex items-center gap-1 rounded-full min-w-[25%]">
								Login
								<span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-sm text-black">
									<img src={ArrowForward} alt="icon" />
								</span>
							</Button>
						</Link>
						<div className="gap-1"></div>
						<Divider> OR LOGIN WITH </Divider>
						<div className="medium-wrapper">
							<div className="medium-items flex flex-row justify-center items-center p-1 gap-1">
								<span className=" w-[20px] h-[20px] flex items-center justify-center rounded-sm">
									<img src={GoogleLogo} alt="icon" className="object-contain" />
								</span>
								Google
							</div>
							<div className="medium-items flex flex-row justify-center items-center p-1 gap-1">
								<span className=" w-[20px] h-[20px] flex items-center justify-center rounded-sm">
									<img src={AppleLogo} alt="icon" />
								</span>
								Apple
							</div>
							<div className="medium-items flex flex-row justify-center items-center p-1 gap-1">
								<span className=" w-[20px] h-[20px] flex items-center justify-center rounded-sm">
									<img src={FacebookLogo} alt="icon" />
								</span>
								Facebook
							</div>
						</div>
					</div>
				</div>
				<Link to="/signup">
					<div className="flex flex-row justify-center items-center gap-2 p-2">
						<span className="font-normal text-gray-400 ">{`Don't have account!`}</span>
						<span className="font-bold text-black ">Create Account</span>
					</div>
				</Link>
			</div>
		</>
	);
};
