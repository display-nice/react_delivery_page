import { createReducer, createAction, combineReducers, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { DP_Services } from "@deliveryPage/DeliveryPageServices.js";

import { DM_Reducer } from "@deliveryPage/modules/Delivery/DM_Reducer";
import { PM_Reducer } from "@deliveryPage/modules/Pickup/PM_Reducer";
import { ST_Reducer } from "@deliveryPage/modules/SwitchTabs/ST_Reducer";

export const initializePage = createAsyncThunk(
	'DeliveryPageReducer/initializePage',
	async function () {
		const DPServices = new DP_Services();
		let citiesData = await DPServices.loadCitiesData(); // получает данные с сервера
		return citiesData;
	}
)

const DP_Slice = createSlice({
	name: 'DeliveryPageReducer',
	initialState: {
		pageIsLoading: true,
		pageError: false,
		citiesDataIsLoading: true,
		citiesData: null		
	},
	reducers: {
		pageIsLoaded(state) {
			state.pageIsLoading = false;
			console.log('pageIsLoading = ' + state.pageIsLoading + ', страница загрузилась.');
		},
		setCitiesData(state, action) {
			state.citiesData = action.payload;
			console.log(state.citiesData);
			console.log('setCitiesData. загрузились данные по городам');
			state.citiesDataIsLoading = false;
		}
	},
	extraReducers: {
		[initializePage.fulfilled]: (state, action) => {
			state.citiesData = action.payload;
			console.log(state.citiesData);
			console.log('initializePage. загрузились данные по городам');
			state.citiesDataIsLoading = false;
			state.pageIsLoading = false;
			console.log('initializePage. pageIsLoading = ' + state.pageIsLoading + ', страница загрузилась.');
		}
	}
})

export const DP_Reducer = DP_Slice.reducer;
export const { pageIsLoaded, setCitiesData } = DP_Slice.actions;

export const DeliveryPageReducer = combineReducers({
	DP_Reducer,
	DM_Reducer,
	PM_Reducer,
	ST_Reducer
})