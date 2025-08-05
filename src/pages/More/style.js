/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export const container = css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
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

export const list_container = css`
    margin-top: 13px;
    height: 616px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y: auto;
    gap: 10px;

    &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none;    /* Firefox */

  cursor: grab;
`

export const list_box = css`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    padding: 13px 10px;
    border-radius: 15px;
`

export const list_top = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const img = css`
    height: 101px;
    width: 101px;
`

export const text_box = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    * {
        margin: 0px;
    }

    p{
        font-size: 10px;
        font-weight: 500;
    }
    h1 {
        font-size: 17px;
        font-weight: 600;
    }
`

export const hashtag = css`
    display: flex;
    gap: 5px;
    color: #3DA8DE;
`

export const bottom__box = css`
    display: flex;
    justify-content: space-between;
`

export const icons = css`
    display: flex;
    align-items: center;

    p {
        font-size: 10px;
        font-weight: 600;
        color: #333333
    }
`

export const more_button = css`
    display: flex;
    height: 23px;
    width: 76px;
    border: 1px solid #FFA8A8;
    border-radius: 25px;
    background-color: transparent;
    color: #FFA8A8;
`