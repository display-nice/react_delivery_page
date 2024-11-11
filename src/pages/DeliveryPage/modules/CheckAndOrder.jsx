import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { sendData } from "../DeliveryPageReducer";

export const CheckAndOrder = () => {
	const dispatch = useDispatch();
	const selectedTab = useSelector((state) => state.ST_Reducer.selectedTab);
	const orderSendingStatus = useSelector(
		(state) => state.DP_Reducer.orderSendingStatus
	);	
	const city = useSelector((state) => state.DP_Reducer.city);
	const pickupAddress = useSelector((state) => state.DP_Reducer.pickupAddress);
	const paymentType = useSelector((state) => state.DP_Reducer.paymentType);
	const card = useSelector((state) => state.DP_Reducer.card);
	const phone = useSelector((state) => state.DP_Reducer.phone);
	const deliveryAddress = useSelector(
		(state) => state.DP_Reducer.deliveryAddress
	);
	const deliveryDate = useSelector((state) => state.DP_Reducer.deliveryDate);
	const deliveryTime = useSelector((state) => state.DP_Reducer.deliveryTime);

	let orderBtnDisabled;
	let unfilled = [];
	let redFields = [];
	let message;
	
	// 1. В зависимости от статуса отправки заказа меняется доступность кнопки отправки заказа
	// а также показываются различные сообщения с ошибочными полями или статусом отправки заказа
	// eslint-disable-next-line	
	switch (orderSendingStatus) {
		case "":
			lookForUnfilled()
			processUnfilled()
			break;
		case "pending":
			orderBtnDisabled = true;
			message = <div>Отправка заказа...</div>;
			break;
		case "success":
			orderBtnDisabled = true;
			message = <div>Заказ отправлен! Посмотрите консоль разработчика.</div>;
			break;
		case "error":
			lookForUnfilled()
			processUnfilled()
			message = (
				<div>
					Произошла ошибка сети\сервера при отправке заказа.
					<br></br>
					Попробуйте нажать "Заказать" повторно через несколько минут.
				</div>
			);
			break;
	}

	// Вспомогательная функция
	// Ищет незаполненные поля и передаёт их в массив unfilled
	function lookForUnfilled() {
		// eslint-disable-next-line
		switch (selectedTab.value) {
			case "pickup":
				checkIfError([card, phone, pickupAddress]);
				break;
			case "delivery":
				checkIfError([card, phone, deliveryAddress, deliveryDate]);
				break;
		}
		function checkIfError(array) {
			array.forEach((item) => {
				if (item.error) unfilled.push(item.fieldName);
			});
		}
	}

	// Вспомогательная функция
	// Обрабатывает массив незаполненных полей unfilled
	// Формирует орфографически корректное сообщение для показа пользователю
	// Перечисляет текстом, какие поля осталось заполнить
	function processUnfilled() {
		if (unfilled.length === 0) {
			message = null;
			orderBtnDisabled = false;
			return;
		}
		if (unfilled.length > 1) {
			let symbol;
			for (let i = 0; i < unfilled.length; ++i) {
				// Если перебирается предпоследний элемент, то ставим "и"
				if (i === unfilled.length - 2) {
					symbol = <span> и </span>;
				}
				// Если перебирается последний элемент, то ничего не ставим
				else if (i === unfilled.length - 1) {
					symbol = null;
				}
				// Для остальных элементов ставим запятую
				else {
					symbol = <span>, </span>;
				}
				redFields.push(
					<React.Fragment key={unfilled[i] + "_key"}>
						<span className={"form__submit-islefttofill"}>{unfilled[i]}</span>
						{symbol}
					</React.Fragment>
				);
				message = (
					<React.Fragment>
						<p className="form__submit-header">Осталось заполнить:</p>
						<p id="pick-hint" className="form__submit-help">
							{redFields}
						</p>
					</React.Fragment>
				);
			}
			return;
		} 
		if (unfilled.length === 1) {
			redFields.push(
				<span key={unfilled[0] + "_key"} className={"form__submit-islefttofill"}>
					{unfilled[0]}
				</span>
			);
			message = (
				<React.Fragment>
					<p className="form__submit-header">Осталось заполнить:</p>
					<p id="pick-hint" className="form__submit-help">
						{redFields}
					</p>
				</React.Fragment>
			);
			return;
		}
	}

	// * Срабатывает при нажатии кнопки "Заказать"
	// Формирует объект с данными для последующей отправки
	// и отправляет его
	function createOrder(e) {
		e.preventDefault();
		let fieldset;
		let data = {};
		// eslint-disable-next-line
		switch (selectedTab.value) {
			case "pickup":
				fieldset = [selectedTab, city, pickupAddress, paymentType, card, phone];				
				if (paymentType.value === "cash") fieldset.splice(4, 1);
				break;
			case "delivery":
				fieldset = [
					selectedTab,
					city,
					deliveryAddress,
					deliveryDate,
					deliveryTime,
					paymentType,
					card,
					phone,
				];
				if (paymentType.value === "cash") fieldset.splice(5, 1);
				break;
		}
		// Пакует данные в объект для последующей отправки
		fieldset.forEach((field) => {
			data[`${field.fieldName}`] = field.value;
		});
		// Отправляет данные
		dispatch(sendData(data));
	}

	return (
		<div className="form__submit-block">
			<button
				className="form__submit-btn"
				type="submit"
				disabled={orderBtnDisabled}
				onClick={createOrder}
			>
				Заказать
			</button>
			<div className="form__submit-state">
				{message}
			</div>
		</div>
	);
};
