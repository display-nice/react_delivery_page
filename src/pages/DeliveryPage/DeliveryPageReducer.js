import {	
	combineReducers,
	createSlice,
	createAsyncThunk,
} from "@reduxjs/toolkit";

import { DP_Services } from "@deliveryPage/DeliveryPageServices.js";
import { ST_Reducer } from "@deliveryPage/modules/SwitchTabs/ST_Reducer";

// Инициализация страницы: подгрузка данных о городах и точках доставки,
// установка их в стейт через extraReducers. Вызывается в компоненте DeliveryPage.jsx
// Использует асинх. запрос к серверу, вынесенный в отдельный файл DeliveryPageServices.js
export const initializePage = createAsyncThunk(
	"DeliveryPageReducer/initializePage",
	async function () {
		const DPServices = new DP_Services();
		let citiesData = await DPServices.loadCitiesData();
		return citiesData;
	}
);

// Отправка итоговых данных формы на сервер. 
// Вызывается в компоненте CheckAndOrder.jsx, оттуда же получает данные для отправки
// Использует асинх. запрос к серверу, вынесенный в отдельный файл DeliveryPageServices.js
export const sendData = createAsyncThunk(
	"DeliveryPageReducer/sendFormData",
	async function(data) {
		const DPServices = new DP_Services();
		await DPServices.sendFormData(data);
	}
)

// Слайс с редьюсером, стейтом, экстра редьюсерами.
const DP_Slice = createSlice({
	name: "DeliveryPageReducer",
	initialState: {
		page: {
			isLoading: true,
			error: false
		},	
		citiesData: null,
		orderSendingStatus: '',
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
		setPage(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('isLoading')) {
				state.page.isLoading = action.payload.isLoading;
			}			
			if (incoming.includes('error')) {
				state.page.error = action.payload.error;
			}
		},
		setOrderSendingStatus(state, action) {
			state.orderSendingStatus = action.payload;
		},
		setCity(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('value')) {
				state.city.value = action.payload.value;
			}			
			if (incoming.includes('error')) {
				state.city.error = action.payload.error;
			}
		},
		setPickupAddress(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('value')) {
				state.pickupAddress.value = action.payload.value;
			}			
			if (incoming.includes('error')) {
				state.pickupAddress.error = action.payload.error;
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
			}			
			if (incoming.includes('error')) {
				state.card.error = action.payload.error;
			}
		},
		setPhone(state, action) {
			const incoming = Object.keys(action.payload);
			if (incoming.includes('value')) {
				state.phone.value = action.payload.value;
			}			
			if (incoming.includes('error')) {
				state.phone.error = action.payload.error;
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
			}			
			if (incoming.includes('error')) {
				state.deliveryTime.error = action.payload.error;
			}
		},
	},
	extraReducers: {		
		[initializePage.error]: (state) => {
			state.page.error = true;
		},
		[initializePage.fulfilled]: (state, action) => {
			state.citiesData = action.payload;
			state.page.isLoading = false;
			state.page.error = false;
		},
		[sendData.pending]: (state) => {
			state.orderSendingStatus = 'pending';
		},
		[sendData.rejected]: (state) => {
			state.orderSendingStatus = 'error';			
		},
		[sendData.fulfilled]: (state) => {
			state.orderSendingStatus = 'success';
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

// Экспорт редьюсера из слайса.
export const DP_Reducer = DP_Slice.reducer;
// Экспорт экшенов из слайса.
export const {	
	setPage,
	setOrderSendingStatus,
	setCity,
	setPickupAddress,
	setPaymentType,
	setCard,	
	setPhone,
	setDelAddress,
	setDeliveryDate,
	setDeliveryTime,
} = DP_Slice.actions;

// Создание и экспорт единого главного редьюсера из нескольких обычных редьюсеров.
export const DeliveryPageReducer = combineReducers({
	DP_Reducer,
	ST_Reducer,
});