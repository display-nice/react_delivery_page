import {	
	combineReducers,
	createSlice,
	createAsyncThunk,
} from "@reduxjs/toolkit";

import { DP_Services } from "@deliveryPage/DeliveryPageServices.js";
import { ST_Reducer } from "@deliveryPage/modules/SwitchTabs/ST_Reducer";

// Инициализация страницы: подгрузка данных о городах и точках доставки
// установка их в стейт через extraReducers
// Вызывается в компоненте DeliveryPage.jsx
export const initializePage = createAsyncThunk(
	"DeliveryPageReducer/initializePage",
	async function () {
		const DPServices = new DP_Services();
		let citiesData = await DPServices.loadCitiesData(); // получает данные с сервера
		return citiesData;
	}
);

// Отправка итоговых данных формы на сервер
// Вызывается в компоненте CheckAndOrder.jsx
export const sendData = createAsyncThunk(
	"DeliveryPageReducer/sendFormData",
	async function(data) {
		const DPServices = new DP_Services();
		await DPServices.sendFormData(data);
	}
)

const DP_Slice = createSlice({
	name: "DeliveryPageReducer",
	initialState: {
		pageIsLoading: true,
		pageError: false,
		orderBtnActive: false,
		orderSent: false,
		citiesData: null,
		city: {
			fieldName: 'город',
			value: "Санкт-Петербург",
			error: false
		},
		paymentType: {
			fieldName: 'способ оплаты',
			value: "card",
			error: false
		},
		card: {
			fieldName: 'номер карты',
			value: '',
			error: true
		},
		phone: {
			fieldName: 'номер телефона',
			value: '',
			error: true
		},		
		pickupAddress: {
			fieldName: 'адрес пункта выдачи заказов',
			value: null,
			error: true
		},
		deliveryAddress: {
			fieldName: 'адрес доставки',
			value: '',
			error: true
		},
		deliveryDate: {
			fieldName: 'дата доставки',
			value: '',
			error: true
		},
		deliveryTime: {
			fieldName: 'время доставки',
			value: "10:00 - 12:00",
			error: false
		}
	},
	reducers: {
		pageIsLoaded(state) {
			state.pageIsLoading = false;
			console.log(
				"pageIsLoading = " + state.pageIsLoading + ", страница загрузилась."
			);
		},
		setOrderSent(state, action) {
			state.orderSent = action.payload
		},
		setCity(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('value')) {
				state.city.value = action.payload.value;
				console.log('state.city.value: ' + state.city.value);
			}			
			if (incoming.includes('error')) {
				state.city.error = action.payload.error;
				console.log('state.city.error: ' + state.city.error);
			}
		},
		setPickupAddress(state, action) {
			// state.pickupAddress = action.payload;
			const incoming = Object.keys(action.payload);
			if (incoming.includes('value')) {
				state.pickupAddress.value = action.payload.value;
				// console.log('state.pickupAddress.number: ' + state.pickupAddress.number);
			}			
			if (incoming.includes('error')) {
				state.pickupAddress.error = action.payload.error;
				// console.log('state.pickupAddress.error: ' + state.pickupAddress.error);
			}
		},
		setPaymentType(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('value')) {
				state.paymentType.value = action.payload.value;				
			}
			if (incoming.includes('error')) {
				state.paymentType.error = action.payload.error;
			}
		},
		setCard(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('value')) {
				state.card.value = action.payload.value;
				// console.log('state.card.number: ' + state.card.number);
			}			
			if (incoming.includes('error')) {
				state.card.error = action.payload.error;
				// console.log('state.card.error: ' + state.card.error);
			}
		},
		setPhone(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('value')) {
				state.phone.value = action.payload.value;
				// console.log('state.phone.number: ' + state.phone.number);
			}			
			if (incoming.includes('error')) {
				state.phone.error = action.payload.error;
				// console.log('state.phone.error: ' + state.phone.error);
			}			
		},
		setDelAddress(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('value')) {
				state.deliveryAddress.value = action.payload.value;
			}			
			if (incoming.includes('error')) {
				state.deliveryAddress.error = action.payload.error;
			}
		},
		setDeliveryDate(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('value')) {
				state.deliveryDate.value = action.payload.value;
			}			
			if (incoming.includes('error')) {
				state.deliveryDate.error = action.payload.error;
			}
		},
		setDeliveryTime(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('value')) {
				state.deliveryTime.value = action.payload.value;
				console.log('state.deliveryTime.value = ' + state.deliveryTime.value);
			}			
			if (incoming.includes('error')) {
				state.deliveryTime.error = action.payload.error;
			}
		},
	},
	extraReducers: {
		[initializePage.fulfilled]: (state, action) => {
			state.citiesData = action.payload;
			state.pageIsLoading = false;
		},
		[sendData.pending]: (state) => {
			
		},
		[sendData.rejected]: (state) => {

		},
		[sendData.fulfilled]: (state) => {
			state.orderSent = true;
			state.city = {
				fieldName: 'город',
				value: "Санкт-Петербург",
				error: false
			};
			state.paymentType = {
				fieldName: 'способ оплаты',
				value: "card",
				error: false
			};
			state.card = {
				fieldName: 'номер карты',
				value: '',
				error: true
			};
			state.phone = {
				fieldName: 'номер телефона',
				value: '',
				error: true
			};
			state.pickupAddress = {
				fieldName: 'адрес пункта выдачи заказов',
				value: null,
				error: true
			};
			state.deliveryAddress = {
				fieldName: 'адрес доставки',
				value: '',
				error: true
			};
			state.deliveryDate = {
				fieldName: 'дата доставки',
				value: '',
				error: true
			};
			state.deliveryTime = {
				fieldName: 'время доставки',
				value: "10:00 - 12:00",
				error: false
			};
		},
	},
});

export const DP_Reducer = DP_Slice.reducer;
export const {
	pageIsLoaded,
	setOrderSent,
	setCity,
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
	ST_Reducer,
});
