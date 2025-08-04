/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import * as s from './style';
import dayjs from 'dayjs';

function Calendar({ selectedDate, onSelectDate }) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const startOfMonth = currentMonth.startOf('month');
  const endOfMonth = currentMonth.endOf('month');
  const startDay = startOfMonth.day(); // 일요일 = 0
  const daysInMonth = currentMonth.daysInMonth();

  const prevMonth = () => setCurrentMonth(currentMonth.subtract(1, 'month'));
  const nextMonth = () => setCurrentMonth(currentMonth.add(1, 'month'));

  const dates = [];
  for (let i = 0; i < startDay; i++) {
    dates.push(null); // 빈 칸
  }
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(currentMonth.date(i));
  }

  return (
    <div css={s.calendarContainer}>
      <div css={s.header}>
        <button onClick={prevMonth}>◀</button>
        <span>{currentMonth.format('YYYY년 MM월')}</span>
        <button onClick={nextMonth}>▶</button>
      </div>
      <div css={s.weekRow}>
        {['일', '월', '화', '수', '목', '금', '토'].map(day => (
          <div key={day} css={s.dayHeader}>{day}</div>
        ))}
      </div>
      <div css={s.dateGrid}>
        {dates.map((date, idx) => (
          <div
            key={idx}
            css={[
              s.dateCell,
              date && selectedDate && date.isSame(selectedDate, 'day') && selectedDateStyle
            ]}
            onClick={() => date && onSelectDate(date)}
          >
            {date ? date.date() : ''}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
