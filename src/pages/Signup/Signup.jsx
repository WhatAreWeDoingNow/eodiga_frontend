import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from './style';
import CommonPage from '../../components/CommonPage/CommonPage';
import Header from '../../components/CommonPage/Header/Header';

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
          <input css={s.input} type="text" placeholder={currentPlaceholder} />
        </div>
      </CommonPage>
    </>
  )
}

export default SignUp;
