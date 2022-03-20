import react from "react";
import "./style.css"

interface IInput{
    placeholder?:string;
    onChange: (e: string) => void
}

export const Input: react.FC<IInput> = (props) => {
    const placeholder = props.placeholder || ""
    return <input type="text" placeholder={placeholder} onChange={(e) => {
        props.onChange(e.target.value);
    }} />
}