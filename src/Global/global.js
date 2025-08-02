/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export const reset = css`

    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

    * {
        font-family: 'Pretendard', sans-serif;
    }

        
    html, body, #root{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1{
        margin: 0px;
    }

    button {
        cursor: pointer;
    }

    input{
        background: transparent;
        border: none;     /* 경계선도 없애고 싶을 때 */
        outline: none;    /* 포커스 시 파란 테두리도 제거 */
        color: #333333;
        font-size: 18px;
        width: 100%;
        ::placeholder {
            font-size: 15px;
            color: #aaa;
        }
    }
`