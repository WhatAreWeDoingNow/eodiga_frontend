/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';

function ReviewFinish () {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/main/home');
        }, 3000); // 3000ms = 3초

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    }, [navigate]);

    return (
        <div css={s.test}>
            <img src='../../../src/assets/hand.png' css={s.img}/>
            <span css={s.resTitle}>+100M</span>
            <p css={s.resDes}>어디가와 함께 즐거운 마일리지 생활을 시작해봐요 :)</p>
        </div>
    );
}

export default ReviewFinish;
