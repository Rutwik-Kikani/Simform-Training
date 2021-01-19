import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedclasses = []; //"red bold"
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red
;    }
    if(props.persons.length <= 2)  {
      assignedclasses.push(classes.red); //classes = [red]
    }
    if(props.persons.length <= 1) {
      assignedclasses.push(classes.bold); //classes = [red bold]
    }


    return(
        <div className={classes.Cockpit}>
            <h1>Hi I'm React App</h1>
            <p className={assignedclasses.join(' ')}>This is working</p>
            <button className={btnClass}
                onClick={props.clicked}>
                Toggle 
            </button>
        </div>
        
    );
}

export default cockpit;