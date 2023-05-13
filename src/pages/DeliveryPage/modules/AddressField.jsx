import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryAddress } from "@deliveryPage/DeliveryPageReducer";

export const AddressField = () => {
	const dispatch = useDispatch();
	const deliveryAddress = useSelector((state) => state.DP_Reducer.deliveryAddress);

	// Простая проверка поля на заполненность, согласно ТЗ
	let addressClasses = "input-wrapper input-wrapper--input";
	if (deliveryAddress.length > 0) {
		addressClasses += " input-wrapper--success"
	} else {
		addressClasses += " input-wrapper--error"
	}

	// Отправка изменений в стейт
	function changeDeliveryAddress(e) {
		dispatch(setDeliveryAddress(e.target.value))
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
