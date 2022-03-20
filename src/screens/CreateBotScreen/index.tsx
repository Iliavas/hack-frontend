import react, { useState } from 'react';
import { Block } from '../../components/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import bigWheel from "./images/big-wheel.png";
import middleWheel from "./images/middle-wheel.png";
import smallWheel from "./images/small-wheel.png";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import './style.css';
import { useNavigate } from 'react-router-dom';
import { createBot } from '../../api/services/bots';


export const CreateBotScreen: react.FC = () => {

    const [name, setName] = useState("");
    const [apiKey, setApiKey] = useState("")

    const navigate = useNavigate();
    var interval = setTimeout(() => {
        if (localStorage.getItem("account_id") == null) {
            navigate("/telegram-login")
            clearInterval(interval);
        }
    }, 1000)
    return <div className='centered'>
        <MouseParallaxContainer className='paralaxContainer'>
            <MouseParallaxChild factorX={0.01} factorY={0.02} className="big-wheel">
                <img src={bigWheel} alt="" width={647}/>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.02} factorY={0.04} className="middle-wheel">
                <img src={middleWheel} alt="" width={446}/>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.03} factorY={0.05} className="small-wheel">
                <img src={smallWheel} alt="" width={197}/>
            </MouseParallaxChild>
        </MouseParallaxContainer>
        <Block className='create-bot__container'>
            <div className="inputs">
                <div className="header">
                    Создать бота
                </div>
                <Input placeholder='Имя' onChange={(e) => {
                    setName(e);
                }}></Input>
                <Input placeholder='Api ключ' onChange={(e) => {
                    setApiKey(e);
                }}></Input>
            </div>
            <Button onClick={() => {
                createBot(name, apiKey, "");
                navigate("/list");
            }}>Создать</Button>
        </Block>
        
    </div>
}