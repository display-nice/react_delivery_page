import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentType } from "@deliveryPage/DeliveryPageReducer";

export const Payment = ({type}) => {
	const dispatch = useDispatch();
	const paymentType = useSelector((state) => state.DP_Reducer.paymentType);
	const cardNumber = useSelector((state) => state.DP_Reducer.cardNumber);
	let hideCardNumber;
	if (paymentType === 'cash') hideCardNumber = {display: 'none'};

	function changePaymentType(e) {
		dispatch(setPaymentType(e.target.value))
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
						defaultChecked
						readOnly
					/>
					<label htmlFor={type + "-payment-card"}>Карта</label>
					<input
						onClick={changePaymentType}
						id={type + "-payment-cash"}
						type="radio"
						name={type + "-payment-method"}
						defaultValue="cash"
						readOnly
					/>
					<label htmlFor={type + "-payment-cash"}>Наличные</label>
				</div>
			</div>
			<div
				id={type + "-input-card-number"}
				className="input-wrapper input-wrapper--input-group"
				style={hideCardNumber}
			>
				<h4>Номер карты</h4>
				<input id={type + "-card-fields-1"} type="text" maxLength="4" required />
				<label
					htmlFor={type + "-card-fields-1"}
					aria-label="Первые четыре цифр с карты"
				></label>
				<input id={type + "-card-fields-2"} type="text" maxLength="4" required />
				<label
					htmlFor={type + "-card-fields-2"}
					aria-label="Вторые четыре цифр с карты"
				></label>
				<input id={type + "-card-fields-3"} type="text" maxLength="4" required />
				<label
					htmlFor={type + "-card-fields-3"}
					aria-label="Третьи четыре цифр с карты"
				></label>
				<input id={type + "-card-fields-4"} type="text" maxLength="4" required />
				<label
					htmlFor={type + "-card-fields-4"}
					aria-label="Четвёртые четыре цифр с карты"
				></label>
				<div className="input-wrapper__error">Введите верный номер карты</div>
			</div>			
		</>
	);
};
