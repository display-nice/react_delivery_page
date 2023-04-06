import React from "react";

import { useSelector } from "react-redux";
import { PM_Reducer } from "./PM_Reducer";

export const RenderPickupAdresses = () => {
	// const citiesObject = useSelector((state) => state.PM_Reducer.citiesObject);
	// console.log(citiesObject)
	return <h4>Адрес пункта выдачи заказов</h4>;
};

export const Address = () => {
	
	// const citiesIDs = useSelector((state) => state.PM_Reducer.citiesIDs);
	// const deliveryPoints = citiesObject.cities.find(item => item["city-id"] == cityID)["delivery-points"];
	// const cityID = citiesObject.cities.filter(item => item["city-id"]);
	// console.log(cityID);
	// const testCitiesIDs = ["led", "mow", "goj", "krr"];	
	
	const pickupAdresses = RenderPickupAdresses();
	return (
		<div
			id="pickupAdresses"
			className="input-wrapper input-wrapper--radio-group"
		>
			{pickupAdresses}
		</div>
	);
};
