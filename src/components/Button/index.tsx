import react from "react";
import "./style.css";

interface IButton{
    onClick?: () => void;
}


export const Button: react.FC<IButton> = (props) => {
    const onClick = props.onClick || null;
    return <button className="button" onClick={onClick!}>
        {props.children}
    </button>
}