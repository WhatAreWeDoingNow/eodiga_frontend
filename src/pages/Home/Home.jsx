import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "../../components/CardPage/CardPage";
// MainButton import 필요 없다면 제거
// import MainButton from "../../components/MainButton/MainButton";

function Home () {
    const navigate = useNavigate();

    return (
        <Card title="TEST" describe="TEST!" />
    );
}

export default Home;
