import react from "react";
import { Block } from "../Block";
import activeState from "./images/active.png";
import backImage from "./images/Upgrading.png";
import sleepState from "./images/Sleep.png";
import backImageSleep from "./images/Upgrading_disabled.png";
import "./style.css"
import { useNavigate } from "react-router-dom";
import ReactTimeAgo from 'react-time-ago'

interface IBotListInfo{
    active: boolean;
    name: string;
    last_message: Date | 'never';
    id: string;
}


export const BotListInfo: react.FC<IBotListInfo> = (props) => {
    const navigate = useNavigate();

    const isActive = props.active;
    const name = props.name;
    const last_message = props.last_message;
    const id = props.id;

    var backgroundImage = backImage;
    var botImage = activeState;
    var sleepClass = "";
    var colorizeSleepClass = "";

    if (!isActive) {
        botImage = sleepState;
        backgroundImage = backImageSleep;
        sleepClass = " greyscale";
        colorizeSleepClass = " halfOpacity"
    }

    return <Block 
            className="bot-list__item" 
            onClick={() => {navigate("/list/"+id)}}
        >
        <div className="bot__info">
            <div className="bot__header">
                <img src={botImage} alt="" width={29} />
                <div className={"header" + sleepClass}>{name}</div>
            </div>
            <div className={"last__send" + sleepClass}>
                Last message:
                {
                    last_message == 'never' ? last_message : <ReactTimeAgo 
                    className={"colorize" + colorizeSleepClass} 
                    date={last_message} locale="en-US" />
                }
                
            </div>
        </div>
        <img src={backgroundImage} alt="" height={145} />
    </Block>
}