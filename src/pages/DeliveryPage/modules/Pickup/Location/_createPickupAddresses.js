import React from 'react';

export const createPickupAddresses = (citiesData, cityID) => {
	// const citiesData = useSelector((state) => state.DP_Reducer.citiesData);
	// const citiesIDs = citiesData.cities.map(item => item["city-id"]);
	// const cityID = "led";
	console.log("бум");
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