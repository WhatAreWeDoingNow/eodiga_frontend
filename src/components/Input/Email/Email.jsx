/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style';

function Email({ inputValue, setInputValue, selectedDomain, setSelectedDomain }) {
  const handleDomainChange = (e) => {
    setSelectedDomain(e.target.value);
  };

  return (
    <div css={s.inputbox}>
      <input
        css={s.input}
        type="text"
        placeholder="example@"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <select css={s.select} value={selectedDomain} onChange={handleDomainChange}>
        <option value="">이메일 선택</option>
        <option value="custom">직접 입력</option>
        <option value="@gmail.com">@gmail.com</option>
        <option value="@naver.com">@naver.com</option>
        <option value="@daum.net">@daum.net</option>
      </select>
    </div>
  );
}

export default Email;
