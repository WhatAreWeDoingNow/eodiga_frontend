/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import React, { useState } from 'react'
import MainButton from "../../components/MainButton/MainButton";
import Header from "../../components/Header/Header";

function Main({role, ischeck, setIscheck}) {
    const navigate = useNavigate();
    console.log(ischeck);

  return (
    <>
      {
        (role == 'owner' && !ischeck) &&
        <>
        <div style={{marginTop: "59px"}}>
            <Header page={"start"} index={3}/>
        </div>
        <div css={s.layout}>
            <input type="text" style={{borderBottom: "2px solid #ff6b6b"}} placeholder='대표자' />
            <input type="text" style={{borderBottom: "2px solid #ff6b6b"}} placeholder='사업자 등록 번호' />
            <input type="text" style={{borderBottom: "2px solid #ff6b6b"}} placeholder='개업 일자 (YY/MM/DD)' />
        </div>
        <div css={s.bottom_bottons}>
            <MainButton text={"다음"} onClick={() => setIscheck(true)}/>
        </div>
        </>
      }
    {
      (ischeck || role == 'user' )&&
      <>
        <div css={s.Intro_Slide}>
            <h1>지역을 잇다, 경험을 만들다.</h1>
        </div>
        <div css={s.buttons}>
            <MainButton text={"로그인"} onClick={() => navigate('/signin')}/>
              <div>
                <button css={s.select_button} onClick={() => navigate('/finduser')}>계정찾기</button>
                <span css={s.space}>|</span>
                <button css={s.select_button} onClick={() => navigate('/signup')}>가입하기</button>
              </div>
        </div>
    </>
    }
    </>
  )
}

export default Main