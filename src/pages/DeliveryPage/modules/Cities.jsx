import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "@deliveryPage/DeliveryPageReducer.js";
import { setPickupAddress } from "@deliveryPage/DeliveryPageReducer.js";

export const Cities = ({type}) => {	
	const dispatch = useDispatch();
	const globalCitiesData = useSelector((state) => state.DP_Reducer.citiesData);
	const activeCity = useSelector((state) => state.DP_Reducer.city.value);

	// 1. Генерирует кнопки с названиями городов
	// Кнопки затем выводятся на страницу
	const citiesBtns = globalCitiesData.cities.map((item) => {		
		let cityID = item['city-id'];
		let cityName = item['city'];		
		return (
			<React.Fragment key={cityName + "_key"}>
				<input
					onClick={changeActiveCity}
					id={type + "-" + cityID}
					type="radio"
					name="city"
					defaultValue={cityName}
					checked={cityName === activeCity ? true : false}
					readOnly
				/>
				<label htmlFor={type + "-" + cityID}>{cityName}</label>
			</React.Fragment>
		)
	});

	// * Срабатывает при нажатии на кнопку с названием города
	function changeActiveCity(e) {
		dispatch(setCity({value: e.target.value}));
		dispatch(setPickupAddress({value: null, error: true}));
	}

	return (
		<div
			id={type + "-cities"}
			className="input-wrapper input-wrapper--radio-group"
		>
			<h4>Город</h4>
			 {citiesBtns}
		</div>
	);
};