import React from 'react'
import { useNavigate } from 'react-router-dom';
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'
import { createUser } from '../../api/services/users';
import './style.css';


export const TelegramLogin: React.FC = () => {
    const navigate = useNavigate();
    return <div className='account-create__container'>
        <div className="header">Создать аккаунт: </div>
        <TelegramLoginButton botName='ilia123_bot' dataOnauth={(e) => {
            createUser(e.id.toString(), e.username);
            localStorage.setItem("account_id", e.id.toString())
            navigate('/');
        }} />
    </div>
}