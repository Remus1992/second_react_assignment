import React from 'react';

const validation = (props) => {
    let validationMessage = "Valid Length";

    if (props.userInputLength < 10 ) {
        validationMessage = "Text not long enough."
    }
    return (
        <div className="Validation">
            <p>Must be 10 letters long: Current length is: {props.userInputLength}</p>
            <p>{validationMessage}</p>
        </div>
    )
};

export default validation

//          Ternary Expression version (not advised generally because it's less reader friendly
//             {
//                 props.userInputLength > 9 ?
//                     <p>Valid Length</p> :
//                     <p>Text not long enough.</p>
//             }