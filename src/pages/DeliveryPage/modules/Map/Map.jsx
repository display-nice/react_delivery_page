import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./leaflet.css";
import {
	MapContainer,
	TileLayer,
	useMap,
	Marker,
	Tooltip,
} from "react-leaflet";
import { GetDeliveryPoints } from "@deliveryPage/DeliveryPageServices.js";
import { setPickupAddress } from "@deliveryPage/DeliveryPageReducer.js";

// Размеры зума, вспомогательные константы
const zoomToCity = 10;
const zoomToMarker = 15;

// Вспомогательная функция
// Вычисляет среднее арифметическое координат точек доставки по городу
// Позволяет всегда показывать все точки на карте в поле зрения
function findCenter(deliveryPoints) {
	let latitude = 0,
		longitude = 0,
		centerCoords = [];
	for (let i = 0; i < deliveryPoints.length; ++i) {
		latitude += deliveryPoints[i].coordinates[0];
		longitude += deliveryPoints[i].coordinates[1];
		if (i + 1 === deliveryPoints.length) {
			latitude = Number((latitude / deliveryPoints.length).toFixed(6));
			longitude = Number((longitude / deliveryPoints.length).toFixed(6));
			centerCoords.push(latitude, longitude);
		}
	}
	return centerCoords;
}

// Основной компонент, в котором используется карта
function MyMapComponent() {
	const dispatch = useDispatch();
	const map = useMap();
	const activeCity = useSelector((state) => state.DP_Reducer.activeCity);
	const activeAddress = useSelector((state) => state.DP_Reducer.pickupAddress.address);
	const deliveryPoints = GetDeliveryPoints();

	// При изменении активного города показывает этот город
	useEffect(() => {
		moveToActiveCity();
		// eslint-disable-next-line
	}, [activeCity]);

	function moveToActiveCity() {
		let center = findCenter(deliveryPoints);
		map.panTo(center, zoomToCity);
		map.setZoomAround(center, zoomToCity)
	}

	// Создаёт маркеры
	function createMarkers() {
		let markers = deliveryPoints.map((point) => {
			let key = "marker_" + activeCity + "_" + point.address;

			// Переносит карту к координатам выбранной в инпуте точки
			if (activeAddress === point.address) {
				map.flyTo(point.coordinates, zoomToMarker);
			}

			return (
				<Marker
					key={key}
					position={point.coordinates}
					eventHandlers={{
						// При клике на маркер передвигает карту к адресу и устанавливает адрес в стейт
						click: () => {
							map.flyTo(point.coordinates, zoomToMarker);
							dispatch(setPickupAddress({address: point.address}));
						},
					}}
				>
					<Tooltip>
						г. {activeCity},<br></br>
						{point.address}
					</Tooltip>
				</Marker>
			);
		});
		return markers;
	}

	return (
		<>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				// В урле можно подставить любую другую карту
				url="http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}"
			/>
			{createMarkers()}
		</>
	);
}

// Обёрточный компонент MapContainer для карты. Обязателен.
export const Map = () => {
	const deliveryPoints = GetDeliveryPoints();
	return (
		<MapContainer
			center={findCenter(deliveryPoints)}
			zoom={zoomToCity}
			scrollWheelZoom={true}
		>
			<MyMapComponent />
		</MapContainer>
	);
};
