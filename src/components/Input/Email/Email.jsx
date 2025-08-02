/** @jsxImportSource @emotion/react */
import React from 'react'
import * as s from './style'

function Email({inputValue, setInputValue, onChange}) {
  return (
    <div css={s.inputbox}>
        <input css={s.input} type="text" placeholder='example@' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <select css={s.select} onChange={onChange}>
        <option value="">이메일선택</option>
        <option value="">직접입력</option>
        <option value="">@gmail.com</option>
        <option value="">@naver.com</option>
        <option value="">@daum.net</option>
        </select>
    </div>
  )
}

export default Email