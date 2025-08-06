/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


export const container = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    `

export const top = css`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    border-bottom: 5px solid rgba(228, 228, 228, 0.81);
    gap: 10px;
    padding: 0px 16px;
    padding-bottom: 20px;
    p{
        margin: 0px
    }
`

export const top_icon = css`
    display: flex;
    align-items: center;

    p{
        font-size: 17px;
        font-weight: 600;
    }
`

export const top_butotn = css`
    display: flex;
    align-items: center;
    gap: 20px;

    p{
        font-size: 12.5px;
        font-weight: 500;
    }
`

export const top_buttons = css`
    display: flex;
    gap: 10px;
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25px;
        width: 25px;
        padding: 5px;
        border: 1px solid #929292;
        outline: none;
        background-color: transparent;
        border-radius: 7px;
        white-space: nowrap;

        font-size: 12.5px;
        font-weight: 500;
    }
`

export const calender_text = css`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 5px;

    p{
        margin: 0px;
        font-size: 17px;
        font-weight: 600;
    }
`

export const buttons = css`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    button{
        background-color: transparent;
        border: 1px solid #929292;
        padding: 5px 10px;
        border-radius: 7px;

        font-size: 12.5px;
        font-weight: 500;
    }
`

export const bottom_button = css`
    margin: 26px 36px;
`