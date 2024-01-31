import React from "react";

const Radio = ({ type, name, id, value, onChange, labelText }) => {
    return (
        <>
          <div>
            <input
              type= "radio" 
              id= {id}
              name= "gender"
              value={value}
              onChange={onChange}
            />
            <label htmlFor={labelText} className="ml-1">{labelText}</label>
          </div>
        </>
    )
}

export default Radio;