import { css } from '@emotion/react';

export const container = css`
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const select = css`
    background: transparent;
    border: none;     /* 경계선도 없애고 싶을 때 */
    outline: none;    /* 포커스 시 파란 테두리도 제거 */
    color: #929292;
`
export const line = css`
    padding-bottom: 5.5px;
    border-bottom: 2px solid #ff6b6b;
`