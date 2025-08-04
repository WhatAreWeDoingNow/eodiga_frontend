/** @jsxImportSource @emotion/react */
import React from 'react'
import * as s from './style'

function Card({ imgURL, title, describe, star }) {
  return (
    <div css={s.container}>
      <img src={imgURL} css={s.image} />
      <p css={s.title}>{title}</p>
      {/* 아래는 이미지 아래에 배치될 수 있도록 분리 */}
      <div>
        <p>{describe}</p>
        <p>{star}</p>
      </div>
    </div>
  );
}

export default Card;
