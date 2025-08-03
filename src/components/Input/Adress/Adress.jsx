/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './style';

function Adress({ address, setAddress, detail, setDetail }) {
  const openPostcode = () => {
    const element_layer = document.getElementById("postcodeLayer");

    new window.daum.Postcode({
      oncomplete: (data) => {
        setAddress(data.address);
        element_layer.style.display = 'none';
      },
      onclose: (state) => {
        if (state === 'FORCE_CLOSE') {
          setAddress('');
        }
      },
      width: '100%',
      height: '100%',
    }).embed(element_layer);

    element_layer.style.display = 'block';
  };

  return (
    <div css={s.container}>
      <div
        id="postcodeLayer"
        style={{
          display: 'none',
          position: 'absolute',
          width: '390px',
          height: '630px',
          left: '50%',
          top: '120px',
          transform: 'translateX(-50%)',
          zIndex: 100,
        }}
      />
      <button css={s.click_adress} onClick={openPostcode}>
        {address ? <span>{address}</span> : <p>지번, 도로명, 건물명으로 검색</p>}
        <div css={s.icon}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.0834" cy="10.0833" r="5.5" stroke="#929292" strokeWidth="1.04762" />
            <path d="M10.0834 7.33337C9.72224 7.33337 9.36464 7.4045 9.03099 7.54271C8.69735 7.68091 8.39419 7.88347 8.13883 8.13883C7.88347 8.39419 7.68091 8.69735 7.54271 9.03099C7.4045 9.36464 7.33337 9.72224 7.33337 10.0834" stroke="#929292" strokeWidth="1.04762" strokeLinecap="round" />
            <path d="M18.3334 18.3333L15.5834 15.5833" stroke="#929292" strokeWidth="1.04762" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      {address && (
        <input
          type="text"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          style={{ borderBottom: "2px solid #ff6b6b", marginTop: "auto" }}
          placeholder="상세주소를 입력해주세요."
        />
      )}
    </div>
  );
}

export default Adress;
