import React from 'react';

const validation = (props) => {
    
    let validationMessage = 'Text to long';

    if(props.inputLength <= 5){
        validationMessage = 'Text to short';
    }

    return (
        <div>{
            // props.inputLength < 5? 
            // <p>Text too short</p> :
            // <p>Text too longs</p>
            validationMessage
            }
        </div>
    );

}

export default validation;