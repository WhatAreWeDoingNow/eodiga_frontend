import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from './style';
import CommonPage from '../../components/CommonPage/CommonPage';
import Header from '../../components/CommonPage/Header/Header';

function SignUp({page, setPage}) {
     const savedEmails = ['user1@example.com', 'user2@example.com', 'admin@company.com'];
  const [email, setEmail] = useState('');

  const handleSelectChange = (e) => {
    const selectedEmail = e.target.value;
    if (selectedEmail !== '') {
      setEmail(selectedEmail);
    }
  };
  return (
    <>
        <CommonPage text={"다음"} page={page} setPage={setPage}>
          <Header
            page={"signup"}
            index={page}
          />
          <div css={s.inputbox}>
              <input css={s.input} type="text" placeholder='두 글자 이상 입력해주세요.'/>
          </div>
        </CommonPage>
    </>

    
  )
}

export default SignUp