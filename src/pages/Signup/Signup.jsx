import React, { useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from './style';
import CommonPage from '../../components/CommonPage/CommonPage';
import Header from '../../components/CommonPage/Header/Header';
import { useNavigate } from 'react-router-dom';

const texts = {
  signup: [
    { title: "닉네임을 정해볼까요? ", subtitle: "닉네임은 언제든지 변경 가능해요.", placeholder: "두 글자 이상 입력해주세요." },
    { title: "이메일을 입력해주세요.", subtitle: "이메일 인증은 한번만 필요해요.", placeholder: "example@example.com" },
    { title: "비밀번호를 입력해주세요.", subtitle: "거의 다왔어요! 신중하게 정해주세요!", placeholder: "영문+숫자+특수문자 포함 8자 이상" },
    { title: "이제 가게를 등록해볼까요?", subtitle: "가게 주소를 입력해주세요.", placeholder: "ex) 부산시 부산진구 동의로..." },
    { title: "연락처를 입력해주세요.", subtitle: "가게 연락처 및 사장님 연락처를 남겨주세요.", placeholder: "010-0000-0000" },
    { title: "카테고리를 선택해주세요.", subtitle: "가게 업종을 선택해주세요.", placeholder: "한식 / 카페 / 편의점 ..." },
  ],
};

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

  const openPostcode = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        setAddress(data.address);
      },
      onclose: (state) => {
        if (state === 'FORCE_CLOSE') {
          setAddress('');
        }
      },
      width: 390,
      height: 780,
      left: 615,
      top: 150
    }).open();
  };

  useEffect(() => {
    setPage(1);
  }, []);

  const currentPlaceholder = texts.signup[page - 1]?.placeholder || "";

  return (
    <>
      <CommonPage text={"다음"} maxpage={role === "user" ? 3 : 6} page={page} setPage={setPage}>
        <Header page={"signup"} index={page} />
        <div css={s.inputbox}>
          {page === 1 &&
            <>
              <input
                css={s.input}
                type="text"
                name='nickname'
                placeholder={currentPlaceholder}
                maxLength={maxLength}
                onChange={(e) => setText(e.target.value)}
              />
              <span css={s.line} style={{ color: "#999", paddingLeft: "50px" }}>{text.length} / {maxLength}</span>
              <div css={s.go_main}>
                <p>계정이 이미 있으신가요?
                  <span onClick={() => navigate('/eodiga')}> 메인으로 돌아가기</span>
                </p>
              </div>
            </>
          }

          {page === 2 &&
            <>
              <input
                css={s.input}
                type="text"
                name='email'
                placeholder={currentPlaceholder}
              />
              <select css={[s.select, s.line]} onChange={handleSelectChange}>
                <option value="">이메일선택</option>
                <option value="">@gmail.com</option>
                <option value="">@naver.com</option>
                <option value="">@daum.net</option>
              </select>
            </>
          }

          {page === 3 &&
            <>
              <input
                css={s.input}
                style={{ width: "100%" }}
                type="text"
                placeholder={currentPlaceholder}
              />
              <input
                css={[s.input, s.input2]}
                style={{ width: "100%" }}
                name='password'
                type="text"
                placeholder='입력하신 비밀번호를 한번더 입력해주세요.'
              />
            </>
          }

          {page === 4 &&
            <>
              <div
                css={s.click_adress}
                value={address}
                onClick={openPostcode}
                readOnly
              >
                {address !== "" ?
                  <span style={{ marginLeft: "20px" }}>{address}</span>
                  :
                  <>
                    <svg style={{ position: 'relative', top: 6, left: 3 }} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10.0834" cy="10.0833" r="5.5" stroke="#929292" strokeWidth="1.04762" />
                      <path d="M10.0834 7.33337C9.72224 7.33337 9.36464 7.4045 9.03099 7.54271C8.69735 7.68091 8.39419 7.88347 8.13883 8.13883C7.88347 8.39419 7.68091 8.69735 7.54271 9.03099C7.4045 9.36464 7.33337 9.72224 7.33337 10.0834" stroke="#929292" strokeWidth="1.04762" strokeLinecap="round" />
                      <path d="M18.3334 18.3333L15.5834 15.5833" stroke="#929292" strokeWidth="1.04762" strokeLinecap="round" />
                    </svg>
                    <span style={{ marginLeft: "10px", marginBottom: "10px", color: "#aaa", fontSize: "15px" }}>
                      도로명 주소를 클릭해서 검색하세요
                    </span>
                  </>
                }
              </div>
              <input
                css={s.input}
                style={{ width: "100%" }}
                name='adress'
                type="text"
                placeholder='상세주소를 입력해주세요.'
              />
            </>
          }

          {page === 5 &&
            <input type="text" css={s.input} style={{ width: "100%" }} placeholder={currentPlaceholder} />
          }

          {page === 6 &&
            <>
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
            </>
          }
        </div>
      </CommonPage>
    </>
  );
}

export default SignUp;
