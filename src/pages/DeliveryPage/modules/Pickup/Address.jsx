import React, { useState } from "react";
import { useSelector } from "react-redux";

import { DP_Services } from "@deliveryPage/DeliveryPageServices.js";

export const Address = () => {
	let [addresses, setPA] = useState([]);
	const pageIsLoading = useSelector((state) => state.PM_Reducer.pageIsLoading);
	const DPServices = new DP_Services();
	
	if (pageIsLoading) {
		console.log('pageIsLoading...');
		(async () => {
			addresses = await DPServices.pageInitialization();
			setPA(addresses)
		})();
		return (
			<div></div>
		)
	}
	// const citiesIDs = useSelector((state) => state.PM_Reducer.citiesIDs);
	// const deliveryPoints = citiesObject.cities.find(item => item["city-id"] == cityID)["delivery-points"];
	// const cityID = citiesObject.cities.filter(item => item["city-id"]);
	// const testCitiesIDs = ["led", "mow", "goj", "krr"];	
	// const pageIsLoading = useSelector((state) => state.DP_Reducer.pageIsLoading);
	if (!pageIsLoading) {
		return (
			<div
				id="pickupAdresses"
				className="input-wrapper input-wrapper--radio-group"
			>
				<h4>Адрес пункта выдачи заказов</h4>
				{/* <input id="pick-up-led-address-${i+1}" type="radio" name="led-address" value="${deliveryPoints[i].address}"/>
				<label htmlFor="pick-up-led-address-${i+1}" >Уинская, 4</label> */}
				{addresses}
			</div>
		);
	}

};
