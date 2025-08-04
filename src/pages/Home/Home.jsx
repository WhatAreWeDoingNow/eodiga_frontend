/** @jsxImportSource @emotion/react */
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import MainInput from '../../components/Input/MainInput/MainInput';
import PeoplesButton from '../../components/Buttons/PeoplesButton/PeoplesButton';
import TimeButton from '../../components/Buttons/TimeButton/TimeButton';
import Calendar from '../../components/Calendar/Calendar';

function Home () {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');

    const [selectedPeopleId, setSelectedPeopleId] = useState(null);
    const [selectedTimeId, setSelectedTimeId] = useState(null);

    const handlePeopleSelect = (id) => {
        setSelectedPeopleId(id);
        console.log(`인원 ${id}번 버튼 선택됨`);
    };

    const handleTimeSelect = (id) => {
        setSelectedTimeId(id);
        console.log(`시간 ${id}번 버튼 선택됨`);
    };

    return (
        <div css={s.test}>
            {/* <Calendar css={s.cal} />
            <MainInput />
            <span css={s.userName}>
              {userName}님, 반가워요! 어디가에서 즐거운 여행 되세요
            </span>

            <div css={s.adultButton}>
                {[1, 2, 3, 4].map((count) => (
                    <PeoplesButton
                        key={count}
                        id={count}
                        count={count}
                        isSelected={selectedPeopleId === count}
                        onSelect={handlePeopleSelect}
                    />
                ))}
            </div>

           <div css={s.timeButton}>
            {[19, 20, 21, 22].map((count) => (
                <TimeButton
                    key={count}
                    id={count}
                    time={`${count}:00`}
                    isSelected={selectedTimeId === count}
                    onSelect={handleTimeSelect}
                />
  ))}
        </div> */}

        </div>

        
    );
}

export default Home;
