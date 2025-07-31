// src/pages/start/start.jsx
import React from 'react';
import './Start.css';
import ownerImg from '../../assets/owner.png';
import userImg from '../../assets/user.png';
import { useNavigate } from 'react-router-dom';

function StartPage({role, setRole}) {
  const navigate = useNavigate();
  const handleRoleClick = (category) => {
    setRole(category);
  }
  const handleNextClick = () => {
    navigate('/eodiga')
  }
  return (
    <>
    {!role? 
      <div className="start-text">
        <h1 className="title">어디가에 오신걸 환영해요!</h1>
        <p className="subtitle">어떤 사용자 유형으로 이용하시겠어요?<br />이후에 언제든 변경할 수 있어요.</p>
      </div>
      :
      <div className='start-text'>
        <h1 className='title2'>선택사항이 맞으시다면<br/> 다음버튼을 눌러주세요.</h1>

      </div>
    }
      <div  className="button-group">
        <div className="user-button" onClick={() => handleRoleClick("owner")}>
          {
            role == "owner"?
            <div className='img-backcolor2'>
              <img src={ownerImg} alt="소상공인"/>
            </div>
            :
            <div className='img-backcolor'>
              <img src={ownerImg} alt="소상공인"/>
            </div>
          }
          <span>소상공인으로 시작하기</span>
        </div>
        <div className="user-button" onClick={() => handleRoleClick("user")}>
          {
            role == "user"?
            <div className='img-backcolor2'>
              <img src={userImg} alt="일반 사용자" />
            </div>
            :
            <div className='img-backcolor'>
              <img src={userImg} alt="일반 사용자" />
            </div>
          }
          <span>일반 사용자로 시작하기</span>
        </div>
      </div>
      {role? <button className='next-button' onClick={handleNextClick}>다음</button> : <div className='box'></div>}
      {/* <button className='next-button'>다음</button> */}
    </>
  );
}

export default StartPage;