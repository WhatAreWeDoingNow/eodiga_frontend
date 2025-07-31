/** @jsxImportSource @emotion/react */
import React from 'react'
import * as s from './sytle'

function MainLayout({children}) {
  return (
    <div css={s.layout}>
        {children}
    </div>
  )
}
export default MainLayout
