/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style';

function Password({ value, setValue, confirmValue, setConfirmValue, mode }) {
  return (
    <div css={s.layout}>
      <div css={s.inputbox}>
        <input 
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="영문/숫자/특수문자 중, 2가지 이상 포함해주세요."
        />
      </div>
      {
        mode &&
        <div css={s.inputbox}>
          <input 
            type="password"
            value={confirmValue}
            onChange={(e) => setConfirmValue(e.target.value)}
            placeholder="입력하신 비밀번호를 한번 더 입력해주세요."
          />
        </div>
      }
    </div>
  );
}

export default Password;
