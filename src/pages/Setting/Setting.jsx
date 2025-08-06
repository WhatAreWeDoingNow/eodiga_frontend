/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import * as s from './style';

function Setting () {
    const userName = localStorage.getItem('userName');
    const userMail = localStorage.getItem('userMail');

    return (
        <div css={s.test}>
            <img src='../../../src/assets/hand.png' css={s.img}/>
            <span css={s.settingText}>프로필 설정</span>
            <div css={s.inputWrapper}>
                <p css={s.label}>닉네임</p>
                <input css={s.input} defaultValue={userName} />
            </div>

            <div css={s.inputWrapper}>
                <p css={s.label}>이메일</p>
                <input css={s.input} defaultValue={userMail} />
            </div>

            <div css={s.inputWrapper}>
                <p css={s.label}>비밀번호 변경</p>
                <a css={s.input1}> </a>
            </div>
        </div>
    );
}

export default Setting;
