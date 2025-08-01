/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './style';

const categories = {
  음식: ['한식', '중식', '일식', '양식', '분식'],
  쇼핑: ['의류', '전자제품', '생활용품', '책'],
  문화: ['영화', '공연', '전시회', '체험'],
  스포츠: ['헬스', '축구', '농구', '배드민턴'],
};

export default function CategorySelect({ selectedCategory, setSelectedCategory }) {
  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const handleMainChange = (e) => {
    const main = e.target.value;
    setMainCategory(main);
    setSubCategory('');
    setSelectedCategory('');
  };

  const handleSubChange = (e) => {
    const sub = e.target.value;
    setSubCategory(sub);
    setSelectedCategory(sub);
  };

  return (
    <div css={s.wrapper}>
      <select value={mainCategory} onChange={handleMainChange} css={s.select}>
        <option value="">대분류 선택</option>
        {Object.keys(categories).map((main) => (
          <option key={main} value={main}>
            {main}
          </option>
        ))}
      </select>

      {mainCategory && (
        <select value={subCategory} onChange={handleSubChange} css={s.select}>
          <option value="">소분류 선택</option>
          {categories[mainCategory].map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      )}

      {subCategory && (
        <div css={s.selectedText}>
          선택한 카테고리: <strong>{subCategory}</strong>
        </div>
      )}
    </div>
  );
}