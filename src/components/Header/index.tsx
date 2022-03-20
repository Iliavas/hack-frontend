import react from 'react';
import "./style.css";
import arrow from "./images/arrow.svg";
import { useNavigate } from 'react-router-dom';

interface IHeader{
    heading: string;
}

export const Header: react.FC<IHeader> = (props) => {
    const navigate = useNavigate();
    const heading = props.heading;

    return <div className='header__container'>
        <img className='img__header' src={arrow} alt="" height={21} onClick={() => {
            navigate(-1);
        }} />
        <div className="header-title">
            {heading}
        </div>
        <div></div>
    </div>
}