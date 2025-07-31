// styles.js
import { css } from '@emotion/react';

export const start_text = css`
  text-align: center;
`;

export const title = css`
  font-size: 24px;
  font-weight: 700;
  color: #ff6c6c;
  margin-bottom: 12px;
`;

export const title2 = css`
  font-size: 24px;
  font-weight: 700;
  color: #ff6c6c;
  margin-bottom: 12px;
`;

export const subtitle = css`
  font-size: 14px;
  color: #cc6666;
  line-height: 1.6;
`;

export const button_group = css`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 150px;
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

export const img_backcolor = css`
  height: 130px;
  width: 130px;
  background-color: white;
  border-radius: 35px;
  margin-bottom: 10px;
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
  position: fixed;
  bottom: 250px;
  left: 50%;
  transform: translateX(-50%);
`