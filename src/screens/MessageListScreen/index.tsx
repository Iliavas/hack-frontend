import react from 'react'
import { Header } from '../../components/Header'
import { Message } from '../../components/Message'
import "./style.css";

export const MessageListScreen: react.FC = () => {
    return <div>
        <Header heading='Последние сообщения' />
        <div className="messages">
            
        </div>
    </div>
}