import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from './style';
import CommonPage from '../../components/CommonPage/CommonPage';
import Header from '../../components/Header/Header';
import Email from '../../components/Input/Email/Email';
import Password from '../../components/Input/Password/Password';

function Signin({ page, setPage }) {
  useEffect(() => {
    setPage(1); // 처음 진입 시에만 초기화
  }, []);

  const savedEmails = ['user1@example.com', 'user2@example.com', 'admin@company.com'];
  const [email, setEmail] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
      setInputValue('');
    }, [page]);

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
        {
          page == 1 &&
          <Email inputValue={inputValue} setInputValue={setInputValue} onChange={handleSelectChange}/>
        }
        {
          page == 2 &&
          <Password/>
        }
      </CommonPage>
    </>
  )
}

export default Signin
