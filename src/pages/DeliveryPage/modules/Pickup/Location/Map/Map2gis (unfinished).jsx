import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

// import { load } from '@2gis/mapgl';
import DG from '2gis-maps';

const MapWrapper = React.memo(
	() => {
		 return <div id="map-container" style={{ width: '768px', height: '400px' }}></div>;
	},
	() => true,
);

export const Map = () => {
    const globalCitiesData = useSelector((state) => state.DP_Reducer.citiesData);
    const activeCity = useSelector((state) => state.PM_Reducer.activeCity);
    
    useEffect(() => {
        let map;
        map = DG.map('map-container', {
            center: [59.848325, 30.256839],
            zoom: 11
        })

        const showPickupPointsOnMap = function() {
            const deliveryPoints = globalCitiesData.cities.find(
                (item) => item["city"] === activeCity
            )["delivery-points"];
            let array = []; // создаём пустой массив для координат
            deliveryPoints.forEach(object => { // записываем в него координаты всех точек доставки
                array.push(object['coordinates']); // получается массив с массивами
            });
            console.log(array);
            DG.then(function() { // DG.then - специальный объект АПИ 2ГИС, все методы для карты работают ТОЛЬКО в нём
                let allCityMarkers = DG.featureGroup(); // объявляем переменную для группы маркеров
                allCityMarkers.removeFrom(map); // удаляем с карты все ранее созданные маркеры
                array.forEach(coordinates => { // разбираем массив с координатами
                    DG.marker([coordinates[0], coordinates[1]]).addTo(allCityMarkers);
                });
                allCityMarkers.addTo(map); // добавляем все маркеры на карту
                map.fitBounds(allCityMarkers.getBounds()); // умещаем все точки на карте сразу
                map.zoomOut(1); // уменьшаем масштаб эквивалентно 1 нажатию кнопки "минус"
            });
        }
        showPickupPointsOnMap();
        
        return () => map && map.remove();
    }, [])


    return (
        <div style={{ width: '100%', height: '100%' }} >            
            <MapWrapper/>
        </div>
    )
}

// // Создание точек доставки
// let newPoints = [];
// // создаём пустой массив для координат
// deliveryPoints.forEach((object) => {
// 	// записываем в него координаты всех точек доставки
// 	mapPoints.push(object["coordinates"]); // получается массив с массивами
// });
// // setPoints(newPoints)
// console.log(mapPoints);

// function showPointsOnMap() {
// 	console.log("now i see points");
// }
// function moveToPoint() {
// 	console.log("moved to point");
// }

// export const Map = () => {
//     useEffect(() => {
//         let map;
//         load().then((mapglAPI) => {
//             map = new mapglAPI.Map('map-container', {
//                 center: [59.848325, 30.256839],
//                 zoom: 11,
//                 key: 'rubnkm7490',
//             });
//         });

//         // Удаляем карту при размонтировании компонента
//         return () => map && map.destroy();
//     }, []);

//     return (
//         <div style={{ width: '100%', height: '100%' }}>
//             <MapWrapper />
//         </div>
//     );
// };