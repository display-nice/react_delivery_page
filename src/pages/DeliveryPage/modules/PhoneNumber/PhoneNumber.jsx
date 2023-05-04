import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneNumber } from "@deliveryPage/DeliveryPageReducer";

export const PhoneNumber = ({ type }) => {
	const dispatch = useDispatch();
	const selectedTab = useSelector((state) => state.ST_Reducer.selectedTab);
	const phoneNumber = useSelector((state) => state.DP_Reducer.phoneNumber);
	const phoneField = useRef();

	// Пишет номер телефона в стейт
	function changePhoneNumber(e) {
		dispatch(setPhoneNumber(e.target.value));
	}

	// Меняет текст подсказки в зависимости от выбранной вкладки Самовывоз \ Доставка
	let text;
	if (selectedTab === "pickup") {
		text =
			"Товар на складе будет привязан к номеру телефона. В пункте выдачи назовите номер телефона, чтобы получить ваш заказ.";
	} else if (selectedTab === "delivery") {
		text = "Курьер позвонит на указанный номер за час до доставки заказа.";
	}

	// Проверяет валидность ном. тел. и выводит ошибку\успех
	let phoneClasses = "input-wrapper input-wrapper--input ";
	const result = phoneNumber.match(/\+\d{11}\b/);
	if (result) {
		phoneClasses += "input-wrapper--success";
	} else {
		phoneClasses += "input-wrapper--error";
	}
	
	// Подставляет "+7" в ном. тел. при вводе
	if (phoneNumber.length === 1) {
		phoneField.current.value = '+7'
	}

	return (
		<>
			<div id={type + "-phone-field"} className={phoneClasses}>				
				<h4>Номер телефона</h4>
				<input
					id="phone"
					name="phone"
					type="text"
					placeholder="+7 (999) 999-99-99"
					defaultValue={phoneNumber}
					ref={phoneField}
					onChange={changePhoneNumber}
				/>
				<label
					htmlFor="phone"
					aria-label="Введите верный номер телефона, он должен начинаться с +7"
				></label>
				<div className="input-wrapper__error">
					Введите верный номер телефона, он должен начинаться с +7
				</div>
			</div>
			<span className="form__info">{text}</span>
		</>
	);
};
