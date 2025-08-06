import React, { useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';
/** @jsxImportSource @emotion/react */
import * as s from './style.js';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../components/MainButton/MainButton.jsx';

function Reservation() {

  const navigate = useNavigate();
  const ResFinish = () => {
    navigate('/main/ReservationFinish');
  };
  const [normalCount, setNormalCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  // 예약 버튼 활성화 여부
  const isReservationEnabled = (normalCount + childCount > 0) && selectedDate && selectedTime;

  // 선택된 버튼에만 적용할 css (Emotion)
  const selectedButtonStyle = {
    backgroundColor: '#FFA8A8',
    color: '#fff',
    borderColor: '#FE76A1',
  };

  return (
    <div css={s.container}>
      {/* 인원 선택 */}
      <div css={s.top}>
        <div css={s.top_icon}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14.9999" cy="10" r="5" fill="#222222" />
            <path d="M6.67229 21.6507C7.49865 18.1586 10.9646 16.25 14.5532 16.25H15.4467C19.0353 16.25 22.5012 18.1586 23.3276 21.6507C23.4875 22.3264 23.6146 23.0335 23.6861 23.7521C23.7544 24.439 23.1903 25 22.4999 25H7.49994C6.80958 25 6.24546 24.439 6.31382 23.7521C6.38532 23.0335 6.5124 22.3264 6.67229 21.6507Z" fill="#222222" />
          </svg>
          <p>인원을 선택해주세요</p>
        </div>
        <p style={{ fontSize: '12.5px', fontWeight: '400', color: '#929292' }}>최대 4인까지 체험이 가능한 클래스에요.</p>

        {/* 일반 인원 선택 */}
        <div css={s.top_butotn}>
          <p>일반</p>
          <div css={s.top_buttons}>
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                onClick={() => setNormalCount(n)}
                style={normalCount === n ? selectedButtonStyle : {}}
              >
                {n}명
              </button>
            ))}
          </div>
        </div>

        {/* 어린이 인원 선택 */}
        <div css={s.top_butotn}>
          <p>어린이</p>
          <div css={s.top_buttons}>
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                onClick={() => setChildCount(n)}
                style={childCount === n ? selectedButtonStyle : {}}
              >
                {n}명
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 날짜 선택 */}
      <div css={s.calender_text}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3.74994" y="7.5" width="22.5" height="18.75" rx="2.5" stroke="#33363F" strokeWidth="2" />
          <path d="M4.99994 13.75H24.9999" stroke="#33363F" strokeWidth="2" strokeLinecap="round" />
          <path d="M12.4999 20H17.4999" stroke="#33363F" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 17.5L15 22.5" stroke="#33363F" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 3.75L10 8.75" stroke="#33363F" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M20 3.75L20 8.75" stroke="#33363F" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <p>날짜와 시간을 선택해주세요</p>
      </div>
      <Calendar onSelectDate={(date) => setSelectedDate(date)} />

      {/* 시간 선택 */}
      <div style={{ marginLeft: '16px' }}>
        <p>오전</p>
        <div css={s.buttons}>
          {["10:00", "11:00"].map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              style={selectedTime === time ? selectedButtonStyle : {}}
            >
              {time}
            </button>
          ))}
        </div>

        <p>오후</p>
        <div css={s.buttons}>
          {["12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00"].map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              style={selectedTime === time ? selectedButtonStyle : {}}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* 예약 버튼 */}
      <div css={s.bottom_button}>
        <MainButton
          text={'예약하기'}
          disabled={!isReservationEnabled}
          onClick={ResFinish}
        />
      </div>
    </div>
  );
}

export default Reservation;
