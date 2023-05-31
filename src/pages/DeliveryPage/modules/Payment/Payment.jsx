import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setPaymentType,
	setCard
} from "@deliveryPage/DeliveryPageReducer";
import { luhnAlgorythm } from "./_validation";

export const Payment = ({ type }) => {
	const dispatch = useDispatch();
	const paymentType = useSelector((state) => state.DP_Reducer.paymentType.value);
	const stateCardNumber = useSelector((state) => state.DP_Reducer.card.value);
	const cardError = useSelector((state) => state.DP_Reducer.card.error);
	const orderSent = useSelector((state) => state.DP_Reducer.orderSent);
	// Рефы на поля с номером карты. f1 - field 1, f2 - field 2 и т.д.
	const f1 = useRef();
	const f2 = useRef();
	const f3 = useRef();
	const f4 = useRef();

	// Скрывает номер карты при нажатии кнопки "Наличные"
	let visibility;
	if (paymentType === "cash") {
		visibility = { display: "none" };		
	}

	// Управляет показом ошибки
	let cardNumberDivClasses = "input-wrapper input-wrapper--input-group ";
	if(!orderSent) {
		if (cardError) {
			cardNumberDivClasses += "input-wrapper--error";
		} else {
			cardNumberDivClasses += "input-wrapper--success";
		}
	}
	
	// Меняет в стейте номер карты и состояние ошибки
	function changeCardNumber(cardNumber) {
		dispatch(setCard({value: cardNumber}));
		if (validation(cardNumber)) {
			// console.log('Валидация успешна');
			dispatch(setCard({error: false}))
		}
		else {
			// console.log('Валидация не прошла');
			dispatch(setCard({error: true}))
		}
	}
	
	// Запускает валидацию номера карты
	function validation(cardNumber) {
		if (cardNumber.length === 16) {
			if (!luhnAlgorythm(cardNumber)) {
				return false
			}
			if (luhnAlgorythm(cardNumber)) {
				return true
			}			
		} 
		else return false
	}
	
	// Меняет тип оплаты, "Карта" или "Наличные"
	function changePaymentType(e) {
		dispatch(setPaymentType({value: e.target.value}));
		if (e.target.value === 'cash') {
			dispatch(setCard({error: false}));
		}
		if (e.target.value === 'card') {
			changeCardNumber(stateCardNumber);
		}
	}
	
	// При заполнении текущего поля номера карты ставит фокус на следующее
	function moveForward(e) {
		changeCardNumber(getCardNumber());
		if (e.target.value.length === 4) {
			const currentField = e.target.name;
			let k = +currentField.slice(1);
			let i = +currentField.slice(1) + 1;
			if (i < 5) {
				let nextFieldName = currentField.replace(k, i);
				let nextField = selectField(nextFieldName);
				nextField.current.focus();
			}
		}
	}

	// При стирании символов в текущем поле номера карты клавишей Backspace
	// ставит фокус на предыдущее поле
	function moveBackOnBackspace(e) {
		if (e.code === "Backspace") {
			changeCardNumber(getCardNumber());
			if (e.target.value.length === 0) {
				const currentField = e.target.name;
				let k = +currentField.slice(1);
				let i = +currentField.slice(1) - 1;
				if (i > 0) {
					let prevFieldName = currentField.replace(k, i);
					let prevField = selectField(prevFieldName);
					prevField.current.focus();
				}				
			}
		}
	}

	// Собирает единый номер карты из четырёх полей
	function getCardNumber() {
		return String(
			f1.current.value + f2.current.value + f3.current.value + f4.current.value
		);
	}
	
	// Берёт единый номер карты из стейта и вставляет его в четыре поля номера карты
	function pasteCardNumber(field) {
		// eslint-disable-next-line
		switch (field) {
			case "f1":
				return stateCardNumber.slice(0, 4);
			case "f2":
				return stateCardNumber.slice(4, 8);
			case "f3":
				return stateCardNumber.slice(8, 12);
			case "f4":
				return stateCardNumber.slice(12, 16);				
		}
	}
	// Вспомогат. ф-я по выбору конкретного поля (рефа)
	function selectField(field) {
		// eslint-disable-next-line
		switch (field) {
			case "f1":
				return f1;
			case "f2":
				return f2;
			case "f3":
				return f3;
			case "f4":
				return f4;
		}
	}

	return (
		<>
			<div id={type + "-payment"}>
				<h3>Способ оплаты</h3>
				<div className="input-wrapper input-wrapper--radio-group input-wrapper--payment-method">
					<input
						onClick={changePaymentType}
						id={type + "-payment-card"}
						type="radio"
						name={type + "-payment-method"}
						defaultValue="card"
						checked={paymentType === 'card' ? true : false}
						readOnly
					/>
					<label htmlFor={type + "-payment-card"}>Карта</label>
					<input
						onClick={changePaymentType}
						id={type + "-payment-cash"}
						type="radio"
						name={type + "-payment-method"}
						defaultValue="cash"
						checked={paymentType === 'cash' ? true : false}
						readOnly
					/>
					<label htmlFor={type + "-payment-cash"}>Наличные</label>
				</div>
			</div>
			<div
				id={type + "-input-card-number"}
				className={cardNumberDivClasses}
				style={visibility}
			>
				<h4>Номер карты</h4>
				<input
					id={type + "-card-fields-1"}
					onInput={moveForward}
					onKeyDown={moveBackOnBackspace}
					value={pasteCardNumber("f1")}
					ref={f1}
					name="f1"
					type="text"
					maxLength="4"
					required
				/>
				<label
					htmlFor={type + "-card-fields-1"}
					aria-label="Первые четыре цифр с карты"
				></label>
				<input
					id={type + "-card-fields-2"}
					onInput={moveForward}
					onKeyDown={moveBackOnBackspace}
					value={pasteCardNumber("f2")}
					ref={f2}
					name="f2"
					type="text"
					maxLength="4"
					required
				/>
				<label
					htmlFor={type + "-card-fields-2"}
					aria-label="Вторые четыре цифр с карты"
				></label>
				<input
					id={type + "-card-fields-3"}
					onInput={moveForward}
					onKeyDown={moveBackOnBackspace}
					value={pasteCardNumber("f3")}
					ref={f3}
					name="f3"
					type="text"
					maxLength="4"
					required
				/>
				<label
					htmlFor={type + "-card-fields-3"}
					aria-label="Третьи четыре цифр с карты"
				></label>
				<input
					id={type + "-card-fields-4"}
					onInput={moveForward}
					onKeyDown={moveBackOnBackspace}
					value={pasteCardNumber("f4")}
					ref={f4}
					name="f4"
					type="text"
					maxLength="4"
					required
				/>
				<label
					htmlFor={type + "-card-fields-4"}
					aria-label="Четвёртые четыре цифр с карты"
				></label>
				<div className="input-wrapper__error">Введите верный номер карты</div>
			</div>
		</>
	);
};
