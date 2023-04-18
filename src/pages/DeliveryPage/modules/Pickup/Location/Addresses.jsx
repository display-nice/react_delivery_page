import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveAddress } from "../PM_Reducer";

export const Addresses = () => {
	const dispatch = useDispatch();
	const globalCitiesData = useSelector((state) => state.DP_Reducer.citiesData);
	const activeCity = useSelector((state) => state.PM_Reducer.activeCity);
	
	function test() {
		console.log('test');
	}
	function changeActiveAddress(e) {
		dispatch(setActiveAddress(e.target.value))
	}
	
	function createPickupAddresses(cityName) {
		const cityID = globalCitiesData.cities.find(
			(item) => item["city"] === cityName
		)["city-id"];
		const deliveryPoints = globalCitiesData.cities.find(
			(item) => item["city"] === cityName
		)["delivery-points"];

		let newPickupAddresses = [];
		
		for (let i = 0; i < deliveryPoints.length; ++i) {			
			const address = deliveryPoints[i].address;
			const id = `pickup-${cityID}-address-${i + 1}`;
			const name = `${cityID}-address`;
			newPickupAddresses.push(
				<React.Fragment key={address + "_key"}>
					<input onClick={changeActiveAddress} id={id} type="radio" name={name} value={address} />
					<label htmlFor={id}>{address}</label>
				</React.Fragment>
			);
		}
		return newPickupAddresses;
	}

	return (		
		<div
			id="pickupAdresses"
			className="input-wrapper input-wrapper--radio-group"
		>
			<h4>Адрес пункта выдачи заказов</h4>					
			{createPickupAddresses(activeCity)}
		</div>
	);
};
