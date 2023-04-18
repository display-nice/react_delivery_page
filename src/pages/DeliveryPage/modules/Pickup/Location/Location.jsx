import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Cities } from "./Cities";
import { Addresses } from "./Addresses";
import { Map } from "./Map";
import { initializePage } from "@deliveryPage/DeliveryPageReducer.js"


export const Location = () => {
	const pageIsLoading = useSelector((state) => state.DP_Reducer.pageIsLoading);
	const citiesDataIsLoading = useSelector((state) => state.DP_Reducer.citiesDataIsLoading);

	const dispatch = useDispatch();

	// Инициализация страницы
	useEffect(() => {
		dispatch(initializePage())
	}, [])	

	if (citiesDataIsLoading && pageIsLoading) {
		return null;
	}

	console.log("пошла отрисовка");
	return (		
		<React.Fragment>
			<Cities />
			<Addresses/>
			<Map />
		</React.Fragment>
	);
	
};

// Пример анонимной самовызывающейся асинхронной функции
// (async () => {
// 	console.log("pageIsLoading...");
// 	let citiesData = await DPServices.loadCitiesData();
// 	dispatch(setCitiesData(citiesData));
// 	createPickupAddresses('led');
// 	dispatch(pageIsLoaded());			
// })();