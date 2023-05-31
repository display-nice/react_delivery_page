import { db as localTestCitiesData } from "../../db";
import { useSelector } from "react-redux";

export class DP_Services {
	getResource = async (url) => {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
		}
		return await res.json();
	};

	loadCitiesData = async () => {
		const citiesData = await this.getResource(`https://mock.pages.academy/delivery/db`);
		// const citiesData = localTestCitiesData;
		return citiesData;
	};

	sendFormData = async (data) => {
		await fetch("https://mock.pages.academy/delivery/requests", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((json) => console.log("ответ от сервера: ", json));
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
