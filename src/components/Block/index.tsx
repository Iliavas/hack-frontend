import react from 'react'
import "./style.css";

interface IBlock{
    className?: string;
    onClick?: () => void;
}

export const Block: react.FC<IBlock> = (props) => {
    const className = props.className || ""
    const onClick = props.onClick || null;
    return <div className={'block ' + className} onClick={onClick!}>{props.children}</div>
}