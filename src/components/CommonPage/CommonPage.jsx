/** @jsxImportSource @emotion/react */
import React from 'react'
import MainButton from '../MainButton/MainButton'
import * as s from './style'
import { useNavigate } from 'react-router-dom'

function CommonPage({children, text, page, setPage}) {
    const navigate = useNavigate();
    if(page == 0) setPage(1);
    console.log(page)
    const handlePageUp = () => {
        setPage(page + 1);
    }

    const handlePageDown = () => {
        setPage(page - 1);
        if(page == 1){
            navigate('/eodiga')
        }
    }
  return (
    <>
        <button css={s.button_style} onClick={handlePageDown}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5001 7L10.5001 14L17.5001 21" stroke="#FE6868" stroke-width="2"/>
            </svg>
        </button>
        <p css={s.Pagecount_style}>{page}/3</p>
        {children}
        <div css={s.bottom_bottons}>
            <MainButton text={text} onClick={handlePageUp}/>
        </div>
    </>
  )
}

export default CommonPage