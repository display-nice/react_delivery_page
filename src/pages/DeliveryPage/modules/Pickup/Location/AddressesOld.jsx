import React, { useState } from "react";
import { useSelector } from "react-redux";

import { DP_Services } from "@deliveryPage/DeliveryPageServices.js";

export const AddressesOld = () => {
	// let [addresses, setPA] = useState([]);
	let addresses = [];
	const pageIsLoading = useSelector((state) => state.PM_Reducer.pageIsLoading);
	const globalCitiesData = useSelector((state) => state.PM_Reducer.citiesData);
	const DPServices = new DP_Services();
	
	if (pageIsLoading) {
		console.log('pageIsLoading...');
		(async () => {
			addresses = await DPServices.pageInitialization();
			// setPA(addresses)
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
			<React.Fragment>
				<div
					id="pickupAdresses"
					className="input-wrapper input-wrapper--radio-group"
				>
					<h4>Адрес пункта выдачи заказов</h4>					
					{addresses}
				</div>
				
			</React.Fragment>
		);
	}

};
