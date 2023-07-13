import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDelAddress } from "@deliveryPage/DeliveryPageReducer";

export const DelAddress = () => {
	const dispatch = useDispatch();
	const deliveryAddress = useSelector((state) => state.DP_Reducer.deliveryAddress.value);
	const dAddressError = useSelector((state) => state.DP_Reducer.deliveryAddress.error);
	const orderSendingStatus = useSelector((state) => state.DP_Reducer.orderSendingStatus);

	// 1. Подсветка ошибки \ успеха при заполнении поля
	let addressClasses = "input-wrapper input-wrapper--input";
	if (orderSendingStatus !== 'success') {
		if (dAddressError) {
			addressClasses += " input-wrapper--error"
		} else {
			addressClasses += " input-wrapper--success"
		}
	}
	
	// * Срабатывает при изменении текста в инпуте
	// Отправка изменений в стейт
	function changeDeliveryAddress(e) {
		dispatch(setDelAddress({value: e.target.value}))
		// Простая проверка поля на заполненность, согласно ТЗ
		const validity = e.target.value.length > 0
		if (validity) {
			dispatch(setDelAddress({error: false}))
		} else {
			dispatch(setDelAddress({error: true}))
		}
	}

	return (
		<div
			id="delivery-address-field"
			className={addressClasses}
		>
			<h4>Адрес</h4>
			<input
				id="delivery-address"
				type="text"
				title="Всплывающая подсказка"
				value={deliveryAddress}
				onChange={changeDeliveryAddress}
				required
			/>
			<label htmlFor="delivery-address" aria-label="Укажите адрес"></label>
			<div className="input-wrapper__error">Укажите адрес</div>
		</div>
	);
};
