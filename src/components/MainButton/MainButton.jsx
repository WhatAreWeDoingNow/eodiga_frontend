/** @jsxImportSource @emotion/react */
import React from 'react'
import * as s from './style'

function MainButton({text, onClick}) {


  return (
    <button css={s.button} onClick={onClick}>{text}</button>
  )
}

export default MainButton