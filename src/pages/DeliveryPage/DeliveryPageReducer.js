import { combineReducers } from "@reduxjs/toolkit";

import { DM_Reducer } from "@deliveryPage/modules/Delivery/DM_Reducer";
import { PM_Reducer } from "@deliveryPage/modules/Pickup/PM_Reducer";
import { ST_Reducer } from "@deliveryPage/modules/SwitchTabs/ST_Reducer";

export const DeliveryPageReducer = combineReducers({
	DM_Reducer,
	PM_Reducer,
	ST_Reducer
})