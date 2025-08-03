import React from 'react';
import { useNavigate } from 'react-router-dom';
import CommonPage from '../../components/CommonPage/CommonPage';

function Home () {
    const navigate = useNavigate();

    return (
        <div css={s.buttons}>
            <MainButton text={"로그인"} onClick={() => navigate('/signin')}/>
              <div>
                <button css={s.select_button} onClick={() => navigate('/finduser')}>계정찾기</button>
                <span css={s.space}>|</span>
                <button css={s.select_button} onClick={() => navigate('/signup')}>가입하기</button>
              </div>
        </div>
    );
}

export default Home;