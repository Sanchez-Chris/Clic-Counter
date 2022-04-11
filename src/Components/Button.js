import React from "react";
import './Button.css';

function Button( {text, isButtonClic, functionClic} ) {
    return (
        <div className="button-container">
        <button 
            className={ isButtonClic ? "button-clic" : "button-reset" }
            onClick={functionClic}
            >
            {text}
        </button>
        </div>
    )
}

export default Button;