import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryDate } from "@deliveryPage/DeliveryPageReducer";

export const DeliveryDate = () => {
	const dispatch = useDispatch();
	const deliveryDate = useSelector((state) => state.DP_Reducer.deliveryDate.value);
	const deliveryDateError = useSelector((state) => state.DP_Reducer.deliveryDate.error);
	const orderSendingStatus = useSelector((state) => state.DP_Reducer.orderSendingStatus);

	// 1. Подсветка ошибки \ успеха при заполнении поля
	let dateClasses = 'input-wrapper input-wrapper--input';
	if(orderSendingStatus !== 'success') {
		if (deliveryDateError) {
			dateClasses += " input-wrapper--error";
		} else {
			dateClasses += " input-wrapper--success";
		}
	}

	// * Срабатывает первой при изменении даты в инпуте
	// Меняет в стейте дату и состояние ошибки, после чего отработает п.1
	function changeDate(e) {
		dispatch(setDeliveryDate({value: e.target.value}));
		if(validateDate(e.target.value)) {			
			dispatch(setDeliveryDate({error: false}));
		} 
		else {
			dispatch(setDeliveryDate({error: true}));
		}
	}

	// * Срабатывает второй при изменении даты в инпуте
	// Запускает валидацию даты
	function validateDate(date) {
		// проверка на корректность формата даты
		if (date.match(/^\d{2}[./-]\d{2}[./-]\d{4}$/)) {
			const day = +date.slice(0, 2);
			const month = +date.slice(3, 5);
			const year = +date.slice(6);
			const nowYear = new Date().getFullYear();
			if (
				day >= 1 &&
				day <= 31 &&
				month >= 1 &&
				month <= 12 &&
				(year === nowYear || year === nowYear + 1)
			) {
				// Если формат корректен, то дополнительно проверяем на бизнес-условия
				const yyyymmdd = `${year}-${month}-${day}`;
				if (checkBusinessCond(yyyymmdd)) {
					// Если все проверки успешны, то убираем ошибку
					return true;
				}
				else {					
					return false;
				}
			} 
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}

	// * Срабатывает третьей при изменении даты в инпуте
	// дополнительная проверка на бизнес-условия
	// Дата должна лежать в диапазоне от +1 до +7 дней от сегодня.
	function checkBusinessCond(yyyymmdd) {
		const userDate = new Date(yyyymmdd);		

		let nowPlusOneDay = new Date();
		nowPlusOneDay.setDate(nowPlusOneDay.getDate() + 1);
		nowPlusOneDay.setHours(0, 0, 0, 0);

		let nowPlusSevenDays = new Date();
		nowPlusSevenDays.setDate(nowPlusSevenDays.getDate() + 7);
		nowPlusSevenDays.setHours(0, 0, 0, 0);

		if (userDate >= nowPlusOneDay && userDate <= nowPlusSevenDays) {			
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
				type="text"
				placeholder="дд.мм.гггг"
				value={deliveryDate}
				onChange={changeDate}
				required
			/>
			<label
				htmlFor="delivery-user-date-delivery"
				aria-label="Укажите дату доставки"
			></label>
			<div className="input-wrapper__error">
				Укажите дату доставки в формате дд.мм.гггг (не ранее, чем завтра и не
				позднее, чем через 7 дней)
			</div>
		</div>
	);
};
