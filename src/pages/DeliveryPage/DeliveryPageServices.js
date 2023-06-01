import { db as localTestCitiesData } from "../../db";
import { useSelector } from "react-redux";

export class DP_Services {
	
	loadCitiesData = async () => {
		const response = await fetch(`https://mock.pages.academy/delivery/db`);
		if (!response.ok) {
			throw new Error(`Network or server error, try again later`);
		}
		// const response = localTestCitiesData;
		return await response.json();
	};

	sendFormData = async (data) => {
		const response = await fetch(
			"https://mock.pages.academy/delivery/requests",
			{
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-type": "application/json",
				},
			}
		);
		if (!response.ok) {
			throw new Error(`Network or server error, try again later`);
		}
		await response
			.json()
			.then((json) => console.log("ответ от сервера: ", json));

		// .then((response) => response.json())
		// .then((json) => console.log("ответ от сервера: ", json));
	};
}

export function GetDeliveryPoints() {
	const globalCitiesData = useSelector((state) => state.DP_Reducer.citiesData);
	const activeCity = useSelector((state) => state.DP_Reducer.city.value);
	const deliveryPoints = globalCitiesData.cities.find(
		(item) => item["city"] === activeCity
	)["delivery-points"];
	return deliveryPoints;
}
