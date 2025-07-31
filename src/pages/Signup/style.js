import { css } from '@emotion/react';

export const start_text = css`
    text-align: center;
`

export const title = css`
font-size: 24px;
  font-weight: 700;
  color: #ff6b6b;
  margin-bottom: 12px;
`

export const subtitle = css`
    font-size: 14px;
  color: #ffa8a8;
  line-height: 1.6;
`

export const inputbox = css`
    height: 27.5px;
    margin-top: 250px;
`
export const input = css`
    background: transparent;
    border: none;     /* 경계선도 없애고 싶을 때 */
    outline: none;    /* 포커스 시 파란 테두리도 제거 */
    color: #333333;
    font-size: 18px;
    padding-bottom: 5px;
    border-bottom: 2px solid #ff6b6b;
    ::placeholder {
        font-size: 15px;
        color: #aaa;
    }
`
export const line = css`
    padding-bottom: 5.5px;
    border-bottom: 2px solid #ff6b6b;
`
export const input2 = css`
    margin-top: 20px;
    padding-bottom: 5px;
    border-bottom: 2px solid #ff6b6b;
`

export const select = css`
    background: transparent;
    border: none;     /* 경계선도 없애고 싶을 때 */
    outline: none;    /* 포커스 시 파란 테두리도 제거 */
    color: #929292;
`

export const click_adress = css`
    padding: 10px 0px;
    background-color: #FFFFFF;
    border: none;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 15px;
`

export const login_button = css`
    margin-top: 60px;
    background: linear-gradient(to right, #FE76A1, #FF6B6B);
`
export const go_main = css`
    margin-top: 10px;
    p {
        margin: 0px;
        font-size: 14px;
        color: #666666;
    }

    span{
        font-weight: 600;
        color: black;
        cursor: pointer;
    }
`
