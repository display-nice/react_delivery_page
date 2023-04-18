import React from 'react';
import { useDispatch } from "react-redux";
import { pageIsLoaded, setCitiesData } from "@deliveryPage/DeliveryPageReducer.js";

export class DP_Services {
	getResource = async (url) => {
		const res = await fetch(url);	
		if (!res.ok) {
		  throw new Error(`Could not fetch ${url}` +
			 `, received ${res.status}`);
		}
		return await res.json();
	};
	
	loadCitiesData = async () => {
		const citiesData = await this.getResource(`https://mock.pages.academy/delivery/db`);
		return citiesData;
	}
	
	createPickupAddresses = (citiesData, cityID) => {
		const deliveryPoints = citiesData.cities.find(
			(item) => item["city-id"] == cityID
		)["delivery-points"];
	
		let pickupAddresses = [];
		for (let i = 0; i < deliveryPoints.length; ++i) {
			const address = deliveryPoints[i].address;
			const id = `pickup-${cityID}-address-${i + 1}`;
			const name = `${cityID}-address`;
			pickupAddresses.push(
				<React.Fragment key={address + "_key"}>
					<input id={id} type="radio" name={name} value={address} />
					<label htmlFor={id}>{address}</label>
				</React.Fragment>
			);
		}
		return pickupAddresses;
	};

	pageInitialization = async () => {
		const dispatch = useDispatch();

		let citiesData = await this.loadCitiesData();
		await dispatch(setCitiesData(citiesData));
		let PA = await this.createPickupAddresses(citiesData, "led");
		await dispatch(pageIsLoaded());
		// console.log(PA);
		return PA;		
			
		// let wololo = this.loadCitiesData()			
		// 	.then(data => {
		// 		dispatch(setCitiesData(data));
		// 		return data;
		// 	})
		// 	.then(data => {
		// 		// console.log('citiesData для createPickupAddresses: ');
		// 		// console.log(data);
		// 		const PA = this.createPickupAddresses(data, "led");
		// 		dispatch(pageIsLoaded());
		// 		return PA;
		// 	})
		// 	// .then(PA => {
		// 	// 	dispatch(pageIsLoaded());
		// 	// 	return PA;
		// 	// })
		// 	console.log(wololo);
	}

}
