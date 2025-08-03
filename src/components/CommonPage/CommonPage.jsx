/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from "react-router-dom";
import MainButton from '../MainButton/MainButton';
import * as s from './style';

function CommonPage({ children, text, maxpage, page, setPage, onNext }) {
  const navigate = useNavigate();

  if (page === 0) setPage(1);

  const handlePageDown = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      navigate('/eodiga');
    }
  };

  return (
    <>
      <button css={s.button_style} onClick={handlePageDown}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5001 7L10.5001 14L17.5001 21" stroke="#FE6868" strokeWidth="2" />
        </svg>
      </button>
      <p css={s.Pagecount_style}>{page}/{maxpage}</p>
      {children}
      <div css={s.bottom_bottons}>
        <MainButton text={text} onClick={onNext} />
      </div>
    </>
  );
}

export default CommonPage;
