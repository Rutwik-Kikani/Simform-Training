import React,{useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    //rus for every render cycle.
    //replacement for componentDidMount(use empty arryay) + componentDidUpdate(use array with props.persons) use for HTTP request.
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request...
        // setTimeout(() => {
        //     alert('Save data to cloud');
        // },1000);
        //for unmount
        return () => {
            console.log('[Cockpit.js] cleanup work with useEffect');
        }
    }, []);

    //runs on every update cycle.
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work 2nd with useEffect');
        }
    })

    const assignedclasses = []; //"red bold"
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.persons.length <= 2)  {
      assignedclasses.push(classes.red); //classes = [red]
    }
    if(props.persons.length <= 1) {
      assignedclasses.push(classes.bold); //classes = [red bold]
    }


    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedclasses.join(' ')}>This is working</p>
            <button className={btnClass}
                onClick={props.clicked}>
                Toggle 
            </button>
        </div>
        
    );
}

export default cockpit;