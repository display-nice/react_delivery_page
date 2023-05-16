import React from "react";

export const CheckAndOrder = () => {
	return (
		<div className="form__submit-block">
			<button className="form__submit-btn" type="submit" disabled>
				Заказать
			</button>
			<div className="form__submit-state">
				<p className="form__submit-header">Осталось заполнить:</p>
				<p id="pick-hint" className="form__submit-help"></p>
				{/* <span>номер карты</span> и <span>телефон</span> */}
			</div>
		</div>
	);
};
