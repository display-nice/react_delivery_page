import { createReducer, createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector, useDispatch } from "react-redux";
// import { DP_Services } from "@deliveryPage/DeliveryPageServices.js";


// export const initializePage = createAsyncThunk(
// 	'PickupModuleReducer/initializePage',
// 	async function () {
// 		const DPServices = new DP_Services();
// 		// const dispatch = useDispatch();
// 		let citiesData = await DPServices.loadCitiesData(); // получает данные с сервера
// 		return citiesData;
// 		// dispatch(setCitiesData(citiesData)); // пишет их в глобальный стейт, который изначально undefined
// 	}
// )

const PM_Slice = createSlice({
	name: 'PickupModuleReducer',
	initialState: {
		activeCity: 'Санкт-Петербург',
		activeAddress: null
	},
	reducers: {
		setActiveCity(state, action) {
			state.activeCity = action.payload;
			console.log('установлен активный город: ' + state.activeCity);
		},
		setActiveAddress(state, action) {
			state.activeAddress = action.payload;
			console.log('установлен активный адрес: ' + state.activeAddress);
		}
	}
})

export const PM_Reducer = PM_Slice.reducer;
export const { setActiveCity, setActiveAddress } = PM_Slice.actions;


// // Создание состояния
// const initialState = {
// 	pageIsLoading: true,
// 	pageError: false,
// 	citiesDataIsLoading: true,
// 	citiesData: undefined
// }

// // Создание Экшенов
// export const pageIsLoaded = createAction('PAGE_IS_LOADED');
// export const setCitiesData = createAction('SET_CITIES_DATA');
// // Создание редьюсера с состоянием и экшенами
// export const PM_Reducer = createReducer(initialState, {
// 	[pageIsLoaded]: function(state) {
// 		state.pageIsLoading = false;
// 		console.log('pageIsLoading = ' + state.pageIsLoading + ', страница загрузилась.');
// 	},
// 	[setCitiesData]: function (state, action) {
// 		state.citiesData = action.payload;
// 		console.log(state.citiesData);
// 		console.log('загрузились данные по городам');
// 		state.citiesDataIsLoading = false;
// 	}
// })