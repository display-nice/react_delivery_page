import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryAddress, setDeliveryAddressError } from "@deliveryPage/DeliveryPageReducer";

export const AddressField = () => {
	const dispatch = useDispatch();
	const deliveryAddress = useSelector((state) => state.DP_Reducer.deliveryAddress);
	const deliveryAddressError = useSelector((state) => state.DP_Reducer.deliveryAddressError)

	let addressClasses = "input-wrapper input-wrapper--input";
	if (deliveryAddressError) {
		addressClasses += " input-wrapper--error"
	} else {
		addressClasses += " input-wrapper--success"
	}
	
	// Отправка изменений в стейт
	function changeDeliveryAddress(e) {
		dispatch(setDeliveryAddress(e.target.value))
		// Простая проверка поля на заполненность, согласно ТЗ
		const validity = e.target.value.length > 0
		if (validity) {
			dispatch(setDeliveryAddressError(false))
		} else {
			dispatch(setDeliveryAddressError(true))
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
