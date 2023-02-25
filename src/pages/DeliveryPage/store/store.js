import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { DM_Reducer } from "../modules/Delivery/store/DM_Reducer";
import { PM_Reducer } from "../modules/Pickup/store/PM_Reducer";

const rootReducer = combineReducers({
	DM_Reducer,
	PM_Reducer,
})

export const store = configureStore({
	reducer: rootReducer,
})