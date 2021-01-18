import React from 'react';
import './Person.css';
import styled from 'styled-components';


//style.<HTMLComponentName> returns a component with style pass in ``
const StyleDiv = styled.div` 
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media(width : 500px){
     width : 450px;
}
`;

const person = (props) => {
    
    return (
        //<div className="Person" style={style}>
        <StyleDiv>
            <p onClick={props.click}> I am {props.name},Age:{props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </StyleDiv>
            
        //</div>
        );
    
};
export default person;