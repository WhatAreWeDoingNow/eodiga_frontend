/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import KakaoMap from '../../components/KaKaoMap/KakaoMap'; // KakaoMap 경로 확인 필요

// 위치 데이터
const locationData = {
  연인과: [
    { id: 1, lat: 35.1548848, lng: 129.06603, title: '고원', category: '연인과' },
    { id: 2, lat: 35.155586, lng: 129.065980, title: '맥주를 구한 피자', category: '연인과' },
  ],
  아기와: [
    { id: 3, lat: 35.155811, lng: 129.066147, title: '전포사잇길', category: '아기와' },
  ],
  카페: [
    { id: 4, lat: 35.15642, lng: 129.066997, title: '프루토푸르타', category: '카페' },
    { id: 5, lat: 35.156742, lng: 129.068091, title: '몬티', category: '카페' },
  ],
};

// 카테고리별 스타일 및 아이콘
const categoryStyles = {
  연인과: {
    color: '#FF6B6B',
    backgroundColor: '#FFEDED',
    icon: '../../src/assets/heart.png', // 실제 경로로 변경하세요
  },
  아기와: {
    color: '#4ECDC4',
    backgroundColor: '#E0FFF9',
    icon: '../../src/assets/baby.png',
  },
  카페: {
    color: '#556270',
    backgroundColor: '#F0F4F8',
    icon: '../../src/assets/shortcake.png',
  },
};

// 마커 이미지 경로 (KakaoMap 컴포넌트에 전달)
const markerImages = {
  연인과: '../../src/assets/marker_1.png',
  아기와: '../../src/assets/marker_2.png',
  카페: '../../src/assets/marker_3.png',
};

function Quest() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(item => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // 선택된 카테고리들의 위치 데이터만 모음
  const markers = selectedCategories.flatMap(cat => locationData[cat] || []);

  return (
    <div css={s.container}>
      <KakaoMap markers={markers} markerImages={markerImages} />

      <div css={s.inputWrap}>
        <div css={s.box}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10.0834"
              cy="10.083"
              r="5.5"
              stroke="#929292"
              strokeWidth="1.04762"
            />
            <path
              d="M10.0834 7.3335C9.72224 7.3335 9.36464 7.40463 9.03099 7.54283C8.69735 7.68103 8.39419 7.88359 8.13883 8.13895C7.88347 8.39431 7.68091 8.69747 7.54271 9.03112C7.4045 9.36476 7.33337 9.72236 7.33337 10.0835"
              stroke="#929292"
              strokeWidth="1.04762"
              strokeLinecap="round"
            />
            <path
              d="M18.3334 18.333L15.5834 15.583"
              stroke="#929292"
              strokeWidth="1.04762"
              strokeLinecap="round"
            />
          </svg>
          <input type="text" placeholder="장소 검색..." />
        </div>

        <div css={s.buttons}>
          {Object.keys(locationData).map(category => {
            const isSelected = selectedCategories.includes(category);
            const style = categoryStyles[category] || {};

            return (
              <div key={category} css={s.categorys}>
                <button
                  onClick={() => toggleCategory(category)}
                  style={{
                    backgroundColor: isSelected ? style.color : style.backgroundColor,
                    color: isSelected ? '#fff' : style.color,
                    border: `1px solid ${style.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={style.icon}
                    alt={`${category} icon`}
                    style={{ width: 20, height: 20, marginRight: 8 }}
                  />
                  <p>{category}</p>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Quest;
