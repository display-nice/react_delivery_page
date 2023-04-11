import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { pageIsLoaded, setCitiesData } from "@deliveryPage/DeliveryPageReducer";
// import { setCitiesData } from "./modules/Pickup/PM_Reducer";

// export const fetchCitiesData = () => {
// 	return function(dispatch) {
// 		fetch('https://mock.pages.academy/delivery/db')
//       .then(response => response.json())
//       .then(json => dispatch(setCitiesData(json)))
// 	}
// };

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
		// console.log('ima loadCitiesData ');
		const citiesData = await this.getResource(`https://mock.pages.academy/delivery/db`);
		// console.log(citiesData);
		return citiesData;
	}
	
	createPickupAddresses = (citiesData, cityID) => {
		// const citiesData = useSelector((state) => state.DP_Reducer.citiesData);
		// const citiesIDs = citiesData.cities.map(item => item["city-id"]);
		// const cityID = "led";
		// console.log('citiesData в createPickupAddresses: ');
		// console.log(citiesData);
		// const citiesData = useSelector((state) => state.PM_Reducer.citiesData)
		const deliveryPoints = citiesData.cities.find(
			(item) => item["city-id"] == cityID
		)["delivery-points"];
	
		let inputs = [];
		for (let i = 0; i < deliveryPoints.length; ++i) {
			const address = deliveryPoints[i].address;
			const id = `pickup-${cityID}-address-${i + 1}`;
			const name = `${cityID}-address`;
			inputs.push(
				<React.Fragment key={address + "_key"}>
					<input id={id} type="radio" name={name} value={address} />
					<label htmlFor={id}>{address}</label>
				</React.Fragment>
			);
		}
		return inputs;
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
