import React from 'react';

const validation = (props) => {
    return (
        <div className="Validation">
            <p>Length is: {props.userInputLength}</p>
            {
                props.userInputLength > 10 ?
                    <p>Valid Length</p> :
                    <p>Text not long enough.</p>
            }
        </div>
    )
};

export default validation