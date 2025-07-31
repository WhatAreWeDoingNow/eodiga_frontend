/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style';
import ownerImg from '../../assets/owner.png';
import userImg from '../../assets/user.png';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../components/MainButton/MainButton';
import Header from '../../components/CommonPage/Header/Header';

function StartPage({ role, setRole }) {
  const navigate = useNavigate();

  const handleRoleClick = (category) => {
    setRole(category);
  };

  const handleNextClick = () => {
    navigate('/eodiga');
  };

  return (
    <>
      {!role ? (
        <Header
          page={"start"}
          index={1}
        />
      ) : (
       <Header
          page={"start"}
          index={2}
        />
      )}

      <div css={s.button_group}>
        <div css={s.user_button} onClick={() => handleRoleClick('owner')}>
          {role === 'owner' ? (
            <div css={s.img_backcolor2}>
              <img src={ownerImg} alt="소상공인" />
            </div>
          ) : (
            <div css={s.img_backcolor}>
              <img src={ownerImg} alt="소상공인" />
            </div>
          )}
          <span>소상공인으로 시작하기</span>
        </div>

        <div css={s.user_button} onClick={() => handleRoleClick('user')}>
          {role === 'user' ? (
            <div css={s.img_backcolor2}>
              <img src={userImg} alt="일반 사용자" />
            </div>
          ) : (
            <div css={s.img_backcolor}>
              <img src={userImg} alt="일반 사용자" />
            </div>
          )}
          <span>일반 사용자로 시작하기</span>
        </div>
      </div>

      {role ? (
        <div css={s.bottom_bottons}>
          <MainButton text={"다음"} onClick={handleNextClick}/>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default StartPage;
