/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import React from 'react'

function Main() {
    const navigate = useNavigate();
  return (
    <>
        <div css={s.Intro_Slide}>
            <h1>test</h1>
        </div>
        <button css={s.login_button} onClick={() => navigate('/signin')}>로그인</button>
        <div css={s.select_box}>
            <button css={s.select_button} onClick={() => navigate('/finduser')}>계정찾기</button>
            <span css={s.space}>|</span>
            <button css={s.select_button} onClick={() => navigate('/signup')}>가입하기</button>
        </div>
    </>
  )
}

export default Main