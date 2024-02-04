import React from "react";

const Button = ({ type, className, disabledText, text, onClick }) => {
    return (<button type={type} className={`${className} transition duration-300 ease-in-out`} disabled={'' || disabledText} onClick={onClick || null} > {text} </button>)
}

export default Button;