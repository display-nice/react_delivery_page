import React from 'react';
import { SwitchTabs } from './modules/SwitchTabs/SwitchTabs';
import { DeliveryModule } from './modules/Delivery/DeliveryModule';
import { PickupModule } from './modules/Pickup/PickupModule';
// import { Hint } from './modules/Hint/HintModule';
import Spinner from '@components/Spinner/Spinner.jsx';
import { useDispatch, useSelector } from "react-redux";

// import { DP_Services } from "@deliveryPage/DeliveryPageServices.js"
// import { pageIsLoaded, setCitiesData } from "@deliveryPage/DeliveryPageReducer";

const Content = () => {
	return (
		<>
			{/* <Hint /> */}
			{/* <div className="page-header"></div> */}
			<div className="wrapper">
				<main className="page-main">
					<h1 className="visually-hidden">
						Заказ доставки в интернет-магазине
					</h1>
					<div className="tabs-block">						
						<SwitchTabs/>					
						<div className="tabs-block__content">							
							<DeliveryModule/>
							<PickupModule/>
						</div>
					</div>
				</main>
			</div>
			{/* <script src="./js/script.js"></script> */}
		</>
	)
}

export const DeliveryPage = () => {
	const pageIsLoading = useSelector((state) => state.DP_Reducer.pageIsLoading);
	const pageError = useSelector((state) => state.DP_Reducer.pageError);
	
	const errorMessage = null;
	const showSpinner = pageIsLoading ? <Spinner /> : null;
	// const showContent = !(pageIsLoading || pageError) ? <Content /> : null;
	const showContent = <Content />;

	return (		
		<>	
			{/* {errorMessage} */}
			{/* {showSpinner} */}
			{showContent}
		</>
	)
	// if (!pageIsLoading) {

	// }
	
};
