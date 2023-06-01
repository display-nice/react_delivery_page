import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhone } from "@deliveryPage/DeliveryPageReducer";

export const Phone = ({ type }) => {
	const dispatch = useDispatch();
	const selectedTab = useSelector(
		(state) => state.ST_Reducer.selectedTab.value
	);
	const phoneNumber = useSelector((state) => state.DP_Reducer.phone.value);
	const phoneError = useSelector((state) => state.DP_Reducer.phone.error);
	const orderSendingStatus = useSelector((state) => state.DP_Reducer.orderSendingStatus);

	let phoneClasses = "input-wrapper input-wrapper--input ";
	if (orderSendingStatus !== 'success') {
		if (phoneError) {
			phoneClasses += "input-wrapper--error";
		} else {
			phoneClasses += "input-wrapper--success";
		}
	}

	// Проверяет валидность ном. тел. и пишет в стейт ошибку\успех
	function changePhoneNumber(e) {
		// Подставляет "+7" в ном. тел. при вводе
		if (e.target.value.length === 1) {
			e.target.value = "+7";
		}
		dispatch(setPhone({ value: e.target.value }));
		// Простая валидация на + и 11 цифр
		const validity = e.target.value.match(/\+\d{11}\b/);
		if (validity) {
			dispatch(setPhone({ error: false }));
		} else {
			dispatch(setPhone({ error: true }));
		}
	}

	// Меняет текст подсказки в зависимости от выбранной вкладки Самовывоз \ Доставка
	let text;
	if (selectedTab === "pickup") {
		text =
			"Товар на складе будет привязан к номеру телефона. В пункте выдачи назовите номер телефона, чтобы получить ваш заказ.";
	} else if (selectedTab === "delivery") {
		text = "Курьер позвонит на указанный номер за час до доставки заказа.";
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
					value={phoneNumber}
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
