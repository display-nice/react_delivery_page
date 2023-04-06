import { createReducer, combineReducers, createAction } from "@reduxjs/toolkit";

import { DM_Reducer } from "@deliveryPage/modules/Delivery/DM_Reducer";
import { PM_Reducer } from "@deliveryPage/modules/Pickup/PM_Reducer";
import { ST_Reducer } from "@deliveryPage/modules/SwitchTabs/ST_Reducer";

const initialState = {
	pageIsLoading: true,
}

export const pageIsLoaded = createAction('PAGE_IS_LOADED');
const DP_Reducer = createReducer(initialState, {
	[pageIsLoaded]: function(state) {
		state.pageIsLoading = false;
		console.log(state.pageIsLoading);
	}
})

export const DeliveryPageReducer = combineReducers({
	DP_Reducer,
	DM_Reducer,
	PM_Reducer,
	ST_Reducer
})