/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import MainInput from '../../components/Input/MainInput/MainInput';

function Home () {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');

    return (
        <div css={s.test}>
            <div>
                <MainInput />
            </div>
            <span css={s.userName}>{userName}님, 반가워요! 어디가에서 즐거운 여행 되세요</span>
        </div>
    );

}

export default Home;
