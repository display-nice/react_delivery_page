import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPickupAddress } from "@deliveryPage/DeliveryPageReducer.js";

import "./leaflet.css";
import {
	MapContainer,
	TileLayer,
	useMap,
	Marker,
	Tooltip,
} from "react-leaflet";

// Этот блок обходит баг с импортом иконок в Лефлете, когда иконки теряются, если они не размещены в корне
// Здесь происходит подмена путей
import markerIcon from './images/marker-icon.png';
import markerIcon2x from './images/marker-icon-2x.png';
import markerShadow from './images/marker-shadow.png';
import layers from './images/layers.png';
import layers2x from './images/layers-2x.png';
import L from 'leaflet';
let DefaultIcon = L.icon({
	iconUrl: markerIcon,
	markerIcon2xUrl: markerIcon2x,
	markerShadowUrl: markerShadow,
	layersUrl: layers,
	layers2xUrl: layers2x
});
L.Marker.prototype.options.icon = DefaultIcon;


// Размеры зума, вспомогательные константы
const zoomToCity = 10;
const zoomToMarker = 15;

// Вспомогательный функциональный компонент
// Получает точки доставки из данных о городах, полученных ранее с сервера
function GetDeliveryPoints() {
	const globalCitiesData = useSelector((state) => state.DP_Reducer.citiesData);
	const activeCity = useSelector((state) => state.DP_Reducer.city.value);
	const deliveryPoints = globalCitiesData.cities.find(
		(item) => item["city"] === activeCity
	)["delivery-points"];
	return deliveryPoints;
}

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
	const activeCity = useSelector((state) => state.DP_Reducer.city.value);
	const activeAddress = useSelector((state) => state.DP_Reducer.pickupAddress.value);
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
							dispatch(setPickupAddress({value: point.address}));
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
				// В урле можно подставить любую другую карту, гугл или яндекс например
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
