import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Cities } from "@ui/Cities";
import { Address } from "./Address";

import { fetchCitiesData } from "@deliveryPage/DeliveryPageServices.js";
import { PM_test } from "./PM_Reducer";
import { DP_Services } from "@deliveryPage/DeliveryPageServices.js"
import { pageIsLoaded } from "@deliveryPage/DeliveryPageReducer";
import { setCitiesData } from "./PM_Reducer";

export const PickupModule = () => {
	const pageIsLoading = useSelector((state) => state.DP_Reducer.pageIsLoading);
	const citiesData = useSelector((state) => state.PM_Reducer.citiesData);
	const dispatch = useDispatch();
	
	if (pageIsLoading) {
		const DPServices = new DP_Services();
		DPServices.loadCitiesData()
			.then( (data) => {
				dispatch(setCitiesData(data))
			})
			.then(dispatch(pageIsLoaded()))
	}

	function onDataLoaded (citiesData) {

	}
	// dispatch(fetchCitiesData());
	// useEffect( () => {		
		// 	dispatch(fetchCitiesData())
		// }, [dispatch])
		

	
		


	const selectedTab = useSelector((state) => state.ST_Reducer.selectedTab);
	// console.log('В стейте ST_Reducer выбрана вкладка: ' + selectedTab);

	let sectionClasses = "form tabs-block__pick-up";
	if (selectedTab !== 'pickup') {
		sectionClasses += " visually-hidden"
	}

	return (
		<section className={sectionClasses}>
			<h2 className="visually-hidden">Форма самовывоза</h2>
			<form id="pickupForm" action="#" method="POST">
				<h3>Самовывоз</h3>
				<Cities type={"pickup"}/>
				<Address/>
				{/* <div onClick={() => dispatch(PM_test())} style={{ width: 100 + "px", height: 50 + "px", backgroundColor: "red" }}>TEST</div> */}
				<div id="map" style={{ width: 768 + "px", height: 400 + "px" }}></div>
				<div id="pickup-payment">
					<h3>Способ оплаты</h3>
					<div className="input-wrapper input-wrapper--radio-group input-wrapper--payment-method">
						<input
							id="pickup-payment-card"
							type="radio"
							name="pickup-payment-method"
							defaultValue="card"
							defaultChecked
							readOnly
						/>
						<label htmlFor="pickup-payment-card">Карта</label>
						<input
							id="pickup-payment-cash"
							type="radio"
							name="pickup-payment-method"
							defaultValue="cash"
							readOnly
						/>
						<label htmlFor="pickup-payment-cash">Наличные</label>
					</div>
				</div>
				<div
					id="pickup-input-card-number"
					className="input-wrapper input-wrapper--input-group"
				>
					<h4>Номер карты</h4>
					<input id="card-fields-1" type="text" maxLength="4" required />
					<label
						htmlFor="card-fields-1"
						aria-label="Первые четыре цифр с карты"
					></label>
					<input id="card-fields-2" type="text" maxLength="4" required />
					<label
						htmlFor="card-fields-2"
						aria-label="Вторые четыре цифр с карты"
					></label>
					<input id="card-fields-3" type="text" maxLength="4" required />
					<label
						htmlFor="card-fields-3"
						aria-label="Третьи четыре цифр с карты"
					></label>
					<input id="card-fields-4" type="text" maxLength="4" required />
					<label
						htmlFor="card-fields-4"
						aria-label="Четвёртые четыре цифр с карты"
					></label>
					<div className="input-wrapper__error">Введите верный номер карты</div>
				</div>
				<div
					id="pickup-phone-field"
					className="input-wrapper input-wrapper--input"
				>
					{/* id="phone-form" */}
					<h4>Номер телефона</h4>
					<input
						id="phone"
						name="phone"
						type="text"
						placeholder="+7(999)999-99-99"
						defaultValue=""
						onChange={console.log()}
					/>
					<label
						htmlFor="phone"
						aria-label="Введите верный номер телефона, он должен начинаться с +7"
					></label>
					<div className="input-wrapper__error">
						Введите верный номер телефона, он должен начинаться с +7
					</div>
				</div>
				<span className="form__info">
					Товар на складе будет привязан к номеру телефона. В пункте выдачи
					назовите номер телефона, чтобы получить ваш заказ.
				</span>
				<div className="form__submit-block">
					<button className="form__submit-btn" type="submit" disabled>
						Заказать
					</button>
					<div className="form__submit-state">
						<p className="form__submit-header">Осталось заполнить:</p>
						<p id="pick-hint" className="form__submit-help"></p>
						{/* <span>номер карты</span> и <span>телефон</span> */}
					</div>
				</div>
			</form>
		</section>
	);
};
