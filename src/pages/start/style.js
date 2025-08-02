// styles.js
import { css } from '@emotion/react';

export const header = css`
  margin-top: 59px;
`

export const button_group = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 120px;
`;

export const user_button = css`
  border-radius: 20px;
  padding: 16px;
  text-align: center;
  width: 130px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  img {
    width: 100%;
    height: auto;
  }

  img:hover {
    border-radius: 35px;
    background-color: #ffa8a8;
  }

  span {
    display: block;
    font-size: 13px;
    color: #333;
  }
`;

export const img_backcolor = (isRole) => css`
  height: 130px;
  width: 130px;
  background-color: ${isRole ? '#ffa8a8' : 'white'};
  border-radius: 35px;
  margin-bottom: 10px;
  ${isRole ? 'border: 2px solid #ff4081;' : ''}
  box-shadow: 2px 1px 0px 0px #00000059;
`;


export const img_backcolor2 = css`
  height: 130px;
  width: 130px;
  background-color: #ffa8a8;
  border-radius: 35px;
  margin-bottom: 10px;
  border: 2px solid #ff4081;
  box-shadow: 2px 1px 0px 0px #00000059;
`;

export const box = css`
  margin-top: 80px;
`;

export const next_button = css`
  background: linear-gradient(to right, #fe76a1, #ff6b6b);
`;

export const bottom_bottons = css`
  margin-top: auto;
  margin-bottom: 162px;
`