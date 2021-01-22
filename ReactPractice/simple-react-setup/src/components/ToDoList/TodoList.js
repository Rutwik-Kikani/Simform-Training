import React from 'react';
//import components
import ListItem from'./ListItem/ListItem';

const toDoList = (props) => {
    
    // console.log(props.passlist);

    const checkBoxChangeHandler = (status, index) => {
        console.log('[ToDolist.js] checkbox chnage handler fire');
        //change status of passlist
        props.passlist[index].status = !status;
        console.log(props.passlist);
    }

    const listItems = props.passlist.map((item,index) =>
        <ListItem key={index} 
            todoText={item.text} 
            status={item.status}
            changed={() => {checkBoxChangeHandler(item.status,index)}}
        />
    );

    // console.log(listItems);
        
    return(
        <ul>
            {listItems}
            {/* <ListItem key={0} todoText="Once a fairy tail is guild full of wizards"/> */}
        </ul>
    );
}

export default toDoList; 