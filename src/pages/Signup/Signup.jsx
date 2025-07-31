import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from './style';

function SignUp() {
     const savedEmails = ['user1@example.com', 'user2@example.com', 'admin@company.com'];
  const [email, setEmail] = useState('');

  const handleSelectChange = (e) => {
    const selectedEmail = e.target.value;
    if (selectedEmail !== '') {
      setEmail(selectedEmail);
    }
  };
  return (
    <>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5001 7L10.5001 14L17.5001 21" stroke="#FE6868" stroke-width="2"/>
        </svg>
        <div css={s.start_text}>
            <p css={s.subtitle}>1/3</p>
            <h1 css={s.title}>닉네임을 정해볼까요?</h1>
            <p css={s.subtitle}>닉네임은 언제든지 변경 가능해요.</p>
        </div>
        <div css={s.inputbox}>
            <input css={s.input} type="text" placeholder='두 글자 이상 입력해주세요.'/>
        </div>
        <button css={s.login_button}>다음</button>
    </>

    
  )
}

export default SignUp