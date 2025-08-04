import { css } from '@emotion/react';

export const container = css`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const image = css`
  width: 100px;
  height: 100px;
  border-radius: 14px;
  object-fit: cover;
`;

export const title = css`
    width: 100px;
    height: 30px;
  position: absolute;
  top: 60px;
  background-color: #a4a4a460  // 반투명 배경
  color: black;
  border-radius: 6px;
  font-size: 14px;
`;
