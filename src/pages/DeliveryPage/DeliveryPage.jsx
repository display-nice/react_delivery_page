import React, { useEffect } from "react";
// import { Hint } from './modules/Hint/HintModule';
import Spinner from "@components/Spinner/Spinner.jsx";
import { useDispatch, useSelector } from "react-redux";

import { initializePage } from "@deliveryPage/DeliveryPageReducer.js"

import { SwitchTabs } from "./modules/SwitchTabs/SwitchTabs";
import { Payment } from "@deliveryPage/modules/Payment/Payment";
import { PhoneNumber } from "@deliveryPage/modules/PhoneNumber/PhoneNumber";
import { CheckAndOrder } from "./modules/CheckAndOrder/CheckAndOrder";
import { DateTime } from "./modules/DateTime/DateTime";
import { Map } from "./modules/Map/Map";
import { Cities } from "./modules/Cities";
import { Addresses } from "./modules/Addresses";
import { AddressField } from "./modules/AddressField"; 

const Content = () => {
	const selectedTab = useSelector((state) => state.ST_Reducer.selectedTab);
	let pickupSectionClasses,
	deliverySectionClasses = "form tabs-block__pick-up";	
	switch (selectedTab) {
		case "pickup":
			deliverySectionClasses += " visually-hidden";
			console.log('pickup!');
			break;
			case "delivery":
				pickupSectionClasses += " visually-hidden";
				console.log('delivery!');
				break;
			}			
	
	// Инициализация страницы
	const dispatch = useDispatch();
	const pageIsLoading = useSelector((state) => state.DP_Reducer.pageIsLoading);

	useEffect(() => {
		dispatch(initializePage())
	}, [dispatch])	

	if (pageIsLoading) {
		return null;
	}
	

	return (
		<>
			{/* <Hint /> */}
			{/* <div className="page-header"></div> */}
			<div className="wrapper">
				<main className="page-main">
					<h1 className="visually-hidden">
						Заказ доставки в интернет-магазине
					</h1>
					<div className="tabs-block">
						<SwitchTabs />
						<div className="tabs-block__content">

							{/* ---------------- DELIVERY ---------------------- */}
							<section className={deliverySectionClasses}>
								<h2 className="visually-hidden">Форма доставки</h2>
								<form id="deliveryForm" action="#" method="POST">
									{/* <h3>Доставка</h3> */}
									{/* <Cities type={'delivery'}/> */}
									<AddressField />
									<DateTime />
									<Payment type={'delivery'}/>
									<PhoneNumber type={'delivery'}/>
									<CheckAndOrder />
								</form>
							</section>

							{/* ------------------ PICKUP --------------*/}
							<section className={pickupSectionClasses}>
								<h2 className="visually-hidden">Форма самовывоза</h2>
								<form id="pickupForm" action="#" method="POST">
									{/* <h3>Самовывоз</h3> */}
									{/* <Cities type={'pickup'}/> */}
									{/* <Addresses /> */}
									{/* <Map /> */}
									<Payment type={'pickup'}/>
									<PhoneNumber type={'pickup'}/>
									<CheckAndOrder />
								</form>
							</section>
						</div>
					</div>
				</main>
			</div>
			{/* <script src="./js/script.js"></script> */}
		</>
	);
};

export const DeliveryPage = () => {
	const pageIsLoading = useSelector((state) => state.DP_Reducer.pageIsLoading);
	const pageError = useSelector((state) => state.DP_Reducer.pageError);

	const errorMessage = null;
	const showSpinner = pageIsLoading ? <Spinner /> : null;
	// const showContent = !(pageIsLoading || pageError) ? <Content /> : null;
	const showContent = <Content />;

	return (
		<>
			{/* {errorMessage} */}
			{/* {showSpinner} */}
			{showContent}
		</>
	);
	// if (!pageIsLoading) {

	// }
};
