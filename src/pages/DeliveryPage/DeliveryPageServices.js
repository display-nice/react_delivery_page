import { db as localTestCitiesData } from "../../db";
import { useSelector } from "react-redux";

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
		// const citiesData = await this.getResource(`https://mock.pages.academy/delivery/db`);
		const citiesData = localTestCitiesData;
		return citiesData;
	}
}

export function GetDeliveryPoints() {
	const globalCitiesData = useSelector((state) => state.DP_Reducer.citiesData);
	const activeCity = useSelector((state) => state.DP_Reducer.activeCity);
	const deliveryPoints = globalCitiesData.cities.find(
		(item) => item["city"] === activeCity
	)["delivery-points"];
	return deliveryPoints;
}
