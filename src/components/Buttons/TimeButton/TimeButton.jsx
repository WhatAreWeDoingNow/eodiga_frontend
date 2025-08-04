/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style';

function TimeButton({ id, time, isSelected, onSelect }) {
  return (
    <button
      css={isSelected ? s.selectedButton : s.button}
      onClick={() => onSelect(id)}
    >
      {time}
    </button>
  );
}

export default TimeButton;
