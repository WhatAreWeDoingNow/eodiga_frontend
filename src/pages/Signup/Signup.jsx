import React, { useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from './style';
import CommonPage from '../../components/CommonPage/CommonPage';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Email from '../../components/Input/Email/Email';
import Password from '../../components/Input/Password/Password';
import Nickname from '../../components/Input/Nickname/Nickname';
import Adress from '../../components/Input/Adress/Adress';
import Category from '../../components/Input/Category/Category';

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

function SignUp({ role, page, setPage }) {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [selectedTopCategory, setSelectedTopCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const maxLength = 10;
  const [address, setAddress] = useState('');
  const [inputValue,setInputValue] = useState('');
  const [email, setEmail] = useState('');

  const handleTopCategoryChange = (e) => {
    setSelectedTopCategory(e.target.value);
    setSelectedSubCategory(""); // 하위카테고리 초기화
  };

  const handleSelectChange = (e) => {
    const selectedEmail = e.target.value;
    if (selectedEmail !== '') {
      setEmail(selectedEmail);
    }
  };
  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <>
      <CommonPage text={"다음"} maxpage={role === "user" ? 3 : 6} page={page} setPage={setPage}>
        <Header page={"signup"} index={page} />
          {page === 1 &&

            <Nickname/>
          }

          {page === 2 &&
            <Email inputValue={inputValue} setInputValue={setInputValue} onChange={handleSelectChange}/>
          }

          {page === 3 &&
            <Password mode={1}/>
          }

          {page === 4 &&
            <Adress/>
          }

          {page === 5 &&
            <input type="text" style={{borderBottom: "2px solid #ff6b6b", marginTop: "auto"}} placeholder='010-0000-0000' />
          }

          {page === 6 &&
            <Category/>
          }
      </CommonPage>
    </>
  );
}

export default SignUp;
