import React, { useContext, useEffect } from "react";
import "./faq.css";
import { Link } from "react-router-dom";
import PageTopbar from "../../components/PageTopbar";
import { Button } from "@material-tailwind/react";
import UserImage from "../../../public/assets/images/png/user-image.png";
import { MyContext } from "../../App";

export const Faqs = () => {
	const items = [
		{ page: "Home", link: "/" },
		{ page: "Pages", link: "/" },
		{ page: "FAQs", link: "/faq" },
	];

	const bottomItems = [
		{ name: "Documentation", link: "/" },
		{ name: "Privacy Policy", link: "/" },
	];

	const faqs = [
		{
			id: 1,
			title:
				"Can I add #############################################################",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin magna vitae mattis ultrices. Phasellus in massa nisl. Mauris nec bibendum magna. Nunc bibendum, tortor sed auctor convallis, justo neque aliquam quam, eget lacinia felis felis sit amet arcu. Nulla ante lectus, ullamcorper laoreet ullamcorper eu, consequat id risus. Curabitur. ",
		},
		{
			id: 2,
			title:
				"How do I  #############################################################",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis rutrum commodo. Proin mattis lectus a finibus accumsan. Praesent tempor tincidunt turpis eu vulputate. Donec ultrices in nulla et hendrerit. Fusce fermentum hendrerit lectus et rhoncus. In lobortis semper ligula at ultricies. Aenean ac augue sit amet elit egestas placerat. Proin sapien dui, imperdiet quis ante vitae, tincidunt sollicitudin mi. Pellentesque eget lobortis ipsum. Vestibulum libero odio, luctus id augue nec, fermentum consectetur sem. Donec tellus mauris, faucibus sit amet mauris quis, faucibus ultrices turpis. Donec ac lorem at augue viverra porttitor. Nulla nec felis posuere, pretium nibh nec, molestie purus. Phasellus luctus ante sed erat faucibus porta ut ut diam. Curabitur id lobortis turpis. Ut eleifend dolor quis pretium. ",
		},
		{
			id: 3,
			title:
				"What is the  #############################################################",
			description:
				"Aliquam erat volutpat. Phasellus et vestibulum nibh. Curabitur ante neque, ultricies non fermentum in, tincidunt et sem. Sed sodales porta. ",
		},
		{
			id: 4,
			title:
				"What admin  #############################################################",
			description:
				"Sed tortor libero, ornare sed congue in, rhoncus at magna. Aenean sit amet lacus vulputate, porta diam id, dictum velit. Aenean aliquam orci sit amet mi varius, quis sodales ligula ultrices. Suspendisse pulvinar, velit eu accumsan aliquam, ex augue accumsan nulla, in semper massa nisi in magna. Curabitur rutrum nulla nibh, in eleifend nibh tincidunt tincidunt. Quisque vulputate massa ac pulvinar vulputate. Sed purus massa, suscipit vitae risus a, lacinia consectetur ligula. Nullam egestas vitae mauris quis congue. Nullam at augue pulvinar, hendrerit justo eu, interdum lorem. Maecenas massa diam, cursus egestas feugiat vitae, iaculis mattis orci. Phasellus bibendum congue felis, et condimentum erat elementum vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque iaculis suscipit nulla, vitae luctus lorem fermentum quis. Vivamus sit amet augue viverra, scelerisque felis et, scelerisque orci. Pellentesque nec sem et orci gravida tincidunt at quis orci. Etiam tempus tellus non mi consectetur lobortis. Maecenas eget mauris imperdiet, porttitor dui sit amet, tempor quam. Aenean non ex vel dolor blandit gravida at sed turpis. In tempus vitae dui ornare mollis. Ut vel eleifend risus, non commodo quam. Maecenas dignissim velit auctor, faucibus nunc mollis, viverra dui. Donec vel finibus odio, quis vulputate velit. Phasellus non dapibus neque. Vestibulum libero nulla, iaculis at mattis eget, ullamcorper et ipsum. Phasellus viverra euismod sollicitudin. Integer at elementum risus, scelerisque dictum ante. Donec tincidunt mauris vel lectus tempus, id condimentum nibh laoreet. Sed in odio erat. Nunc nibh nibh, pretium vel molestie ut, tincidunt ut lorem. Nunc sollicitudin erat est. Aliquam nec tortor arcu. Praesent dictum consequat eros a luctus. Sed vulputate aliquet urna in interdum. Donec ultrices ullamcorper magna, sit amet congue ipsum dapibus vehicula. Vivamus nec diam et sapien volutpat vestibulum. Donec dolor sem, malesuada ut sodales nec, sagittis ac augue. ",
		},
		{
			id: 5,
			title:
				"Can I add #############################################################",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin magna vitae mattis ultrices. Phasellus in massa nisl. Mauris nec bibendum magna. Nunc bibendum, tortor sed auctor convallis, justo neque aliquam quam, eget lacinia felis felis sit amet arcu. Nulla ante lectus, ullamcorper laoreet ullamcorper eu, consequat id risus. Curabitur. ",
		},
		{
			id: 6,
			title:
				"How do I  #############################################################",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis rutrum commodo. Proin mattis lectus a finibus accumsan. Praesent tempor tincidunt turpis eu vulputate. Donec ultrices in nulla et hendrerit. Fusce fermentum hendrerit lectus et rhoncus. In lobortis semper ligula at ultricies. Aenean ac augue sit amet elit egestas placerat. Proin sapien dui, imperdiet quis ante vitae, tincidunt sollicitudin mi. Pellentesque eget lobortis ipsum. Vestibulum libero odio, luctus id augue nec, fermentum consectetur sem. Donec tellus mauris, faucibus sit amet mauris quis, faucibus ultrices turpis. Donec ac lorem at augue viverra porttitor. Nulla nec felis posuere, pretium nibh nec, molestie purus. Phasellus luctus ante sed erat faucibus porta ut ut diam. Curabitur id lobortis turpis. Ut eleifend dolor quis pretium. ",
		},
		{
			id: 7,
			title:
				"What is the  #############################################################",
			description:
				"Aliquam erat volutpat. Phasellus et vestibulum nibh. Curabitur ante neque, ultricies non fermentum in, tincidunt et sem. Sed sodales porta. ",
		},
		{
			id: 8,
			title:
				"What admin  #############################################################",
			description:
				"Sed tortor libero, ornare sed congue in, rhoncus at magna. Aenean sit amet lacus vulputate, porta diam id, dictum velit. Aenean aliquam orci sit amet mi varius, quis sodales ligula ultrices. Suspendisse pulvinar, velit eu accumsan aliquam, ex augue accumsan nulla, in semper massa nisi in magna. Curabitur rutrum nulla nibh, in eleifend nibh tincidunt tincidunt. Quisque vulputate massa ac pulvinar vulputate. Sed purus massa, suscipit vitae risus a, lacinia consectetur ligula. Nullam egestas vitae mauris quis congue. Nullam at augue pulvinar, hendrerit justo eu, interdum lorem. Maecenas massa diam, cursus egestas feugiat vitae, iaculis mattis orci. Phasellus bibendum congue felis, et condimentum erat elementum vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque iaculis suscipit nulla, vitae luctus lorem fermentum quis. Vivamus sit amet augue viverra, scelerisque felis et, scelerisque orci. Pellentesque nec sem et orci gravida tincidunt at quis orci. Etiam tempus tellus non mi consectetur lobortis. Maecenas eget mauris imperdiet, porttitor dui sit amet, tempor quam. Aenean non ex vel dolor blandit gravida at sed turpis. In tempus vitae dui ornare mollis. Ut vel eleifend risus, non commodo quam. Maecenas dignissim velit auctor, faucibus nunc mollis, viverra dui. Donec vel finibus odio, quis vulputate velit. Phasellus non dapibus neque. Vestibulum libero nulla, iaculis at mattis eget, ullamcorper et ipsum. Phasellus viverra euismod sollicitudin. Integer at elementum risus, scelerisque dictum ante. Donec tincidunt mauris vel lectus tempus, id condimentum nibh laoreet. Sed in odio erat. Nunc nibh nibh, pretium vel molestie ut, tincidunt ut lorem. Nunc sollicitudin erat est. Aliquam nec tortor arcu. Praesent dictum consequat eros a luctus. Sed vulputate aliquet urna in interdum. Donec ultrices ullamcorper magna, sit amet congue ipsum dapibus vehicula. Vivamus nec diam et sapien volutpat vestibulum. Donec dolor sem, malesuada ut sodales nec, sagittis ac augue. ",
		},
	];
	const context = useContext(MyContext);

	useEffect(() => {
		context.setIsHeaderFooterShow(false);
		context.setActiveTab(10);
	}, [context]);
	return (
		<>
			<div className="faqWrapper flex flex-col w-full h-full">
				<PageTopbar items={items} pageName="FAQs" />

				<div className="faqContent flex flex-col justify-start items-start p-4 gap-3">
					<span className="pageTitle max-w-fit">
						Frequently Asked Questions
					</span>
					<div className="faq-items-wrapper flex overflow-auto flex-col items-start justify-between">
						{faqs.map((faq) => (
							<React.Fragment key={faq.id}>
								<div className="single-faq flex flex-row justify-start items-start ">
									<span className=" faq-image  flex items-center justify-center rounded-sm">
										<img src={UserImage} alt="icon" />
									</span>
									<div className="faq-content flex flex-col justify-center items-start text-start">
										<span className="faqTitle max-w-fit">{faq.title}</span>
										<div className="p-1"></div>
										<span className="faqDesc">{faq.description}</span>
									</div>
								</div>
							</React.Fragment>
						))}
					</div>

					<div className="bottomFooter flex flex-row items-center justify-center">
						{bottomItems.map((item, index) => (
							<React.Fragment key={index}>
								<Link to={item.link}>
									<div className={`linkName   overflow-hidden rounded-r-sm`}>
										{item.name}
									</div>
								</Link>
								{index < bottomItems.length - 1 && (
									<span
										className={`nothing w-[25px] h-[25px] flex items-center justify-center ml-auto `}>
										⚈
									</span>
								)}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
