/** @jsxImportSource @emotion/react */
import React from 'react'
import MainButton from '../MainButton/MainButton'
import * as s from './style'

function CommonPage({children, text}) {
  return (
    <>
        <button css={s.button_style}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5001 7L10.5001 14L17.5001 21" stroke="#FE6868" stroke-width="2"/>
            </svg>
        </button>
        <p css={s.Pagecount_style}>1/3</p>
        {children}
        <div css={s.bottom_bottons}>
            <MainButton text={text}/>
        </div>
    </>
  )
}

export default CommonPage