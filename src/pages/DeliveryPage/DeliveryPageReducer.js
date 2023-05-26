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
		pickupAddress: {
			fieldName: 'адрес пункта выдачи заказов',
			address: null,
			error: true
		},
		paymentType: "card",
		card: {
			fieldName: 'номер карты',
			number: '',
			error: true
		},
		phone: {
			fieldName: 'номер телефона',
			number: '',
			error: true
		},		
		deliveryAddress: {
			fieldName: 'адрес доставки',
			address: '',
			error: true
		},
		deliveryDate: {
			fieldName: 'дата доставки',
			date: '',
			error: true
		},
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
		setPickupAddress(state, action) {
			// state.pickupAddress = action.payload;
			const incoming = Object.keys(action.payload);
			if (incoming.includes('address')) {
				state.pickupAddress.address = action.payload.address;
				// console.log('state.pickupAddress.number: ' + state.pickupAddress.number);
			}			
			if (incoming.includes('error')) {
				state.pickupAddress.error = action.payload.error;
				// console.log('state.pickupAddress.error: ' + state.pickupAddress.error);
			}
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
		setPhone(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('number')) {
				state.phone.number = action.payload.number;
				// console.log('state.phone.number: ' + state.phone.number);
			}			
			if (incoming.includes('error')) {
				state.phone.error = action.payload.error;
				// console.log('state.phone.error: ' + state.phone.error);
			}			
		},
		setDelAddress(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('address')) {
				state.deliveryAddress.address = action.payload.address;
			}			
			if (incoming.includes('error')) {
				state.deliveryAddress.error = action.payload.error;
			}
		},
		setDeliveryDate(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('date')) {
				state.deliveryDate.date = action.payload.date;
			}			
			if (incoming.includes('error')) {
				state.deliveryDate.error = action.payload.error;
			}
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
	setPickupAddress,
	setPaymentType,
	setCard,	
	setPhone,
	setDelAddress,
	setDeliveryDate,
	setDeliveryTime,
} = DP_Slice.actions;

export const DeliveryPageReducer = combineReducers({
	DP_Reducer,
	// DM_Reducer,
	// PM_Reducer,
	ST_Reducer,
});
