import React, { useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from './style';
import CommonPage from '../../components/CommonPage/CommonPage';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Email from '../../components/Input/Email/Email';
import Password from '../../components/Input/Password/Password';
import Nickname from '../../components/Input/Nickname/Nickname';
import Adress from '../../components/Input/Adress/Adress';
import Category from '../../components/Input/Category/Category';

function SignUp({ role, page, setPage }) {
  const navigate = useNavigate();

  // 각 입력값 상태
  const [nickname, setNickname] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedTopCategory, setSelectedTopCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const maxLength = role === 'user' ? 3 : 6;

  // 이메일 조합 처리
  useEffect(() => {
    if (selectedDomain === 'custom' || selectedDomain === '') {
      setEmail(inputValue);
    } else {
      setEmail(`${inputValue}${selectedDomain}`);
    }
  }, [inputValue, selectedDomain]);

  // 페이지 초기화
  useEffect(() => {
    setPage(1);
  }, []);

  useEffect(() => {
  if (passwordConfirm && password !== passwordConfirm) {
    console.warn("비밀번호가 일치하지 않습니다.");
    }
  }, [password, passwordConfirm]);

  // 다음 버튼 클릭 시
  // 다음 버튼 클릭 시
const handleNext = async () => {
  if (page === maxLength) {
    console.log("EMAIL - " + email , "PASSWORD - " + password , "USERNAME - " + nickname, "ROLE - " + role)
    try {
      const response = await fetch('http://localhost/api/v1/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          username: nickname,
          role: role,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || '회원가입에 실패했습니다.');
      }

      // 성공 시 이동
      navigate('/home');
    } catch (error) {
      console.error('회원가입 요청 실패:', error.message);
      alert(error.message || '회원가입 도중 오류가 발생했습니다.');
    }
  } else {
    setPage(page + 1);
  }
};


  return (
    <>
      <CommonPage
        text={"다음"}
        maxpage={maxLength}
        page={page}
        setPage={setPage}
        onNext={handleNext}
      >
        <Header page={"signup"} index={page} />

        {page === 1 && (
          <Nickname value={nickname} setValue={setNickname} />
        )}

        {page === 2 && (
          <Email
            inputValue={inputValue}
            setInputValue={setInputValue}
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
          />
        )}

        {page === 3 && (
          <Password
            value={password}
            setValue={setPassword}
            confirmValue={passwordConfirm}
            setConfirmValue={setPasswordConfirm}
            mode={3}
          />
        )}

        {page === 4 && (
          <Adress address={address} setAddress={setAddress} detail={detailAddress} setDetail={setDetailAddress} />
        )}

        {page === 5 && (
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ borderBottom: "2px solid #ff6b6b", marginTop: "auto" }}
            placeholder="010-0000-0000"
          />
        )}

        {page === 6 && (
          <Category
            topCategory={selectedTopCategory}
            setTopCategory={setSelectedTopCategory}
            subCategory={selectedSubCategory}
            setSubCategory={setSelectedSubCategory}
          />
        )}
      </CommonPage>
    </>
  );
}

export default SignUp;
