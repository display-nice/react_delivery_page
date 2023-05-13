import { createReducer, createAction, combineReducers, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { DP_Services } from "@deliveryPage/DeliveryPageServices.js";

// import { DM_Reducer } from "@deliveryPage/modules/Delivery/DM_Reducer";
// import { PM_Reducer } from "@deliveryPage/modules/Pickup/PM_Reducer";
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
		citiesData: null,
		activeCity: 'Санкт-Петербург',
		activeAddress: null,
		paymentType: 'card',
		cardNumber: '',
		phoneNumber: '',
		deliveryAddress: '',
		deliveryDate: '',
		deliveryTime: '10:00 - 12:00',
	},
	reducers: {
		pageIsLoaded(state) {
			state.pageIsLoading = false;
			console.log('pageIsLoading = ' + state.pageIsLoading + ', страница загрузилась.');
		},
		setActiveCity(state, action) {
			state.activeCity = action.payload;
			// console.log('установлен активный город: ' + state.activeCity);			
		},
		setActiveAddress(state, action) {
			state.activeAddress = action.payload;
			// console.log('установлен активный адрес: ' + state.activeAddress);
		},
		setPaymentType(state, action) {
			state.paymentType = action.payload;
		},
		setCardNumber(state, action) {
			state.cardNumber = action.payload;
			// console.log('state.cardNumber = ' + state.cardNumber);
		},
		setPhoneNumber(state, action) {
			state.phoneNumber = action.payload;
			// console.log('state.phoneNumber = ' + state.phoneNumber);
		},
		setDeliveryAddress(state, action) {
			state.deliveryAddress = action.payload;
			console.log('state.deliveryAddress = ' + state.deliveryAddress);
		},
		setDeliveryDate(state, action) {
			state.deliveryDate = action.payload;
			console.log('state.deliveryDate = ' + state.deliveryDate);
		},
		setDeliveryTime(state, action) {
			state.deliveryTime = action.payload;
			console.log('state.deliveryTime = ' + state.deliveryTime);
		},

	},
	extraReducers: {
		[initializePage.fulfilled]: (state, action) => {
			state.citiesData = action.payload;
			// console.log(state.citiesData);
			// console.log('initializePage. загрузились данные по городам');
			state.pageIsLoading = false;
			// console.log('initializePage. pageIsLoading = ' + state.pageIsLoading + ', страница загрузилась.');			
		}
	}
})

export const DP_Reducer = DP_Slice.reducer;
export const { pageIsLoaded, setActiveCity, setActiveAddress, setPaymentType, setCardNumber, setPhoneNumber, setDeliveryAddress, setDeliveryDate, setDeliveryTime } = DP_Slice.actions;

export const DeliveryPageReducer = combineReducers({
	DP_Reducer,
	// DM_Reducer,
	// PM_Reducer,
	ST_Reducer
})