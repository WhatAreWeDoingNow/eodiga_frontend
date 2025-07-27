// src/pages/start/start.jsx
import React from 'react';
import './start.css';
import ownerImg from '../../assets/owner.png';
import userImg from '../../assets/user.png';

function StartPage() {
  return (
    <div className="start-wrapper">
      <div className="start-text">
        <h1 className="title">어디가에 오신걸 환영해요!</h1>
        <p className="subtitle">어떤 사용자 유형으로 이용하시겠어요?<br />이후에 언제든 변경할 수 있어요.</p>
      </div>
      <div className="button-group">
        <div className="user-button">
          <img src={ownerImg} alt="소상공인" />
          <span>소상공인으로 시작하기</span>
        </div>
        <div className="user-button">
          <img src={userImg} alt="일반 사용자" />
          <span>일반 사용자로 시작하기</span>
        </div>
      </div>
    </div>
  );
}

export default StartPage;