import { createReducer, createAction } from "@reduxjs/toolkit";

// Создание состояния
const initialState = {
	test_PM: 0
}

// Создание Экшенов
export const decrement = createAction('DECREMENT');
// Создание редьюсера с состоянием и экшенами
export const PM_Reducer = createReducer(initialState, {
	[decrement]: function (state) {
		state.count = state.count - 1;
		console.log('отработал PM_Reducer');
	}
})