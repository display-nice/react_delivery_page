import React, { useEffect } from "react";
// import { Hint } from './modules/Hint/HintModule';
import Spinner from "@components/Spinner/Spinner.jsx";
import { useDispatch, useSelector } from "react-redux";

import { initializePage } from "@deliveryPage/DeliveryPageReducer.js";

import { Hint } from "@deliveryPage/modules/Hint/HintModule.jsx";
import { SwitchTabs } from "./modules/SwitchTabs/SwitchTabs";
import { Payment } from "@deliveryPage/modules/Payment/Payment";
import { Phone } from "@deliveryPage/modules/Phone";
import { CheckAndOrder } from "./modules/CheckAndOrder";
import { DeliveryDate } from "./modules/DeliveryDate.jsx";
import { DeliveryTime } from "./modules/DeliveryTime.jsx";
import { Map } from "./modules/Map/Map";
import { Cities } from "./modules/Cities";
import { PickupAddress } from "./modules/PickupAddress";
import { DelAddress } from "./modules/DelAddress";

const PageContent = () => {
	const dispatch = useDispatch();
	const selectedTab = useSelector(
		(state) => state.ST_Reducer.selectedTab.value
	);
	const pageIsLoading = useSelector((state) => state.DP_Reducer.page.isLoading);

	// Если страница ещё загружается - то основной контент показан не будет
	if (pageIsLoading) {
		return null;
	}

	// Видимость вкладок Самовывоз\Доставка
	let pickupSectionClasses,
		deliverySectionClasses = "form tabs-block__pick-up";
	switch (selectedTab) {
		case "pickup":
			deliverySectionClasses += " visually-hidden";
			break;
		case "delivery":
			pickupSectionClasses += " visually-hidden";
			break;
	}

	return (
		<>
			{/* <Hint /> */}
			<h1 className="visually-hidden">Заказ доставки в интернет-магазине</h1>
			<div className="tabs-block">
				<SwitchTabs />
				<div className="tabs-block__content">
					{/* ---------------- DELIVERY ---------------------- */}
					<section className={deliverySectionClasses}>
						<h2 className="visually-hidden">Форма доставки</h2>
						<form id="deliveryForm" action="#" method="POST">
							<h3>Доставка</h3>
							<Cities type={"delivery"} />
							<DelAddress />
							<DeliveryDate />
							<DeliveryTime />
							<Payment type={"delivery"} />
							<Phone type={"delivery"} />
							<CheckAndOrder />
						</form>
					</section>

					{/* ------------------ PICKUP --------------*/}
					<section className={pickupSectionClasses}>
						<h2 className="visually-hidden">Форма самовывоза</h2>
						<form id="pickupForm" action="#" method="POST">
							<h3>Самовывоз</h3>
							<Cities type={"pickup"} />
							<PickupAddress />
							<Map />
							<Payment type={"pickup"} />
							<Phone type={"pickup"} />
							<CheckAndOrder />
						</form>
					</section>
				</div>
			</div>
		</>
	);
};

export const DeliveryPage = () => {
	const page = useSelector((state) => state.DP_Reducer.page);
	const dispatch = useDispatch();
	// 1. Инициализация всей страницы
	// Получение данных по городам с сервера
	useEffect(() => {
		dispatch(initializePage());
	}, [dispatch]);	
	let content;
	if (page.isLoading) content = <Spinner />;
	if (page.error)
		content = (
			<h1>
				Ошибка получения данных с сервера. 
				<br />
				Обновите страницу.
			</h1>
		);
	if (!page.isLoading && !page.error) content = <PageContent />;

	return (
		<>
			<Hint />
			<div className="wrapper">
				<main className="page-main">{content}</main>
			</div>
		</>
	);
};
