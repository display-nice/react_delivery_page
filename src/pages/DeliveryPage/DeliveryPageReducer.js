import { createReducer, combineReducers, createAction } from "@reduxjs/toolkit";

import { DM_Reducer } from "@deliveryPage/modules/Delivery/DM_Reducer";
import { PM_Reducer } from "@deliveryPage/modules/Pickup/PM_Reducer";
import { ST_Reducer } from "@deliveryPage/modules/SwitchTabs/ST_Reducer";

const initialState = {
	pageIsLoading: true,
	pageError: false,
	citiesData: undefined
}

export const pageIsLoaded = createAction('PAGE_IS_LOADED');
export const setCitiesData = createAction('SET_CITIES_DATA');

const DP_Reducer = createReducer(initialState, {
	
})

export const DeliveryPageReducer = combineReducers({
	DP_Reducer,
	DM_Reducer,
	PM_Reducer,
	ST_Reducer
})