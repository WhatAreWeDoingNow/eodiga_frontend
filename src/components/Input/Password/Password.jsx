/** @jsxImportSource @emotion/react */
import React from 'react'
import * as s from './style'

function Password({mode}) {
  return (
    <div css={s.layout}>
        <div css={s.inputbox}>
            <input 
                type="text"
                placeholder='영문/숫자/특수문자 중, 2가지 이상 포함해주세요. '
            />
        </div>
        {
            mode && 
            <div css={s.inputbox}>
                <input 
                    type="text"
                    placeholder='입력하신 비밀번호를 한번더 입력해주세요.'
                />
            </div>
        }
    </div>
  )
}

export default Password