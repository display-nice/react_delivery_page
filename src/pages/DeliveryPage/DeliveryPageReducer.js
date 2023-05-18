import {	
	combineReducers,
	createSlice,
	createAsyncThunk,
} from "@reduxjs/toolkit";
import { DP_Services } from "@deliveryPage/DeliveryPageServices.js";

// import { DM_Reducer } from "@deliveryPage/modules/Delivery/DM_Reducer";
// import { PM_Reducer } from "@deliveryPage/modules/Pickup/PM_Reducer";
import { ST_Reducer } from "@deliveryPage/modules/SwitchTabs/ST_Reducer";

export const initializePage = createAsyncThunk(
	"DeliveryPageReducer/initializePage",
	async function () {
		const DPServices = new DP_Services();
		let citiesData = await DPServices.loadCitiesData(); // получает данные с сервера
		return citiesData;
	}
);

const DP_Slice = createSlice({
	name: "DeliveryPageReducer",
	initialState: {
		pageIsLoading: true,
		pageError: false,
		orderBtnActive: false,
		citiesData: null,
		activeCity: "Санкт-Петербург",
		activeAddress: null,
		paymentType: "card",
		card: {
			fieldName: 'номер карты',
			number: '',
			error: true
		},
		phoneNumber: "",
		phoneError: true,
		deliveryAddress: "",
		deliveryAddressError: true,
		deliveryDate: "",
		deliveryDateError: true,
		deliveryTime: "10:00 - 12:00",
	},
	reducers: {
		pageIsLoaded(state) {
			state.pageIsLoading = false;
			console.log(
				"pageIsLoading = " + state.pageIsLoading + ", страница загрузилась."
			);
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
		setCard(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('number')) {
				state.card.number = action.payload.number;
				// console.log('state.card.number: ' + state.card.number);
			}			
			if (incoming.includes('error')) {
				state.card.error = action.payload.error;
				// console.log('state.card.error: ' + state.card.error);
			}
		},
		setCardNumber(state, action) {
			state.card.number = action.payload;
			console.log('state.card.number: ');
			console.log(state.card.number);
		},
		setCardNumberError(state, action) {
			state.card.error = action.payload;
			// console.log('state.cardNumberError = ' + state.cardNumberError);
			console.log('state.card.error: ');
			console.log(state.card.error);
		},
		setPhoneNumber(state, action) {
			state.phoneNumber = action.payload;
			// console.log('state.phoneNumber = ' + state.phoneNumber);
		},
		setPhoneError(state, action) {
			state.phoneError = action.payload;
			// console.log('state.phoneError = ' + state.phoneError);
		},
		setDeliveryAddress(state, action) {
			state.deliveryAddress = action.payload;
			// console.log('state.deliveryAddress = ' + state.deliveryAddress);
		},
		setDeliveryAddressError(state, action) {
			state.deliveryAddressError = action.payload;
			// console.log('state.deliveryAddressError = ' + state.deliveryAddressError);
		},
		setDeliveryDate(state, action) {
			state.deliveryDate = action.payload;
			// console.log("state.deliveryDate = " + state.deliveryDate);
		},
		setDeliveryDateError(state, action) {
			state.deliveryDateError = action.payload;
			// console.log("state.deliveryDateError = " + state.deliveryDateError);
		},
		setDeliveryTime(state, action) {
			state.deliveryTime = action.payload;
			// console.log('state.deliveryTime = ' + state.deliveryTime);
		},
	},
	extraReducers: {
		[initializePage.fulfilled]: (state, action) => {
			state.citiesData = action.payload;
			// console.log(state.citiesData);
			// console.log('initializePage. загрузились данные по городам');
			state.pageIsLoading = false;
			// console.log('initializePage. pageIsLoading = ' + state.pageIsLoading + ', страница загрузилась.');
		},
	},
});

export const DP_Reducer = DP_Slice.reducer;
export const {
	pageIsLoaded,
	setActiveCity,
	setActiveAddress,
	setPaymentType,
	setCard,
	setCardNumber,
	setCardNumberError,
	setPhoneNumber,
	setPhoneError,
	setDeliveryAddress,
	setDeliveryAddressError,
	setDeliveryDate,
	setDeliveryDateError,
	setDeliveryTime,
} = DP_Slice.actions;

export const DeliveryPageReducer = combineReducers({
	DP_Reducer,
	// DM_Reducer,
	// PM_Reducer,
	ST_Reducer,
});
