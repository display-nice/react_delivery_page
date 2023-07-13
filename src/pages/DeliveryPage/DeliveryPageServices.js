// import { db as localTestCitiesData } from "../../db";

export class DP_Services {
	
	loadCitiesData = async () => {
		const response = await fetch(`https://mock.pages.academy/delivery/db`);
		if (!response.ok) {
			throw new Error(`Network or server error, try again later`);
		}
		// тестовая локальная база данных, чтобы не кошмарить сервер при разработке
		// const response = localTestCitiesData;
		return await response.json();
	};

	sendFormData = async (data) => {
		const response = await fetch(
			"https://mock.pages.academy/delivery/requests",
			{
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-type": "application/json",
				},
			}
		);
		if (!response.ok) {
			throw new Error(`Network or server error, try again later`);
		}
		// Специально для демонстрации оставил этот консольлог
		await response
			.json()
			.then((json) => console.log("ответ от сервера: ", json));
	};
}