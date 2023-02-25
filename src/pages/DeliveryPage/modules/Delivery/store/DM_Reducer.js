import { createReducer, createAction } from "@reduxjs/toolkit";

// Создание состояния
const initialState = {
	test_DM: 0
}

// Создание Экшенов
export const increment = createAction('INCREMENT');
// Создание редьюсера с состоянием и экшенами
export const DM_Reducer = createReducer(initialState, {
	[increment]: function (state) {
		state.count = state.count + 1;
		console.log('отработал DM_Reducer');
	}
})