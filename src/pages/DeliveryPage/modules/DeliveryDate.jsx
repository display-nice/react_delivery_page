import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryDate, setDeliveryDateError } from "@deliveryPage/DeliveryPageReducer";

export const DeliveryDate = () => {
	const dispatch = useDispatch();
	const deliveryDate = useSelector((state) => state.DP_Reducer.deliveryDate);
	const deliveryDateError = useSelector((state) => state.DP_Reducer.deliveryDateError);

	// Управляет показом ошибки
	let dateClasses = 'input-wrapper input-wrapper--input';
	if (deliveryDateError) {
		dateClasses += " input-wrapper--error";
	} else {
		dateClasses += " input-wrapper--success";
	}	

	// Меняет в стейте дату и состояние ошибки
	function changeDate(e) {
		dispatch(setDeliveryDate(e.target.value));
		if(validateDate(e.target.value)) {			
			dispatch(setDeliveryDateError(false));
		} 
		else {
			dispatch(setDeliveryDateError(true));
		}
	}

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
