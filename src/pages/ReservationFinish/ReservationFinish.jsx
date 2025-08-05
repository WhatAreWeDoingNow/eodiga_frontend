/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';

function ReservationFinish () {
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
            <span css={s.resTitle}>예약 완료</span>
            <p css={s.resDes}>어디가와 함께 즐거운 골목 여정을 시작해봐요 :)</p>
        </div>
    );
}

export default ReservationFinish;
