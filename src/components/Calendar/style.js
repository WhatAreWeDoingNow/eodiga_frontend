import { css } from '@emotion/react';



export const calendarContainer = css`
margin-top: 300px;
  width: 300px;
  background: #fdfdfd;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  font-family: sans-serif;
`;

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-weight: bold;
`;

export const weekRow = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 6px;
`;

export const dayHeader = css`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #666;
`;

export const dateGrid = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

export const dateCell = css`
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #eee;
  }
`;

export const selectedDateStyle = css`
  background: #007bff;
  color: white;
`;
