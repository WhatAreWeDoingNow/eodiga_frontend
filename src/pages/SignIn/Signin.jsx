import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from './style';
import { useNavigate } from 'react-router-dom';
import CommonPage from '../../components/CommonPage/CommonPage';
import Header from '../../components/Header/Header';
import Email from '../../components/Input/Email/Email';
import Password from '../../components/Input/Password/Password';

function Signin({ page, setPage }) {

  const navigate = useNavigate();
  
  useEffect(() => {
    setPage(1); // 처음 진입 시에만 초기화
  }, []);

  const maxLength = 2; // 최대 페이지 수

  const savedEmails = ['user1@example.com', 'user2@example.com', 'admin@company.com'];
  const [selectedDomain, setSelectedDomain] = useState('');
  const [email, setEmail] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
      setInputValue('');
    }, [page]);

  const handleSelectChange = (e) => {
    const selectedEmail = e.target.value;
    if (selectedEmail !== '') {
      setEmail(selectedEmail);
    }
  };

  const handleNext = () => {
    // 페이지 이동
    if (page < maxLength) {
      setPage(page + 1);
    } else {
      navigate('/eodiga');
    }
  };

  return (
    <>
      <CommonPage text={"다음"} maxpage={2} page={page} setPage={setPage} onNext={handleNext}>
        <Header page={"signin"} index={page} />
        {
          page == 1 &&
          <Email inputValue={inputValue} setInputValue={setInputValue} setSelectedDomain={setSelectedDomain} onChange={handleSelectChange}/>
        }
        {
          page == 2 &&
          <Password value={password} setValue={setPassword} />
        }
      </CommonPage>
    </>
  )
}

export default Signin
