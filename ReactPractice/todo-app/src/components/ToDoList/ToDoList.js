import React from 'react';
//import components
import ListItem from'./ListItem/ListItem';

const toDoList = (props) => {
    
    // console.log('[ToDoList.js] what to come as prop',props);

    const checkBoxChangeHandler = (item, index) => {
        // console.log('[ToDolist.js] checkbox chnage handler fire');
    //     //change status of passlist
        console.log(props.passlist); //this list automaticaly updated why no clue!!
    }

    const listItems = props.passlist.map((item,index) =>{
        // console.log(index);
        return (<ListItem key={index} 
            todoText={item.text} 
            status={item.status}
            // checkBoxClicked={() => {
            //     console.log('[ToDoList.js] checkBoxClicked!!');
            //     checkBoxChangeHandler(item,index);
            // }} 
            checkBoxClicked = {() => {
                console.log('[ToDoList.js] checkBoxClicked!!');
                props.checkboxChangeHappen(item,index)}}
        />)
    });
        
    return(
        <ul>
            {listItems}
            {/* <ListItem key={0} todoText="Once a fairy tail is guild full of wizards"/> */}
        </ul>
    );
}

export default toDoList; 

// changed={() => {props.anyChange(item.status,index)}}