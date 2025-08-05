import { css } from '@emotion/react';

export const test = css`
  background-color: #FFF5F5;
  height: 100%; /* 전체 화면 세로 채움 */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;   /* 세로 중앙 정렬 */
  align-items: center;       /* 가로 중앙 정렬 */
  padding: 0px 16px;
`;

export const img = css`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  background-color: #fff;
  border-radius: 14px;
`;

export const settingText = css`
  font-size: 15px;
  text-align: left;
  margin-left: 55px;
  width: 100%;
`;

export const inputWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f08080; /* 연분홍 밑줄 */
    margin-top: 10px;
`;

export const label = css`
  font-size: 14px;
  color: #888;
  color: #929292
`;

export const input = css`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  border: none;
  outline: none;
  background-color: transparent;
  text-align: right;
  width: 277px;
`;

export const input1 = css`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  border: none;
  outline: none;
  background-color: transparent;
  text-align: right;
  width: 237px;
`;