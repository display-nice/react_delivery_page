import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPickupAddress } from "@deliveryPage/DeliveryPageReducer.js";

export const PickupAddress = () => {
	const dispatch = useDispatch();
	const globalCitiesData = useSelector((state) => state.DP_Reducer.citiesData);
	const activeCity = useSelector((state) => state.DP_Reducer.activeCity);
	const activeAddress = useSelector((state) => state.DP_Reducer.pickupAddress.address);
	
	// Меняет активный адрес по клику на кнопку адреса
	function changeActiveAddress(e) {
		dispatch(setPickupAddress({address: e.target.value, error: false}))
	}
	
	// Рисует кнопки адресов доставки для каждого города
	// Срабатывает при изменении активного города в стейте
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
			let checked;
			activeAddress === address ? checked = true : checked = false;
			newPickupAddresses.push(
				<React.Fragment key={address + "_key"}>
					<input onClick={changeActiveAddress} checked={checked} id={id} type="radio" name={name} value={address} readOnly/>
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
