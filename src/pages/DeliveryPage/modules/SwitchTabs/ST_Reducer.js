import { createReducer, createAction } from "@reduxjs/toolkit";

// Создание состояния
const initialState = {
	selectedTab: {
		fieldName: 'способ получения товара',
		value: 'pickup',
		error: false
	}
}

// Создание Экшенов
export const selectPickupTab = createAction('SELECT_PICKUP_TAB');
export const selectDeliveryTab = createAction('SELECT_DELIVERY_TAB');

// Создание редьюсера с состоянием и экшенами
export const ST_Reducer = createReducer(initialState, {
	[selectPickupTab]: function (state) {
		state.selectedTab.value = 'pickup';
		// console.log('отработал ST_Reducer');
		// console.log(state.selectedTab);
	},
	[selectDeliveryTab]: function (state) {
		state.selectedTab.value = 'delivery';
		// console.log('отработал ST_Reducer');
		// console.log(state.selectedTab);
	}
})