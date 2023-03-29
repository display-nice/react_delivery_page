import React from "react";

const DeliveryModule = () => {
	return (
		<section className="form tabs-block__item-delivery">
			<h2 className="visually-hidden">Форма доставки</h2>
			<form id="deliveryForm" action="#" method="POST">
				<h3>Доставка</h3>
				<div
					id="delivery-cities"
					className="input-wrapper input-wrapper--radio-group"
				>
					<h4>Город</h4>
					<input
						id="delivery-led"
						type="radio"
						name="city"
						defaultValue="led"
						defaultChecked
						readOnly
					/>
					<label htmlFor="delivery-led">Санкт-Петербург</label>
					<input id="delivery-mow" type="radio" name="city" defaultValue="mow" readOnly/>
					<label htmlFor="delivery-mow">Москва</label>
					<input id="delivery-goj" type="radio" name="city" defaultValue="goj" readOnly/>
					<label htmlFor="delivery-goj">Нижний Новгород</label>
					<input id="delivery-krr" type="radio" name="city" defaultValue="krr" readOnly/>
					<label htmlFor="delivery-krr">Краснодар</label>
				</div>
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
				<div
					id="delivery-date-field"
					className="input-wrapper input-wrapper--input"
				>
					<h4>Дата доставки</h4>
					<input
						id="delivery-user-date-delivery"
						type="date"
						defaultValue=""
						onChange={console.log()}
						required
					/>
					<label
						htmlFor="delivery-user-date-delivery"
						aria-label="Укажите дату доставки"
					></label>
					<div className="input-wrapper__error">
						Укажите дату доставки (не ранее, чем завтра и не позднее, чем через
						7 дней)
					</div>
				</div>
				<div id="delivery-time" className="input-wrapper input-wrapper--range">
					<h4>Время доставки</h4>
					<input
						id="delivery-user-time-delivery"
						type="range"
						className="hidden"
						data-field-type="delivery"
					/>
					<label
						htmlFor="delivery-user-time-delivery"
						aria-label="Укажите время доставки"
					></label>
					<div className="range-slider">
						<div className="range-slider-thumb-area js_range-slider-thumb-area">
							<div
								className="range-slider-thumb js_range-slider-thumb"
								tabIndex="2"
							>
								<div className="range-slider-tooltip">10:00 - 12:00</div>
								<div className="range-slider-thumb__stripe"></div>
								<div className="range-slider-thumb__stripe"></div>
								<div className="range-slider-thumb__stripe"></div>
							</div>
						</div>
						<div className="range-slider-tips">
							<div className="range-slider-tip">10:00</div>
							<div className="range-slider-tip">13:00</div>
							<div className="range-slider-tip">16:00</div>
							<div className="range-slider-tip">19:00</div>
						</div>
					</div>
				</div>
				<div id="delivery-payment">
					<h3>Способ оплаты</h3>
					<div className="input-wrapper input-wrapper--radio-group input-wrapper--payment-method">
						<input
							id="delivery-payment-card"
							type="radio"
							name="delivery-payment-method"
							defaultValue="card"
							defaultChecked
							readOnly
						/>
						<label htmlFor="delivery-payment-card">Карта</label>
						<input
							id="delivery-payment-cash"
							type="radio"
							name="delivery-payment-method"
							defaultValue="cash"
							readOnly
						/>
						<label htmlFor="delivery-payment-cash">Наличные</label>
					</div>
				</div>
				<div
					id="delivery-input-card-number"
					className="input-wrapper input-wrapper--input-group"
				>
					<h4>Номер карты</h4>
					<input id="deliver-crd-1" type="text" required />
					<label
						htmlFor="deliver-crd-1"
						aria-label="Первые четыре цифр с карты"
					></label>
					<input id="deliver-crd-2" type="text" required />
					<label
						htmlFor="deliver-crd-2"
						aria-label="Вторые четыре цифр с карты"
					></label>
					<input id="deliver-crd-3" type="text" required />
					<label
						htmlFor="deliver-crd-3"
						aria-label="Третьи четыре цифр с карты"
					></label>
					<input id="deliver-crd-4" type="text" required />
					<label
						htmlFor="deliver-crd-4"
						aria-label="Четвёртые четыре цифр с карты"
					></label>
					<div className="input-wrapper__error">Введите верный номер карты</div>
				</div>
				<div
					id="delivery-phone-field"
					className="input-wrapper input-wrapper--input"
				>
					{/* id="phone-form" */}
					<h4>Номер телефона</h4>
					<input
						id="phone"
						name="phone"
						type="text"
						placeholder="+7(999)999-99-99"
					/>
					<label
						htmlFor="phone"
						aria-label="Введите верный номер телефона, он должен начинаться с +7"
					></label>
					<div className="input-wrapper__error">
						Введите верный номер телефона, он должен начинаться с +7
					</div>
				</div>
				<span className="form__info">
					Курьер позвонит на указанный номер за час до доставки заказа.
				</span>
				<div className="form__submit-block">
					<button className="form__submit-btn" type="submit" disabled>
						Заказать
					</button>
					<div className="form__submit-state">
						<p className="form__submit-header">Осталось заполнить:</p>
						<p id="del-hint" className="form__submit-help"></p>
						{/* <span>адрес</span> и <span>телефон</span> */}
					</div>
				</div>
			</form>
		</section>
	);
};

export { DeliveryModule };
