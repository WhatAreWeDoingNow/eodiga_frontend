/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { css } from '@emotion/react';
import 'react-day-picker/dist/style.css';

const calendarWrapper = css`
  width: 320px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`;

const globalCalendarStyle = css`
    .rdp-root {
    --rdp-outline-selected: 2px solid #ffa8a8;
    --rdp-cell-size: 50px;
    --rdp-accent-color: #ffa8a8;
    --rdp-background-color: #ffa8a8;
    }

  .rdp {
    width: 100%;
    position: relative;
  }

  .rdp-caption {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    position: relative;
    margin-bottom: 12px;
  }

  .rdp-nav {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
  }

  .rdp-nav_button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  .rdp-head_row {
    display: flex;
    justify-content: space-between;
    padding: 0 4px;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 400;
    color: #888;
  }

  .rdp-dropdowns {
    margin-left: 100px;
  }
  .rdp-head_cell {
    flex: 1;
    text-align: center;
    text-transform: uppercase;
  }

  .rdp-row {
    display: flex;
    justify-content: space-between;
    padding: 0 4px;
    margin-bottom: 4px;
  }

  .rdp-day {
    flex: 1;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
  }

  .rdp-day:hover {
    background-color: #f3f3f3;
  }

  .rdp-day_selected {
  background-color: #FFA8A8 !important;
  color: white;
  border-radius: 50% !important;     /* ✅ 완전한 동그라미 */
  width: 36px !important;            /* ✅ 크기 명시 */
  height: 36px !important;
  line-height: 36px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
`;

function Calendar({ onSelectDate }) {
  const [selected, setSelected] = useState();

  // 날짜 선택 시 상태 업데이트 + 부모에 전달
  const handleSelect = (date) => {
    setSelected(date);
    if (onSelectDate) {
      onSelectDate(date);
    }
  };

  return (
    <div css={calendarWrapper}>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={handleSelect}  // 여기 수정
        weekStartsOn={1}
        captionLayout="dropdown-buttons"
        formatters={{
          formatCaption: (date) => `${date.getFullYear()}.${date.getMonth() + 1}`,
        }}
      />
      <style>{globalCalendarStyle.styles}</style>
    </div>
  );
}

export default Calendar;
