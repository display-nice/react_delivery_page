import React from "react";
import { useSelector } from "react-redux";

export const CheckAndOrder = () => {
	const selectedTab = useSelector((state) => state.ST_Reducer.selectedTab);
	const card = useSelector((state) => state.DP_Reducer.card);
	const phone = useSelector((state) => state.DP_Reducer.phone);
	const deliveryAddress = useSelector(
		(state) => state.DP_Reducer.deliveryAddress
	);
	const deliveryDate = useSelector((state) => state.DP_Reducer.deliveryDate);
	const pickupAddress = useSelector((state) => state.DP_Reducer.pickupAddress);

	let orderBtnDisabled;
	let isLeftToFill;
	let unfilled = [];
	let message = [];

	function lookForUnfilled(array) {
		array.forEach((item) => {
			if (item.error) unfilled.push(item.fieldName);
		});
	}
	// eslint-disable-next-line
	switch (selectedTab) {
		case "pickup":
			lookForUnfilled([card, phone, pickupAddress]);
			break;
		case "delivery":
			lookForUnfilled([card, phone, deliveryAddress, deliveryDate]);
			break;
	}

	if (unfilled.length === 0) orderBtnDisabled = false;
	else orderBtnDisabled = true;

	if (unfilled.length > 1) {
		let symbol;
		for (let i = 0; i < unfilled.length; ++i) {
			// Если перебирается предпоследний элемент, то ставим "и"
			if (i === unfilled.length - 2) {
				symbol = <span> и </span>;
			}
			// Если перебирается последний элемент, то ничего не ставим
			else if (i === unfilled.length - 1) {
				symbol = null;
			}
			// Для остальных элементов ставим запятую
			else {
				symbol = <span>, </span>;
			}
			message.push(
				<React.Fragment key={unfilled[i] + "_key"}>
					<span className={"form__submit-islefttofill"}>{unfilled[i]}</span>
					{symbol}
				</React.Fragment>
			);
		}
	} else if (unfilled.length === 1) {
		message.push(
			<span key={unfilled[0] + "_key"} className={"form__submit-islefttofill"}>
				{unfilled[0]}
			</span>
		);
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
				<p id="pick-hint" className="form__submit-help">
					{message}
				</p>
			</div>
		</div>
	);
};
