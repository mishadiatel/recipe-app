import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "./OptionItem.css";

const OptionItem = ({ title, optionsArray }) => {
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  const toggleOptions = () => setIsOptionsShown((state) => !state);

  return (
    <div
      className="option-item" /*onMouseLeave={() => setIsOptionsShown(false)}*/
    >
      <div
        className="option-title"
        onClick={toggleOptions}
        // onMouseEnter={() => setIsOptionsShown(true)}
      >
        <h4>{title}</h4>
        <AiFillCaretDown />
      </div>
      <div
        className={`options-content ${isOptionsShown ? "" : "hidden"}`}
        onMouseLeave={() => setIsOptionsShown(false)}
      >
        <ul>
          {optionsArray &&
            optionsArray.map((element, index) => {
              return (
                <li key={`${element}${index}`}>
                  <input
                    type="checkbox"
                    name={element}
                    id={`${element}${index}`}
                  />
                  <label htmlFor={`${element}${index}`}>{element}</label>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default OptionItem;
