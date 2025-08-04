/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';

function MainInput({ value, setValue }) {

  return (
    <>
      <div css={s.inputbox}>
        <input
          type="text"
          name="mainInput"
          value={value}
          placeholder="지번, 도로명, 건물명으로 검색"
          onChange={(e) => setValue(e.target.value)} // ✅ 변경된 부분
        />
      </div>
    </>
  );
}

export default MainInput;
