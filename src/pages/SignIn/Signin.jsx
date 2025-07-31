import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from './style';

function Signin() {
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
            <p css={s.subtitle}>1/2</p>
            <h1 css={s.title}>다시 만나게 되어 반가워요!</h1>
            <p css={s.subtitle}>회원가입 하실때 사용하셨던<br/>이메일을 입력해주세요.</p>
        </div>
        <div css={s.inputbox}>
            <input css={s.input} type="text" placeholder='example@'/>
            <select css={s.select} name="" id="">
                <option  value="">이메일선택</option>
            </select>
        </div>
        <button css={s.login_button}>다음</button>
    </>

    
  )
}

export default Signin