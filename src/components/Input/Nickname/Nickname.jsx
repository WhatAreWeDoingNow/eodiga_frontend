/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';

function Nickname({ value, setValue }) {
  const navigate = useNavigate();

  return (
    <>
      <div css={s.inputbox}>
        <input
          type="text"
          name="nickname"
          value={value}
          placeholder="두 글자 이상 입력해주세요."
          maxLength={10}
          onChange={(e) => setValue(e.target.value)} // ✅ 변경된 부분
        />
        <span style={{ color: "#999", whiteSpace: "nowrap" }}>
          {value.length} / {10}
        </span>
      </div>

      <div css={s.go_main}>
        <p>
          계정이 이미 있으신가요?
          <span onClick={() => navigate('/eodiga')}> 메인으로 돌아가기</span>
        </p>
      </div>
    </>
  );
}

export default Nickname;
