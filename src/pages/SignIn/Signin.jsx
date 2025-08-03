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

  const savedUsers = [
  { name: '안성해', email: 'ahshss903@naver.com', password: 'test' },
  { name: '김정현', email: 'kimjh597@naver.com', password: 'test1' },
  { name: '김영택', email: 'admin@company.com', password: 'test2' },
];

  const [selectedDomain, setSelectedDomain] = useState('');
  const [email, setEmail] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');
  const [fullEmail, setFullEmail] = useState('');

useEffect(() => {
  if (selectedDomain === 'custom' || selectedDomain === '') {
    setFullEmail(inputValue);
  } else {
    setFullEmail(inputValue + selectedDomain);
  }
}, [inputValue, selectedDomain]);


  const handleNext = () => {
  if (page < maxLength) {
    setPage(page + 1);
    return;
  }

  const fullEmail = (selectedDomain === 'custom' || selectedDomain === '')
    ? inputValue
    : inputValue + selectedDomain;

  const user = savedUsers.find(u => u.email === fullEmail && u.password === password);

  console.log('입력된 이메일:', fullEmail);
  console.log('입력된 비밀번호:', password);

  if (user) {
    console.log('유저닉네임:', user.name);
    navigate('/main/home');
  } else {
    alert('이메일 또는 비밀번호가 잘못되었습니다.');
  }
};



  return (
    <>
      <CommonPage text={"다음"} maxpage={2} page={page} setPage={setPage} onNext={handleNext}>
        <Header page={"signin"} index={page} />
        {
          page == 1 &&
          <Email
    inputValue={inputValue}
    setInputValue={setInputValue}
    selectedDomain={selectedDomain}
    setSelectedDomain={setSelectedDomain}
  />
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
