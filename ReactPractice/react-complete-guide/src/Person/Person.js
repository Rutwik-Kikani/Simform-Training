import React from 'react';
import classes from './Person.css';



//style.<HTMLComponentName> returns a component with style pass in ``
// const StyleDiv = styled.div` 
// width: 60%;
// margin: 16px auto;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding: 16px;
// text-align: center;

// @media(width : 500px){
//      width : 450px;
// }
// `;

const person = (props) => {
    
    return (
        <div className={classes.Person}>
        
            <p onClick={props.click}> I am {props.name},Age:{props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
            
        
        );
    
};
export default person;