/** @jsxImportSource @emotion/react */
import React from 'react'
import * as s from './style'

function Nickname() {
  return (
    <>
        <div css={s.inputbox}>
            <input
            type="text"
            name='nickname'
            placeholder='두 글자 이상 입력해주세요.'
            maxLength={10}
            // onChange={(e) => setText(e.target.value)}
            />
            <span style={{ color: "#999", whiteSpace: "nowrap"}}> 1/ {10}</span>
        </div>
            <div css={s.go_main}>
            <p>계정이 이미 있으신가요?
                <span onClick={() => navigate('/eodiga')}> 메인으로 돌아가기</span>
            </p>
            </div>
    </>
  )
}

export default Nickname