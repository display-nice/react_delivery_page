import { createReducer, createAction } from "@reduxjs/toolkit";

// Редьюсер по классическому способу
// Управляет только переключением табов "самовывоз\доставка"
// Сделан с демонстрационной целью
// Можно было обойтись без него и разместить всё в основном слайсе

// Создание состояния
const initialState = {
	selectedTab: {
		fieldName: 'способ получения товара',
		value: 'pickup',
		error: false
	}
}

// Создание и экспорт экшенов
export const selectPickupTab = createAction('SELECT_PICKUP_TAB');
export const selectDeliveryTab = createAction('SELECT_DELIVERY_TAB');

// Создание и экспорт редьюсера с состоянием и экшенами
export const ST_Reducer = createReducer(initialState, {
	[selectPickupTab]: function (state) {
		state.selectedTab.value = 'pickup';
	},
	[selectDeliveryTab]: function (state) {
		state.selectedTab.value = 'delivery';
	}
})