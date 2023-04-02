import React from "react";

export const Cities = ({type}) => {
	// const type = this.props;

	return (
		<div
			id="pickup-cities"
			className="input-wrapper input-wrapper--radio-group"
		>
			<h4>Город</h4>
			<input
				id={type + "-led"}
				type="radio"
				name="city"
				defaultValue="led"
				defaultChecked
				readOnly
			/>
			<label htmlFor={type + "-led"}>Санкт-Петербург</label>
			<input
				id={type + "-mow"}
				type="radio"
				name="city"
				defaultValue="mow"
				readOnly
			/>
			<label htmlFor={type + "-mow"}>Москва</label>
			<input
				id={type + "-goj"}
				type="radio"
				name="city"
				defaultValue="goj"
				readOnly
			/>
			<label htmlFor={type + "-goj"}>Нижний Новгород</label>
			<input
				id={type + "-krr"}
				type="radio"
				name="city"
				defaultValue="krr"
				readOnly
			/>
			<label htmlFor={type + "-krr"}>Краснодар</label>
		</div>
	);
};
