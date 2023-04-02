import { configureStore } from "@reduxjs/toolkit";

import { DeliveryPageReducer } from "./pages/DeliveryPage/DeliveryPageReducer";

export const store = configureStore({
	reducer: DeliveryPageReducer,
})