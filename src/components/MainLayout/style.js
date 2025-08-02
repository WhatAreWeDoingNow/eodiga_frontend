import { css } from '@emotion/react';

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
    background-color: #000000;
`

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 850px;
    padding: 0px 30px;
    box-sizing: border-box;
    background-color: #FFF5F5;
    border: 1px solid #dbdbdb;
`

export const top_bar = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
`

export const icons = css`
    display: flex;
    gap: 5px;
`

export const time = css`
    font-weight: 590;
    font-size: 17px;
`
export const main_layout = css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
    flex: 1;
    position: relative;
`
export const bar = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;;
    padding-bottom: 5px;
`