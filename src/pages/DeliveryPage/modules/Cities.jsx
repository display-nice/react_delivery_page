import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCity } from "@deliveryPage/DeliveryPageReducer.js";

export const Cities = ({type}) => {	
	const dispatch = useDispatch();
	const globalCitiesData = useSelector((state) => state.DP_Reducer.citiesData);
	// const activeCity = useSelector((state) => state.PM_Reducer.activeCity);

	function changeActiveCity(e) {
		dispatch(setActiveCity(e.target.value))
	}
	
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
					defaultChecked={cityName === 'Санкт-Петербург' ? true : false}
					readOnly
				/>
				<label htmlFor={type + "-" + cityID}>{cityName}</label>
			</React.Fragment>
		)
	});

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