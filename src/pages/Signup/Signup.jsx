import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from './style';
import CommonPage from '../../components/CommonPage/CommonPage';
import Header from '../../components/CommonPage/Header/Header';
import CategorySelect from '../../components/Category'; // 카테고리 컴포넌트 추가
import { useNavigate } from 'react-router-dom';

const [selectedCategory, setSelectedCategory] = useState(''); // 카테고리 상태정의

const texts = {
  // texts 객체도 SignUp 안에서 접근 가능하도록 선언
  signup: [
    {title: "닉네임을 정해볼까요? ", subtitle: "닉네임은 언제든지 변경 가능해요.", placeholder: "두 글자 이상 입력해주세요."},
    {title: "이메일을 입력해주세요.", subtitle: "이메일 인증은 한번만 필요해요.", placeholder: "example@example.com"},
    {title: "비밀번호를 입력해주세요.", subtitle: "거의 다왔어요! 신중하게 정해주세요!", placeholder: "영문+숫자+특수문자 포함 8자 이상"},
    {title: "이제 가게를 등록해볼까요?", subtitle: "가게 주소를 입력해주세요.", placeholder: "ex) 부산시 부산진구 동의로..."},
    {title: "연락처를 입력해주세요.", subtitle: "가게 연락처 및 사장님 연락처를 남겨주세요.", placeholder: "010-0000-0000"},
    {title: "카테고리를 선택해주세요.", subtitle: "가게 업종을 선택해주세요.", placeholder: "한식 / 카페 / 편의점 ..."},
  ],
};

function SignUp({ role, page, setPage }) {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const maxLength = 10;

  const [address, setAddress] = useState('');

  const openPostcode = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        setAddress(data.address); // 도로명 주소 저장
      },
      onclose: (state) => {
        // 사용자가 ESC나 취소 버튼 등으로 닫은 경우
        if (state === 'FORCE_CLOSE') {
          setAddress(''); // 주소 초기화
        }
      },
      width: 390,
      height: 780,
      left: 615, // 원하는 가로 위치
      top: 150
    }).open();
  };
  useEffect(() => {
    setPage(1); // 처음 진입 시에만 초기화
  }, []);
  
  const savedEmails = ['user1@example.com', 'user2@example.com', 'admin@company.com'];
  const [email, setEmail] = useState('');

  const handleSelectChange = (e) => {
    const selectedEmail = e.target.value;
    if (selectedEmail !== '') {
      setEmail(selectedEmail);
    }
  };

  const currentPlaceholder = texts.signup[page - 1]?.placeholder || "";

  return (
    <>
      <CommonPage text={"다음"} maxpage={role === "user" ? 3 : 6} page={page} setPage={setPage}>
        <Header page={"signup"} index={page} />
        <div css={s.inputbox}>
          {
            page == 1? 
            <>
              <input 
                css={s.input}
                type="text"
                name='nickname'
                placeholder={currentPlaceholder}
                maxLength={maxLength}
                onChange={(e) => setText(e.target.value)}
              />
              <span css={s.line} style={{ color: "#999", paddingLeft: "50px"}}>{text.length} / {maxLength}</span>
              <div css={s.go_main}>
              <p>계정이 이미 있으신가요? 
                <span onClick={() => navigate('/eodiga')}> 메인으로 돌아가기</span>
              </p>
            </div>
            </>
            :
            page == 2?
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
            :
            page == 3?
            <>
            <input 
              css={s.input}
              style={{width: "100%"}}
              type="text"
              placeholder={currentPlaceholder}
            />
            <input 
              css={[s.input, s.input2]}
              style={{width: "100%"}}
              name='password'
              type="text"
              placeholder='입력하신 비밀번호를 한번더 입력해주세요.'
            />
            </>
            :
            page == 4?
            <>
              <div
                css={s.click_adress}
                value={address}
                onClick={openPostcode}
                readOnly
              >{
                address != ""?
                <span style={{marginLeft: "20px"}}>{address}</span>
                :
                <>
                  <svg style={{ position: 'relative', top: 6, left: 3 }} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10.0834" cy="10.0833" r="5.5" stroke="#929292" stroke-width="1.04762"/>
                  <path d="M10.0834 7.33337C9.72224 7.33337 9.36464 7.4045 9.03099 7.54271C8.69735 7.68091 8.39419 7.88347 8.13883 8.13883C7.88347 8.39419 7.68091 8.69735 7.54271 9.03099C7.4045 9.36464 7.33337 9.72224 7.33337 10.0834" stroke="#929292" stroke-width="1.04762" stroke-linecap="round"/>
                  <path d="M18.3334 18.3333L15.5834 15.5833" stroke="#929292" stroke-width="1.04762" stroke-linecap="round"/>
                  </svg>
                  <span style={{marginLeft: "10px", marginBottom: "10px", color: "#aaa", fontSize: "15px"}}>
                    도로명 주소를 클릭해서 검색하세요
                  </span>
                </>
              }
              </div>
                <input 
                  css={s.input}
                  style={{width: "100%"}}
                  name='adress'
                  type="text"
                  placeholder='상세주소를 입력해주세요.'
              />
              </>
            :
            page == 5?
            <input type="text" css={s.input} style={{width: "100%"}} placeholder={currentPlaceholder}/>
            :
            page == 6? // 카테고리 추가했는데 이게 맞는지 모르겠네 삼항 연산자로 쭉 이어주라는데 보고 아닌 거 같으면 수정해죠
            <CategorySelect selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            :
            <></>
          }
        </div>
      </CommonPage>
    </>
  )
}

export default SignUp;
