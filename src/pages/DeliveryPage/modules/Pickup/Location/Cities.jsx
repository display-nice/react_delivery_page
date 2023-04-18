import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCity, setActiveAddress } from "../PM_Reducer";

export const Cities = () => {	
	const dispatch = useDispatch();
	const globalCitiesData = useSelector((state) => state.DP_Reducer.citiesData);
	// const activeCity = useSelector((state) => state.PM_Reducer.activeCity);

	function changeActiveCity(e) {
		dispatch(setActiveCity(e.target.value))
	}
	
	const array = globalCitiesData.cities.map((item) => {
		let type = 'pickup';
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
			id="pickup-cities"
			className="input-wrapper input-wrapper--radio-group"
		>
			<h4>Город</h4>
			{array}
		</div>
	);
};