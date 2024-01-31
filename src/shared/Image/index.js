import React from "react";

const Image = ({ image, className, imageText }) => {
    return (<img src={ image.src } className={ className } alt={ imageText }  />)
}

export default Image;