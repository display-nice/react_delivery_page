import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const PhoneNumber = () => {
	const selectedTab = useSelector((state) => state.ST_Reducer.selectedTab);
	let text;
	if (selectedTab === "pickup") {
		text =
			"Товар на складе будет привязан к номеру телефона. В пункте выдачи назовите номер телефона, чтобы получить ваш заказ.";
	} else if (selectedTab === "delivery") {
		text = "Курьер позвонит на указанный номер за час до доставки заказа.";
	}
	return (
		<>
			<div
				id="pickup-phone-field"
				className="input-wrapper input-wrapper--input"
			>
				{/* id="phone-form" */}
				<h4>Номер телефона</h4>
				<input
					id="phone"
					name="phone"
					type="text"
					placeholder="+7(999)999-99-99"
					defaultValue=""
					onChange={console.log()}
				/>
				<label
					htmlFor="phone"
					aria-label="Введите верный номер телефона, он должен начинаться с +7"
				></label>
				<div className="input-wrapper__error">
					Введите верный номер телефона, он должен начинаться с +7
				</div>
			</div>
			<span className="form__info"></span>
		</>
	);
};
