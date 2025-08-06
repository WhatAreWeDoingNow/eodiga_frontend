import { css } from '@emotion/react';

export const container = css`
    background-color: #FFA8A8;
    height: 100%;
    width: 100%;
   `


export const box = css`
    display: flex;
    background-color: #ffffff;
    margin-top: 97px;
    padding: 12px;
    border-radius: 15px;
    input {
        padding: 0px;
        margin-left: 11px;
    }
`
export const bottom_layout = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #fff5f5;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    padding: 0px 16px;
`

export const  bottom_text = css`
    display: flex;
    justify-content: space-between;
`
export const place_layout = css`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 10px;

    &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none;    /* Firefox */

  cursor: grab;
`
export const place_list = (Width) =>  css`
    height: 125px;
    width: ${Width}px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    * {
        margin: 0px;
    }
`

export const list_img = (url) => css`
    width: 100px;
    height: 100px;
    background-image: url(${url});
    background-size: cover;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    
    width: 100%;
    p {
        background-color: rgba(164, 164, 164, 0.59);
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        padding: 5px 10px;
        font-size: 10px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
    }
`

export const location = css`
  font-size: 10px;
`

export const star = css`
  font-size: 10px;
  margin-top: 1px;
`
export const buttons = css`
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
`

export const categorys = css`
    display: flex;
    width: 60px;
    height: 75px;
    flex-direction: column;
    align-items: center;
    button {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        border: none;
    }
    p{
        font-size: 10px;
        font-weight: 600;
    }
`

export const color = css`
    color: #FF6B6B;
`