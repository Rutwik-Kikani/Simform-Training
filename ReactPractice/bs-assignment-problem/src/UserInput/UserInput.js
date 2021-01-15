import React from 'react';

const userInput = (props) =>{
    const style = {
        border: '2px solid red',
        margin: '16px',
    }
    return (
        <div>
        <input type="text" style={style} onChange={props.changed} value={props.currentUser}/>
        </div>
    );
}

export default userInput;