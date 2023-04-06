import React from 'react';
import { SwitchTabs } from './modules/SwitchTabs/SwitchTabs';
import { DeliveryModule } from './modules/Delivery/DeliveryModule';
import { PickupModule } from './modules/Pickup/PickupModule';
// import { Hint } from './modules/Hint/HintModule';
// import Spinner from '@components/Spinner/Spinner.jsx';

class DeliveryPage extends React.Component {



	render() {
		return (		
			<>
				{/* <Hint /> */}
				{/* <div className="page-header"></div> */}
				<div className="wrapper">
					<main className="page-main">
						<h1 className="visually-hidden">
							Заказ доставки в интернет-магазине
						</h1>
						{/* <Spinner/> */}
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
}

export { DeliveryPage };
