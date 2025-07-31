import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from './style';
import CommonPage from '../../components/CommonPage/CommonPage';

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
        <CommonPage text={"다음"}>
          <div css={s.start_text}>
              <h1 css={s.title}>닉네임을 정해볼까요?</h1>
              <p css={s.subtitle}>닉네임은 언제든지 변경 가능해요.</p>
          </div>
          <div css={s.inputbox}>
              <input css={s.input} type="text" placeholder='두 글자 이상 입력해주세요.'/>
          </div>
        </CommonPage>
    </>

    
  )
}

export default SignUp