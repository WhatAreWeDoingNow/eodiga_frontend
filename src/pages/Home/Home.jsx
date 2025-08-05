/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import MainInput from '../../components/Input/MainInput/MainInput';
import Card from '../../components/CardPage/CardPage'

function Home() {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');

    const handleMoreClcik = () => {
        { /* 더보기 연결 */ }
        navigate('/More');
    };

    return (
        <div css={s.container}>
            <div style={{ margin: "0px 16px" }}>
                <div css={s.box}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10.0834" cy="10.083" r="5.5" stroke="#929292" stroke-width="1.04762" />
                        <path d="M10.0834 7.3335C9.72224 7.3335 9.36464 7.40463 9.03099 7.54283C8.69735 7.68103 8.39419 7.88359 8.13883 8.13895C7.88347 8.39431 7.68091 8.69747 7.54271 9.03112C7.4045 9.36476 7.33337 9.72236 7.33337 10.0835" stroke="#929292" stroke-width="1.04762" stroke-linecap="round" />
                        <path d="M18.3334 18.333L15.5834 15.583" stroke="#929292" stroke-width="1.04762" stroke-linecap="round" />
                    </svg>

                    <input type="text" />
                </div>
                <p css={s.userName}>{userName}님, 반가워요! 어디가에서 즐거운 여행 되세요.

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0615 1.79443V0.402832L10.9526 1.15723V3.0249L15.0615 1.79443ZM6.42627 2.05811C6.42627 1.85303 6.375 1.6626 6.27246 1.48682C6.16504 1.31104 6.02588 1.17188 5.85498 1.06934C5.6792 0.97168 5.48877 0.922852 5.28369 0.922852C5.0835 0.922852 4.89795 0.97168 4.72705 1.06934C4.55127 1.17188 4.41455 1.31104 4.31689 1.48682C4.21436 1.6626 4.16309 1.85303 4.16309 2.05811C4.16309 2.25342 4.21436 2.43896 4.31689 2.61475C4.41455 2.79053 4.55127 2.92969 4.72705 3.03223C4.89795 3.13477 5.0835 3.18604 5.28369 3.18604C5.48877 3.18604 5.6792 3.13477 5.85498 3.03223C6.02588 2.92969 6.16504 2.79053 6.27246 2.61475C6.375 2.43896 6.42627 2.25342 6.42627 2.05811ZM8.35254 9.7998V5.02441H6.81445V9.7998H8.35254ZM4.19971 14.5459C5.35693 14.9219 6.60937 15.1123 7.95703 15.1172C9.2998 15.1123 10.5522 14.9194 11.7144 14.5386C12.8716 14.1626 13.9629 13.6206 14.9883 12.9126V11.1621C14.4854 11.5039 13.8457 11.8286 13.0693 12.1362C12.2979 12.4438 11.4629 12.6929 10.5645 12.8833C9.66602 13.0786 8.79688 13.1763 7.95703 13.1763C7.11719 13.1763 6.25049 13.0786 5.35693 12.8833C4.46338 12.6929 3.62842 12.4438 2.85205 12.1362C2.07568 11.8286 1.43848 11.5039 0.94043 11.1621V12.9126C1.95117 13.6255 3.0376 14.1699 4.19971 14.5459Z" fill="black" />
                    </svg>
                </p>
            </div>
            <div css={s.bottom_layout}>
                <div>
                    <div css={s.bottom_text}>
                        <p>지역 핫플 추천</p>
                        <p>더보기
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.625 3.75L9.375 7.5L5.625 11.25" stroke="#FF6B6B" stroke-width="1.25" />
                            </svg>
                        </p>
                    </div>
                    <div css={s.place_layout}>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} css={s.place_list(100)}>
                                <div css={s.list_img('https://image.8dogam.com/resized/product/asset/v1/upload/0e338fa5717d49ec803b308721443ebe.jpg?type=big&res=2x&ext=webp')}>
                                    <p>test</p>
                                </div>
                                <p css={s.location}>주소</p>
                                <p css={s.star}>⭐️ 4.4</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p>카테고리</p>
                    <div css={s.buttons}>
                        <div css={s.categorys}>
                            <button></button>
                            <p>연인과</p>
                        </div>

                        <div css={s.categorys}>
                            <button></button>
                            <p>연인과</p>
                        </div>

                        <div css={s.categorys}>
                            <button></button>
                            <p>연인과</p>
                        </div>

                        <div css={s.categorys}>
                            <button></button>
                            <p>연인과</p>
                        </div>

                        <div css={s.categorys}>
                            <button></button>
                            <p>연인과</p>
                        </div>

                        <div css={s.categorys}>
                            <button></button>
                            <p>연인과</p>
                        </div>

                        <div css={s.categorys}>
                            <button></button>
                            <p>연인과</p>
                        </div>

                        <div css={s.categorys}>
                            <button></button>
                            <p>연인과</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>AI가 {userName}님을 위해 추천해드리는 관광지에요!</p>
                    <div css={s.place_layout}>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} css={s.place_list(167)}>
                                <div css={s.list_img('https://image.8dogam.com/resized/product/asset/v1/upload/0e338fa5717d49ec803b308721443ebe.jpg?type=big&res=2x&ext=webp')}>
                                    <p>test</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;
