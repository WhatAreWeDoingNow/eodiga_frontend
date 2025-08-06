/** @jsxImportSource @emotion/react */
import React from 'react'
import * as s from './style'

function MainButton({ text, onClick, disabled = false }) {
  return (
    <button
      css={s.button}
      onClick={onClick}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
    >
      {text}
    </button>
  )
}

export default MainButton
