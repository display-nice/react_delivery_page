import React, { useEffect } from 'react'

// import { load } from '@2gis/mapgl';
import DG from '2gis-maps';

const MapWrapper = React.memo(
	() => {
		 return <div id="map-container" style={{ width: '768px', height: '400px' }}></div>;
	},
	() => true,
);

export const Map = () => {
    useEffect(() => {
        let map;
        map = DG.map('map-container', {
            center: [59.848325, 30.256839],
            zoom: 11
        })
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