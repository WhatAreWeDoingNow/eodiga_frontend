/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style';
import ownerImg from '../../assets/owner.png';
import userImg from '../../assets/user.png';
import { useNavigate } from 'react-router-dom';

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
        <div css={s.start_text}>
          <h1 css={s.title}>어디가에 오신걸 환영해요!</h1>
          <p css={s.subtitle}>
            어떤 사용자 유형으로 이용하시겠어요?
            <br />
            이후에 언제든 변경할 수 있어요.
          </p>
        </div>
      ) : (
        <div css={s.start_text}>
          <h1 css={s.title2}>
            선택사항이 맞으시다면
            <br /> 다음버튼을 눌러주세요.
          </h1>
        </div>
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
        <button css={s.next_button} onClick={handleNextClick}>
          다음
        </button>
      ) : (
        <div css={s.box}></div>
      )}
    </>
  );
}

export default StartPage;
