import { createReducer, createAction } from "@reduxjs/toolkit";

// import { fetchCitiesData } from "@deliveryPage/DeliveryPageServices.js";
import { RenderPickupAdresses } from "./Address";

// Создание состояния
const initialState = {
	citiesData: 0,
	citiesIDs: undefined,
	deliveryPoints: undefined,
	PM_test: false
}

// Создание Экшенов
export const setCitiesData = createAction('SET_CITIES_DATA');
export const PM_test = createAction('PM_test');
// Создание редьюсера с состоянием и экшенами
export const PM_Reducer = createReducer(initialState, {
	[setCitiesData]: function (state, action) {
		// console.log("state.citiesObject ДО обновления: " + state.citiesObject);
		// console.log("пытаюсь записать action.payload со значением: ");
		// console.log(action.payload);
		state.citiesData = action.payload;
		console.log('загрузились данные по городам');
		console.log(state.citiesData);
		// state.citiesIDs = state.citiesObject.cities.map(item => item["city-id"]);
		// console.log(state.citiesIDs);
		// state.deliveryPoints = state.citiesObject.cities.map(item => item["delivery-points"]);
		// console.log(state.deliveryPoints);
		// console.log("в стейт записан action.payload со значением: ");
		// console.log(action.payload);
		// console.log("state.citiesObject ПОСЛЕ обновления: " + state.citiesObject);
	},
	[PM_test]: function (state) {
		state.PM_test = !state.PM_test
		console.log(state.PM_test);
	}
})