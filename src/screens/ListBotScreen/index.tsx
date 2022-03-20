import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBotFromUser, getBots } from '../../api/services/bots';
import { BotListInfo } from '../../components/BotInListInfo';
import { Button } from '../../components/Button';
import "./style.css";
import moment from 'moment';


export const ListBotScreen: react.FC = () => {
    const navigate = useNavigate();
    const [bots, setBots] = useState([]);
    const [isQuery, setQuery] = useState(false);
    
    if (!isQuery) {
        setQuery(true);
        getBotFromUser().then((e) => {
            console.log(e);
            const data = e.admin_chats.map((e:any) => {
                var minDate = new Date();
                var minDateCompare = 9999999;
                for (var i = 0; i < e.message_set.length; ++i) {
                    if (minDateCompare < Date.parse(e.message_set[i].time_created)) {
                        minDate = moment(e.message_set[i].time_created).toDate();
                    }
                }
                return {
                    name: e.name,
                    last_message: e.message_set.length == 0 ? 'never' : minDate,
                    active: (minDate.getTime() > Date.now() - 30 * 1000 * 60) || e.message_set.length == 0,
                    id: e.tg_id.toString(),
                    
                }
            })
            setBots(data);
        })
    }



    return <div className='list-bot__container'>
        {
            bots.map((e) => {
                return <BotListInfo {...e} />
            })
        }
        <Button onClick={() => {
            navigate("/");
        }}>Создать +</Button>
    </div>
}