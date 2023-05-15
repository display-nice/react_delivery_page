import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryDate } from "@deliveryPage/DeliveryPageReducer";

export const DeliveryDate = () => {
	const dispatch = useDispatch();
	const deliveryDate = useSelector((state) => state.DP_Reducer.deliveryDate);

	let dateClasses = "input-wrapper input-wrapper--input";
	if (validateDate(deliveryDate)) {
		dateClasses += ' input-wrapper--success'
	} else {
		dateClasses += ' input-wrapper--error'
	}

	function changeDate(e) {
		dispatch(setDeliveryDate(e.target.value))
	}
	
	// проверка на корректность формата даты	
	function validateDate(date) {
		if (date.match(/^\d{4}[./-]\d{2}[./-]\d{2}$/)) {
			let nowYear = new Date().getFullYear();
			let day = +date.slice(8);
			let month = +date.slice(5, 7);
			let year = +date.slice(0, 4);
			if (
				day >= 1 &&
				day <= 31 &&
				month >= 1 &&
				month <= 12 &&
				(year === nowYear || year === nowYear + 1)
			) {
				return dateBusinessCheck(date);
			} else {
				return false;
			}
		}
	}
	// дополнительная проверка на бизнес-условия
	// Дата должна лежать в диапазоне от +1 до +7 дней от сегодня.
	function dateBusinessCheck(date) {
		let x = new Date(date);
		x.setHours(0, 0, 0, 0);

		let nowPlusOneDay = new Date();
		nowPlusOneDay.changeDate(nowPlusOneDay.getDate() + 1);
		nowPlusOneDay.setHours(0, 0, 0, 0);

		let nowPlusSevenDays = new Date();
		nowPlusSevenDays.changeDate(nowPlusSevenDays.getDate() + 7);
		nowPlusSevenDays.setHours(0, 0, 0, 0);
		
		if (x >= nowPlusOneDay && x <= nowPlusSevenDays) {
			return true;
		} else {
			return false;
		}
	}
	return (
		<div id="delivery-date-field" className={dateClasses}>
			<h4>Дата доставки</h4>
			<input
				id="delivery-user-date-delivery"
				type="date"
				value={deliveryDate}
				onChange={changeDate}
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
