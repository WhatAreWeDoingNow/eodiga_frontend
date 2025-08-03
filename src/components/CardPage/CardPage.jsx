/** @jsxImportSource @emotion/react */
import React from 'react'
import * as s from './style'

function Card({ title, describe }) {
  return (
    <div>
        <p>{title}</p>
        <a>{describe}</a>
    </div>
  );
}

export default Card;
