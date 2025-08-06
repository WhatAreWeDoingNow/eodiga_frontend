import React, { useEffect, useRef } from 'react';

function KakaoMap({ markers = [], markerImages = {} }) {
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=8450f73053305cbd2a9dd0c9a80d041a&autoload=false';
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(35.1554329, 129.0661274),
          level: 3,
        };

        mapRef.current = new window.kakao.maps.Map(container, options);
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      markersRef.current.forEach(m => m.setMap(null));
      markersRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !window.kakao || !window.kakao.maps) return;

    // 기존 마커 제거
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // 새 마커 생성
    markers.forEach(({ lat, lng, title, category, id }) => {
      let imageSrc = markerImages[category];

      const imageSize = new window.kakao.maps.Size(40, 40);
      const markerImage = imageSrc
        ? new window.kakao.maps.MarkerImage(imageSrc, imageSize)
        : null;

      const markerPosition = new window.kakao.maps.LatLng(lat, lng);
      const marker = new window.kakao.maps.Marker({
        map: mapRef.current,
        position: markerPosition,
        title,
        image: markerImage,
      });

      markersRef.current.push(marker);
    });
  }, [markers, markerImages]);

  return (
    <div
      id="map"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}

export default KakaoMap;
