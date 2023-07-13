import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryTime } from "@deliveryPage/DeliveryPageReducer";

export const DeliveryTime = () => {
	const dispatch = useDispatch();
	const deliveryTime = useSelector(
		(state) => state.DP_Reducer.deliveryTime.value
	);
	const thumb = useRef();
	const area = useRef();
	// Номер шага
	// всего шагов будет 21, так как шаг по бизнес-условиям у нас равен 20 минутам,
	// в часе три шага, в диапазоне времени доставки семь часов. 3*7=21.
	let step = 0;

	// * Срабатывает однократно при монтировании компонента
	// навешивает ф-ю движения ползунка с клавиатуры
	useEffect(() => {
		document.addEventListener("keydown", keyboardMoveThumb);
	});

	// * Срабатывает при перетаскивании ползунка влево\вправо зажатой ЛКМ
	// двигает ползунок на шаг вперёд\назад
	function mouseMoveThumb(e) {
		thumb.current.ondragstart = function () {
			return false;
		};
		const leftEdge = area.current.getBoundingClientRect().left;
		const thumbLeft = thumb.current.getBoundingClientRect().left;
		const stepPx = Math.round(area.current.offsetWidth / 21);
		const shiftX = e.pageX - thumbLeft;

		document.onmousemove = function (e) {
			// формула считает новое левое положение бегунка
			const newLeft = e.pageX - leftEdge - shiftX;
			// если новое положение бегунка преодолело барьер шага,
			// значит номер шага надо изменить на новый
			if (Math.floor(newLeft / stepPx) !== step) {
				// определяем номер шага от 1 до 21
				step = Math.floor(newLeft / stepPx);
				// Если номер шага в диапазоне от 0 до 21, то делаем всё, что надо
				if (step >= 0 && step <= 21) {
					makeThumbActions();
					// При поднятии кнопки мыши убираем обработчики
					document.onmouseup = function () {
						document.onmousemove = null;
						document.onmouseup = null;
					};
				}
				if (step > 21) {
					step = 21;
				}
				if (step < 0) {
					step = 0;
				}
			}
		};
	}

	// * Срабатывает по нажатию стрелок вправо\влево
	// двигает ползунок на шаг вперёд\назад
	function keyboardMoveThumb(e) {
		if (e.shiftKey && e.code === "ArrowRight") {
			step += 1;
			if (step > 21) {
				step = 21;
			}
			makeThumbActions();
		}
		if (e.shiftKey && e.code === "ArrowLeft") {
			step -= 1;
			if (step < 0) {
				step = 0;
			}
			makeThumbActions();
		}
	}

	// Вспомогательная функция для движения ползунка
	function makeThumbActions() {
		// Получаем время шага (в пикселях)
		let stepPx = Math.round(area.current.offsetWidth / 21);
		// Двигаем ползунок
		thumb.current.style.left = step * stepPx + "px";
		// Получаем время
		let time = getTime();
		// Пишем время в стейт
		dispatch(setDeliveryTime({ value: time }));
	}

	// Вспомогательная функция получения времени по бизнес-условиям
	function getTime() {
		// Вспомогательные массивы с номерами шагов, соотв. 20 и 40 минутам.
		const arr20mins = [1, 4, 7, 10, 13, 16, 19];
		const arr40mins = [2, 5, 8, 11, 14, 17, 20];
		let minutes;
		// определяем минуты исходя из номера шага
		if (step % 3 === 0) {
			minutes = "00";
		} else if (arr20mins.includes(step)) {
			minutes = "20";
		} else if (arr40mins.includes(step)) {
			minutes = "40";
		}
		// определяем часы
		const hours = Math.floor((step * 20) / 60);
		// склеиваем итоговое время доставки, вносим изменения в подсказку над бегунком
		let time =
			10 + hours + ":" + minutes + " - " + (12 + hours) + ":" + minutes;
		// двигаем бегунок на цену одного шага в пикселях
		return time;
	}	

	return (
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
				<div
					className="range-slider-thumb-area js_range-slider-thumb-area"
					ref={area}
				>
					<div
						className="range-slider-thumb js_range-slider-thumb"
						tabIndex="2"
						ref={thumb}
						onMouseDown={mouseMoveThumb}
					>
						<div className="range-slider-tooltip">{deliveryTime}</div>
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
	);
};
