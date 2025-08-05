/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';

function Mileage () {
    
    return (
        <div css={s.test}>
            <span css={s.mileageText}>현재 보유중인 마일리지</span>
            <p css={s.mileageBalance}>10,000M</p>

            <div css={s.back}>
                <div>
                    <div css={s.couponChangeText}>쿠폰교환</div>  
                    <div css={s.couponList}>
                        <div css={s.couponContainer}>
                            <img css={s.CouponImg} />
                            <span css={s.couponText}>스타벅스</span>
                            <span css={s.couponText}>아이스 아메리카노</span>
                            <b css={s.couponText}>4,100M</b>
                        </div>

                        <div css={s.couponContainer}>
                            <img css={s.CouponImg} />
                            <span css={s.couponText}>스타벅스</span>
                            <span css={s.couponText}>아이스 아메리카노</span>
                            <b css={s.couponText}>4,100M</b>
                        </div>
                    </div>
                </div>
                <hr css={s.hr} />
                <div css={s.shopChangeText}>제휴처 혜택 교환</div>  
                    <div css={s.shopList}>
                        <div css={s.shopContainer}>
                            <img css={s.shopImg} />
                            <span css={s.shopTitle}>기장 롯데월드</span>
                            <span css={s.shopText}>35% 할인 혜택</span>
                            <span css={s.shopText}>여가 및 테마파크</span>
                            <b css={s.shopText}>4,100M</b>
                        </div>

                        <div css={s.shopContainer}>
                            <img css={s.shopImg} />
                            <span css={s.shopTitle}>기장 롯데월드</span>
                            <span css={s.shopText}>35% 할인 혜택</span>
                            <span css={s.shopText}>여가 및 테마파크</span>
                            <b css={s.shopText}>4,100M</b>
                        </div>
                    </div>
                <hr css={s.hr} />


                    
            </div> 
        </div>
    );
}

export default Mileage;
