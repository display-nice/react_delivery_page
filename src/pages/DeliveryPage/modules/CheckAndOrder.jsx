import React from "react";
import { useSelector } from "react-redux";

export const CheckAndOrder = () => {
	const selectedTab = useSelector((state) => state.ST_Reducer.selectedTab);
	const cardNumberError = useSelector(
		(state) => state.DP_Reducer.cardNumberError
	);
	const phoneError = useSelector((state) => state.DP_Reducer.phoneError);
	const deliveryAddressError = useSelector(
		(state) => state.DP_Reducer.deliveryAddressError
	);
	const deliveryDateError = useSelector(
		(state) => state.DP_Reducer.deliveryDateError
	);
	const activeAddress = useSelector((state) => state.DP_Reducer.activeAddress);

	let orderBtnDisabled;
	let isLeftToFill;
	let necessaryFields = [];

	// eslint-disable-next-line
	switch (selectedTab) {
		case "pickup":
			if (cardNumberError || phoneError || !activeAddress) {
				orderBtnDisabled = true;
				let array = [cardNumberError, phoneError, Boolean(!activeAddress)]
				// necessaryFields = array.map((item) => {
				// 	if (item === true)
				// 	return item
				// })
				for (let i = 0; i <= array.length; i++) {
					if (array[i]) {
						necessaryFields.push(array[i])
					}
				}
				// console.log(array);
				// console.log('necessaryFields = ' + necessaryFields);
				// console.log('necessaryFieldsLength = ' + necessaryFields.length);
			}
			else orderBtnDisabled = false;
			break;
		case "delivery":
			if (
				cardNumberError ||
				phoneError ||
				deliveryAddressError ||
				deliveryDateError
			)
				orderBtnDisabled = true;
			else orderBtnDisabled = false;
			break;
	}

	if (orderBtnDisabled) {
		isLeftToFill = <p className="form__submit-header">Осталось заполнить:</p>;
	}

	return (
		<div className="form__submit-block">
			<button
				className="form__submit-btn"
				type="submit"
				disabled={orderBtnDisabled}
			>
				Заказать
			</button>
			<div className="form__submit-state">
				{isLeftToFill}
				<p id="pick-hint" className="form__submit-help"></p>
				{necessaryFields}
				{/* <span>номер карты</span> и <span>телефон</span> */}
			</div>
		</div>
	);
};
