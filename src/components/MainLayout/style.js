import { css } from '@emotion/react';

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
    background-color: #000000;
    overflow: hidden;
`

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 850px;
    box-sizing: border-box;
    background-color: #FFF5F5;
    position: relative;
    overflow: hidden;
`

export const top_layout = css`
  background-color: transparent;
  position: absolute;    /* phone-layout 안에서 고정 */
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
`

export const top_bar = css`
    display: flex;
    justify-content: space-between;
    padding: 17px 30px;
`

export const icons = css`
    display: flex;
    gap: 5px;
`

export const time = css`
    margin: 0;
    font-weight: 590;
    font-size: 17px;
`

export const main_bar = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    p{
        margin: 0px;
    }
`
export const main_layout = css`
    display: flex;
    overflow-y: auto;
    height: 100vh;
    width: 400px;
    box-sizing: border-box;
    flex: 1;

     &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none; /* IE, Edge */
    scrollbar-width: none;    /* Firefox */
`
export const bar = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
    padding: 8px 30px;
    justify-content: space-between;
`

export const bottom_icons = css`
    height: 62px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    p{
        margin: 0px;
    }
`