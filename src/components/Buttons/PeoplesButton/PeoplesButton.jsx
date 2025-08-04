/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style';

function PeoplesButton({ id, count, isSelected, onSelect }) {
  return (
    <button
      css={isSelected ? s.selectedButton : s.button}
      onClick={() => onSelect(id)}
    >
      {count}명
    </button>
  );
}

export default PeoplesButton;
