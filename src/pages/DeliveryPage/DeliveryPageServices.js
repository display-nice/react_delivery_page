import { db as demo_localCitiesData } from "../../db.js";

export class DP_Services {
	
	loadCitiesData = async () => {
		// const response = await fetch(``);
		// if (!response.ok) {
		// 	throw new Error(`Network or server error, try again later`);
		// }
		// return await response.json();

		// демонстрационная локальная база данных
		return demo_localCitiesData;
	};

	sendFormData = async (data) => {
		// const response = await fetch(
		// 	"",
		// 	{
		// 		method: "POST",
		// 		body: JSON.stringify(data),
		// 		headers: {
		// 			"Content-type": "application/json",
		// 		},
		// 	}
		// );
		// if (!response.ok) {
		// 	throw new Error(`Network or server error, try again later`);
		// }		
		// await response
		// 	.json()
		// 	.then((json) => console.log("ответ от сервера: ", json));
		console.log("DeliveryPageServices.js, sendFormData, отправлены данные: ", data);
	};
}