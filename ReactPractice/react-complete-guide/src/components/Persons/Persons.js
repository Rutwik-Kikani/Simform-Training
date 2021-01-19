import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {

  //don't have state so commented.
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromState');
  //   return state;
  // }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    // if(nextProps.person !== this.props.person)
    //   return true;
    // else
    //   return false;
    return true;
  }

  //removed from react
  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps');
  // }

  //removed from react
  // componentWillUpdate(){
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshort!'};
  }

  //most often use.
  componentDidUpdate(prevProps, prevState, snapshort ){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshort);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount')
  }
  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
/*
const persons = (props) =>{ 
  console.log('[Persons.js] rendering...')
  return props.persons.map((person, index) => {      
        return (
          <Person 
          name={person.name} 
          age={person.age}
          key={person.id}
          click={() => props.clicked(index)}
          changed={(event) => props.changed(event, person.id)}/>
        );
    });
  }

export default persons;
*/
