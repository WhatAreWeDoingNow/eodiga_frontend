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
  const handleNext = () => {
    if (page == maxLength) {
      console.log({
      nickname,
      email,
      password,
      address,
      phone,
      category: {
        top: selectedTopCategory,
        sub: selectedSubCategory,
      },
    });
    }
    

    // 페이지 이동
    if (page < maxLength) {
      setPage(page + 1);
    } else {
      navigate('/eodiga');
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
