import React from "react";

const Button = ({ type, className, disabledText, text, onClick, image }) => {
    return (
    <button type={type} className={`${className} transition duration-300 ease-in-out`} disabled={'' || disabledText} onClick={onClick || null} >
        {image ? <img src={image.src} className="h-8 w-10 object-fill" alt={text}/>  : null}
        {text} </button>
        )
}

export default Button;