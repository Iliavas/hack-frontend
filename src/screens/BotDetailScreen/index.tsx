import react, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getBot } from '../../api/services/bots';
import { getUser } from '../../api/services/users';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header'
import { Message } from '../../components/Message';
import "./style.css";


export const BotDetailScreen: react.FC = () => {
    const navigate = useNavigate();
    const {id} = useParams<{id: string}>();
    const [chat, setChat] = useState([]);
    const [chatName, setChatName] = useState('');
    const [isQuery, setIsQuery] = useState(false);
    const onDelete = (id: string) => {
        console.log(id, chat);
        //setChat(chat.filter((e) => (e as any).id != id))
    }

    if (!isQuery) {
        setIsQuery(true);
        getBot(id!).then((e) => {
            setChatName(e.name);
            setChat(e.message_set.map((mes: any) => {
                console.log(e);
                return {
                    text: mes.text,
                    author: mes.author.username,
                    id: mes.tg_id,
                    onDelete: (id: string, chat: any) => {
                        console.log(id, chat)
                        setChat(chat.filter((e:any) => (e as any).id != id))
                    }
                }
            }))
        })
    }

    return <div>
        <Header heading={chatName} />
        <div className='centered_'>
            <div className="global-width">
                <div className='last-messages'>
                    <div className="last-messages__header">
                        Последние сообщения
                    </div>
                    <div className="last-messages__content">
                        {
                            chat.map((e) => {
                                return <Message {...e} />
                            })
                        }
                        <Button onClick={() => {navigate("messages")}}>Посмотреть все</Button>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
}