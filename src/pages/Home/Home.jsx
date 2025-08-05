/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import MainInput from '../../components/Input/MainInput/MainInput';
import Card from '../../components/CardPage/CardPage'

function Home() {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');

    const hotPlaces = [
  {
    name: "해운대 해수욕장",
    address: "부산 해운대구 우동",
    star: 4.8,
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKd0I2Pa662z_JpYd088cSTGPUYRIwFXqCHliL0M9MwJQRaKLLuyPYK6PSBkUYDbftJQoT7vWtjumKURSZR9kTmH-Z6odHAQmkg326VUET1A"
  },
  {
    name: "광안리 해수욕장",
    address: "부산 수영구 광안동",
    star: 4.7,
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyEj_lISHiD1oZADBo2JH_34m7PRcPYYbp7nUePiEivQ6qJZLIwWkMf8T8qA5GDEctSGICODBYzQteoxmSE1tIpgOHcHGHc7G7QR_cdWBm"
  },
  {
    name: "경성대학교",
    address: "부산 남구 대연동",
    star: 4.6,
    imageUrl: "https://busan.grandculture.net/ImageView.aspx?fi=GC042P10903&t=middle&ext=jpg&iwm=1"
  },
  {
    name: "연암공과대학교",
    address: "경상남도 진주시 가좌동",
    star: 4.5,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfqip3FuB7GND8p4r9mWhzGism2sj1iBhIQ&s"
  },
  {
    name: "동의과학대학교",
    address: "부산 부산진구 양정동",
    star: 4.4,
    imageUrl: "https://i.namu.wiki/i/6eFlgu98sYJt7QATEiZDdGDBTZLBBlZAnqG83-TXJbHQABXgFI6UQ6whPp3gL1kKEzgshVNdTKH6q9JA2YB68w.webp"
  }
];

const aiRecommendedPlaces = [
  {
    name: "부산타워",
    imageUrl: "https://i.namu.wiki/i/AUpk8QHygUJremQinbr7w6YT4BochQWlBBJ-UwY-WWjZ4_5l6-jjIkT7GT-Xd_EtMjzVdpus3HBemhyNlbEH4w.webp"
  },
  {
    name: "국제시장",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkkzPGQy5SBCVULYWee3FinB-YDbdAIc9_w&s"
  },
  {
    name: "자갈치시장",
    imageUrl: "https://www.visitbusan.net/uploadImgs/files/cntnts/20191230201109126_oen"
  },
  {
    name: "동백섬",
    imageUrl: "https://i.namu.wiki/i/9Tf0PYttkfb7WRSMXx8E1WlSxc_1m2IB0py8Pb902_QLgCLOtpeKMPkUI_5qy4WCl_9OZrX-0LtyHW8vpp2kmg.webp"
  },
  {
    name: "영화의전당",
    imageUrl: "https://i.namu.wiki/i/M6hYIB0SChqpwlqwukRoUegO2z2e_xPqLomcmNuhOJxwX1_6d9R5-Jeq6utO6xFUMxaafABn0dLN0vykhamZUg.webp"
  }
];


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
                        {hotPlaces.map((place, i) => (
                        <div key={i} css={s.place_list(100)}>
                            <div css={s.list_img(place.imageUrl)}>
                                <p>{place.name}</p>
                            </div>
                            <p css={s.location}>{place.address}</p>
                            <p css={s.star}>⭐️ {place.star}</p>
                            </div>
                                ))}
                            </div>
                </div>
                <div>
                    <p>카테고리</p>
                    <div css={s.buttons}>
                        <div css={s.categorys}>
                            <button><img src='../../src/assets/heart.png' /></button>
                            <p>연인과</p>
                        </div>

                        <div css={s.categorys}>
                            <button><img src='../../src/assets/baby.png' /></button>
                            <p>아기와</p>
                        </div>

                        <div css={s.categorys}>
                            <button><img src='../../src/assets/paw.png' /></button>
                            <p>반려동물과</p>
                        </div>

                        <div css={s.categorys}>
                            <button><img src='../../src/assets/shortcake.png' /></button>
                            <p>디저트 · 카페</p>
                        </div>

                        <div css={s.categorys}>
                            <button><img src='../../src/assets/dancing.png' /></button>
                            <p>공연 · 문화체험</p>
                        </div>

                        <div css={s.categorys}>
                            <button><img src='../../src/assets/nail.png' /></button>
                            <p>뷰티 · 미용</p>
                        </div>

                        <div css={s.categorys}>
                            <button><img src='../../src/assets/fortune.png' /></button>
                            <p>소품샵 · 잡화점</p>
                        </div>

                        <div css={s.categorys}>
                            <button><img src='../../src/assets/bone.png' /></button>
                            <p>체험 · 놀거리</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>AI가 {userName}님을 위해 추천해드리는 관광지에요!</p>
                    <div css={s.place_layout}>
  {aiRecommendedPlaces.map((place, i) => (
    <div key={i} css={s.place_list(167)}>
      <div css={s.list_img(place.imageUrl)}>
        <p>{place.name}</p>
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
