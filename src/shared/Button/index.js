import React from "react";

const Button = ({ type, className, disabledText, text}) => {
    return (<button type={ type } className={ `${className} transition duration-300 ease-in-out` } disabled={ '' || disabledText }> {text} </button>)
}

export default Button;