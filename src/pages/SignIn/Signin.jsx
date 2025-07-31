import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from './style';
import CommonPage from '../../components/CommonPage/CommonPage';
import Header from '../../components/CommonPage/Header/Header';

function Signin({ page, setPage }) {
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

  return (
    <>
      <CommonPage text={"다음"} maxpage={2} page={page} setPage={setPage}>
        <Header page={"signin"} index={page} />
        <div css={s.inputbox}>
          <input css={s.input} type="text" placeholder='example@' />
          <select css={s.select} onChange={handleSelectChange}>
            <option value="">이메일선택</option>
            <option value="">@gmail.com</option>
            <option value="">@naver.com</option>
            <option value="">@daum.net</option>
          </select>
        </div>
      </CommonPage>
    </>
  )
}

export default Signin
