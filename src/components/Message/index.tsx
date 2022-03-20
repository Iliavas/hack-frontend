import react from 'react';
import { Block } from '../Block';
import './style.css';
import trash from './image/trash.png';
import { deleteMessage } from '../../api/services/messages';


interface IMessage {
    text: string;
    author: string;
    id: string;
    onDelete: (id: string) => void;
}

export const Message: react.FC<IMessage> = (props) => {
    const text = props.text;
    const author = props.author;
    const id = props.id;
    console.log(props);
    return <div className='message-hovered__block'>
        <Block className='message__block'>
            <div className="message__content">{text}</div>
            <a href={'https://t.me/'+author} className="message__author">
                {'@'+author}
            </a>
        </Block>
        <Block className="on_hover">
            <img src={trash} width={40} alt="" onClick={() => {
                deleteMessage(id);
                props.onDelete(id);
            }} />
        </Block>
    </div> 
}