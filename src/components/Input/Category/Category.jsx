/** @jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from 'react'

const categoryData = {
  "길거리 / 분식 / 음식": ["떡볶이 / 순대 / 튀김", "핫도그 / 꼬치", "분식 푸드트럭", "기타 길거리 푸드트럭"],
  "음식 / 카페 / 디저트": ["소형 한식당", "분점 미문영 카페", "디저트 (버블티 / 빙수)", "베이커리 / 디저트 포장"],
  "주점 / 간이음료": ["맥주집 / 호프", "작은 와인바 / 칵테일바", "전통주 전문점"],
  "소매 / 편집숍 / 소품샵": ["의류 편집숍 (빈티지 / 리셀)", "액세서리 / 잡화", "중고서점 / 음반가게", "라이프스타일 소품샵 (굿즈, 인테리어, 소품)"],
  "공예 / 수공예 / 공방": ["도예 / 도자공방", "목공 / 가구리폼", "캔들 / 향초공방", "자수 / 뜨개공방"],
  "생활서비스 / 수선": ["의류 수선 / 재봉", "신발 / 가방수선", "열쇠 / 자물쇠수리", "가전 / 전자소형 수리"],
  "문화 / 체험 / 교육": ["소규모 음악 / 댄스학원", "공예 체험교실", "영화 상영 / 팝업 시어터", "팝업마켓 / 플리마켓"],
  "편의 / 기타": ["동네 편의점 / 생활용품점", "키즈카페 / 놀이방", "반려동물 용품 / 돌봄", "무인 키오스크"],
};


function Category() {
    const [selectedTopCategory, setSelectedTopCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const handleTopCategoryChange = (e) => {
    setSelectedTopCategory(e.target.value);
    setSelectedSubCategory(""); // 하위카테고리 초기화
  };
    return (
        <div css={s.container}>
        <select
        css={[s.select, s.line]}
        value={selectedTopCategory}
        onChange={handleTopCategoryChange}
        >
        <option value="">상위 카테고리 선택</option>
        {Object.keys(categoryData).map((category) => (
            <option key={category} value={category}>{category}</option>
        ))}
        </select>

        {selectedTopCategory && (
        <select
            css={[s.select, s.line]}
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
        >
            <option value="">하위 카테고리 선택</option>
            {categoryData[selectedTopCategory].map((sub) => (
            <option key={sub} value={sub}>{sub}</option>
            ))}
        </select>
        )}
    </div>
    )
}

export default Category