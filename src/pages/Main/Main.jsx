/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import React from 'react'
import MainButton from "../../components/MainButton/MainButton";

function Main() {
    const navigate = useNavigate();
  return (
    <>
        <div css={s.Intro_Slide}>
            <h1>지역을 잇다, 경험을 만들다.</h1>
        </div>
        <div css={s.bottom_bottons}>
          <MainButton text={"로그인"} onClick={() => navigate('/signin')}/>
        </div>
        <div css={s.select_box}>
            <button css={s.select_button} onClick={() => navigate('/finduser')}>계정찾기</button>
            <span css={s.space}>|</span>
            <button css={s.select_button} onClick={() => navigate('/signup')}>가입하기</button>
        </div>
    </>
  )
}

export default Main