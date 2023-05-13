import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryDate } from "@deliveryPage/DeliveryPageReducer";

export const DeliveryDate = () => {
	const deliveryDate = useSelector((state) => state.DP_Reducer.deliveryDate);
	return (
		<div
			id="delivery-date-field"
			className="input-wrapper input-wrapper--input"
		>
			<h4>Дата доставки</h4>
			<input
				id="delivery-user-date-delivery"
				type="date"
				defaultValue=""
				onChange={console.log()}
				required
			/>
			<label
				htmlFor="delivery-user-date-delivery"
				aria-label="Укажите дату доставки"
			></label>
			<div className="input-wrapper__error">
				Укажите дату доставки (не ранее, чем завтра и не позднее, чем через 7
				дней)
			</div>
		</div>
	);
};
