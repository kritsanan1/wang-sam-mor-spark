
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Navigation } from 'lucide-react';

interface MapComponentProps {
  selectedDestination: {
    name: string;
    coordinates: [number, number];
  } | null;
}

const MapComponent: React.FC<MapComponentProps> = ({ selectedDestination }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  // กำหนดตำแหน่งเริ่มต้นที่วังสามหมอ อุดรธานี
  const defaultCenter: [number, number] = [103.2507, 17.3077];

  useEffect(() => {
    // Input สำหรับ Mapbox token ในกรณีที่ไม่มี API key จาก environment
    if (!mapboxToken) return;

    if (map.current) return; // สร้างแผนที่เพียงครั้งเดียว
    
    mapboxgl.accessToken = mapboxToken;
    
    // สร้างแผนที่
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: userLocation || defaultCenter,
      zoom: userLocation ? 13 : 10,
    });

    // เพิ่มปุ่มควบคุมการนำทาง
    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    map.current.addControl(new mapboxgl.ScaleControl(), 'bottom-left');

    // เพิ่มปุ่มค้นหาตำแหน่งของผู้ใช้
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      }),
      'top-right'
    );

    // สร้างมาร์กเกอร์สำหรับสถานที่ท่องเที่ยวต่างๆ ในวังสามหมอ
    const attractions = [
      { name: "ทุ่งดอกกระเจียว", coordinates: [103.2707, 17.3277] },
      { name: "ผาแดง", coordinates: [103.2307, 17.2977] },
      { name: "น้ำตกวังสามหมอ", coordinates: [103.2607, 17.3177] },
    ];

    attractions.forEach(attraction => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.innerHTML = `<div class="bg-wang-orange p-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>`;
      
      el.addEventListener('click', () => {
        map.current?.flyTo({
          center: attraction.coordinates as [number, number],
          zoom: 15,
          speed: 1.5
        });
      });

      // สร้าง popup สำหรับแต่ละสถานที่
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3 class="font-bold text-lg">${attraction.name}</h3>
         <p class="text-sm">คลิกเพื่อดูรายละเอียดการเดินทาง</p>`
      );

      new mapboxgl.Marker(el)
        .setLngLat(attraction.coordinates as [number, number])
        .setPopup(popup)
        .addTo(map.current!);
    });

    // เมื่อแผนที่โหลดเสร็จ
    map.current.on('load', () => {
      // สร้าง Source และ Layer สำหรับเส้นทาง
      map.current?.addSource('route', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      map.current?.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#FF6B00',
          'line-width': 5,
          'line-opacity': 0.75
        }
      });
    });

    // ขอตำแหน่งของผู้ใช้
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setUserLocation([longitude, latitude]);
          
          if (map.current) {
            map.current.flyTo({
              center: [longitude, latitude],
              zoom: 13,
              speed: 1.5
            });

            // เพิ่มมาร์กเกอร์ตำแหน่งของผู้ใช้
            const el = document.createElement('div');
            el.className = 'user-marker';
            el.innerHTML = `<div class="bg-blue-500 p-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-navigation"><circle cx="12" cy="12" r="2"/><path d="m12 19 6-6.5-6-6.5-6 6.5z"/></svg></div>`;

            new mapboxgl.Marker(el)
              .setLngLat([longitude, latitude])
              .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<p>ตำแหน่งของคุณ</p>'))
              .addTo(map.current);
          }
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  // อัปเดตเส้นทางเมื่อเลือกสถานที่ปลายทาง
  useEffect(() => {
    if (!map.current || !selectedDestination || !userLocation) return;

    // จำลองการแสดงเส้นทาง (ในการใช้งานจริง ควรใช้ Directions API)
    const directionsSource = map.current.getSource('route') as mapboxgl.GeoJSONSource;
    if (directionsSource) {
      // สร้างเส้นทางจำลองโดยใช้เส้นตรง
      directionsSource.setData({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [
            userLocation,
            selectedDestination.coordinates
          ]
        }
      });

      // ปรับมุมมองให้เห็นทั้งตำแหน่งผู้ใช้และปลายทาง
      const bounds = new mapboxgl.LngLatBounds()
        .extend(userLocation)
        .extend(selectedDestination.coordinates);

      map.current.fitBounds(bounds, {
        padding: 80,
        maxZoom: 15
      });
    }
  }, [selectedDestination, userLocation]);

  return (
    <div className="relative w-full h-full">
      {!mapboxToken && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-4">
          <p className="text-gray-600 mb-4 text-center">
            กรุณาใส่ Mapbox token เพื่อแสดงแผนที่
          </p>
          <input
            type="text"
            placeholder="ใส่ Mapbox token ของคุณ"
            className="w-full max-w-md px-4 py-2 border rounded mb-2"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-xs text-gray-500 text-center">
            ค้นหา token ได้ที่ <a href="https://account.mapbox.com" className="text-blue-500 underline" target="_blank" rel="noreferrer">account.mapbox.com</a>
          </p>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-full" />

      {/* คำอธิบายการใช้งาน */}
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-3 rounded-lg shadow-md max-w-xs">
        <h3 className="font-bold text-sm mb-1 flex items-center">
          <MapPin className="w-4 h-4 mr-1 text-wang-orange" />
          <span>คำแนะนำ:</span>
        </h3>
        <ul className="text-xs text-gray-700">
          <li className="mb-1">• คลิกที่หมุดสีส้มเพื่อดูข้อมูลสถานที่</li>
          <li className="mb-1">• เลือกสถานที่จากเมนูด้านซ้ายเพื่อดูเส้นทาง</li>
          <li>• ใช้ปุ่มด้านบนขวาเพื่อค้นหาตำแหน่งของคุณ</li>
        </ul>
      </div>
    </div>
  );
};

export default MapComponent;
