/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import MainInput from '../../components/Input/MainInput/MainInput';
import Card from '../../components/CardPage/CardPage'

function Home () {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');

    const handleMoreClcik = () => { { /* 더보기 연결 */}
        navigate('/More');
    };

    return (
        <div css={s.test}>
            <div>
                <MainInput />
            </div>
            <span css={s.userName}>{userName}님, 반가워요! 어디가에서 즐거운 여행 되세요</span>

            <Card title={"성해네 해장국"} location={"부산광역시 부산진구"} star={"4.5"} imgURL={"https://image.8dogam.com/resized/product/asset/v1/upload/0e338fa5717d49ec803b308721443ebe.jpg?type=big&res=2x&ext=webp"}/>
        </div>
    );

}

export default Home;
