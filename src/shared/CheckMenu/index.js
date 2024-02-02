import React, { useState } from "react";

const CheckMenu = ({ id, labelText, labelClass, options, onCheckChange }) => {
    const [checkedState, setCheckedState] = useState(
        options.map((option) => false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        if (onCheckChange) {
            onCheckChange(updatedCheckedState);
        }
    };
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className={labelClass}>
                {labelText}
            </label>
            {options.map((option, index) => (
                <label key={index} className="inline-flex items-center mt-3">
                    <input
                        type="checkbox"
                        name={option.value}
                        value={option.value}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                        className="form-checkbox h-5 w-5 text-gray-600"
                    /><span className="ml-2 text-gray-700">{option.label}</span>
                </label>
            ))}
        </div>
    );
};

export default CheckMenu;
