import React from "react";

export const AddressField = () => {
	return (
		<div
			id="delivery-address-field"
			className="input-wrapper input-wrapper--input"
		>
			<h4>Адрес</h4>
			<input
				id="delivery-address"
				type="text"
				title="Всплывающая подсказка"
				required
			/>
			<label htmlFor="delivery-address" aria-label="Укажите адрес"></label>
			<div className="input-wrapper__error">Укажите адрес</div>
		</div>
	);
};
