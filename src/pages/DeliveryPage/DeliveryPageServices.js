import { useDispatch, useSelector } from "react-redux";
import { setCitiesData } from "./modules/Pickup/PM_Reducer";

export const fetchCitiesData = () => {
	return function(dispatch) {
		fetch('https://mock.pages.academy/delivery/db')
      .then(response => response.json())
      .then(json => dispatch(setCitiesData(json)))
	}
};

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

}
