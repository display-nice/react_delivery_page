import React from "react";

export const Payment = () => {
	return (
		<>
			<div id="payment">
				<h3>Способ оплаты</h3>
				<div className="input-wrapper input-wrapper--radio-group input-wrapper--payment-method">
					<input
						id="payment-card"
						type="radio"
						name="payment-method"
						defaultValue="card"
						defaultChecked
						readOnly
					/>
					<label htmlFor="payment-card">Карта</label>
					<input
						id="payment-cash"
						type="radio"
						name="payment-method"
						defaultValue="cash"
						readOnly
					/>
					<label htmlFor="payment-cash">Наличные</label>
				</div>
			</div>
			<div
				id="input-card-number"
				className="input-wrapper input-wrapper--input-group"
			>
				<h4>Номер карты</h4>
				<input id="card-fields-1" type="text" maxLength="4" required />
				<label
					htmlFor="card-fields-1"
					aria-label="Первые четыре цифр с карты"
				></label>
				<input id="card-fields-2" type="text" maxLength="4" required />
				<label
					htmlFor="card-fields-2"
					aria-label="Вторые четыре цифр с карты"
				></label>
				<input id="card-fields-3" type="text" maxLength="4" required />
				<label
					htmlFor="card-fields-3"
					aria-label="Третьи четыре цифр с карты"
				></label>
				<input id="card-fields-4" type="text" maxLength="4" required />
				<label
					htmlFor="card-fields-4"
					aria-label="Четвёртые четыре цифр с карты"
				></label>
				<div className="input-wrapper__error">Введите верный номер карты</div>
			</div>			
		</>
	);
};
