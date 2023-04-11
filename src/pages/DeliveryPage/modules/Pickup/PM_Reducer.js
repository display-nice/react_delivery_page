import { createReducer, createAction } from "@reduxjs/toolkit";

// Создание состояния
const initialState = {
	pageIsLoading: true,
	pageError: false,
	citiesData: undefined
}

// Создание Экшенов
export const pageIsLoaded = createAction('PAGE_IS_LOADED');
export const setCitiesData = createAction('SET_CITIES_DATA');
export const createPA = createAction('CREATE_PICKUP_ADDRESSES')
// Создание редьюсера с состоянием и экшенами
export const PM_Reducer = createReducer(initialState, {
	[pageIsLoaded]: function(state) {
		state.pageIsLoading = false;
		// console.log(state.pageIsLoading);
	},
	[setCitiesData]: function (state, action) {
		state.citiesData = action.payload;
		console.log('загрузились данные по городам');
		// console.log(state.citiesData);
	}
})