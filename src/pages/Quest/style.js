import { css } from '@emotion/react';

export const container = css`
  position: relative;
  width: 100vw;
  height: 100%;
`;

export const inputWrap = css`
  position: absolute;
  top: 30px;
  left: 20px;
  right: 20px;
  z-index: 10; /* 지도 위에 올라오게 */
`;

export const box = css`
margin-top: 60px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 12px;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  input {
    margin-left: 11px;
    border: none;
    outline: none;
    font-size: 16px;
    flex: 1;
  }
`;

export const categorys = css`

    margin-top: 10px;
  button {
    display: flex;
    align-items: center;
    gap: 6px;

    background-color: #FFEFF1;
    border: 1.5px solid #FF5A8A;
    color: #000;
    border-radius: 999px;
    padding: 4px 12px;
    height: 36px;

    font-size: 15px;
    font-weight: 500;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
    }

    p {
      margin: 0;
    }

    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #FFD8E1;
    }
  }
`;

export const buttons = css`
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
`
