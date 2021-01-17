import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";


// App Component as class base Component
class App extends Component {
  state = {
    persons: [
      { name: "Rutwik", age: 21 },
      { name: "Zansi", age: 16 },
      { name: "Sanket", age: 22 },
      { name: "Bansi", age: 18 }
    ],
    otherKey: "Some Other Value",
    showPerson: false
  };


  switchButtonHandler = (...newNames) => {
    // console.log('was Clicked');
    // Don't Do this // this.state.persons[0].name = "Rakesh";
    this.setState({
      persons: [
        { name: newNames[0], age: 20 },
        { name: newNames[1], age: 15 },
        { name: newNames[2], age: 20 },
        { name: newNames[3], age: 15 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 20 },
        { name: event.target.value, age: 15 },
        { name: event.target.value, age: 20 },
        { name: event.target.value, age: 15 },
      ],
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      coursor: 'pointer'
    }

    let persons =null;

    if(this.state.showPerson){
      persons = (
        
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm React App</h1>
        <p>This is working</p>
        <button
          onClick={this.togglePersonsHandler}
          style={style}> 
            Toggle 
        </button>
        {persons}
      </div>
    );
  }
}

export default App;


/*<Person name={this.state.persons[0].name} age={this.state.persons[0].age}
              click={() => this.switchButtonHandler("Naruto!", "Saske!", "Sakura!", "Kakashi!")}
              changed={this.nameChangeHandler}>Hobbies: Racing,Art,Dance</Person> */


/*
//  app component with function base component
 const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Rutwik", age: 21 },
      { name: "Zansi", age: 16 },
      { name: "Sanket", age: 22 },
      { name: "Bansi", age: 18 },
    ],
  });

  const [otherState, setOtherState] = useState({otherKey: "otherValue"})

  console.log(personsState, otherState);

  const switchButtonHandler = () => {
    // console.log('was Clicked');
    // Don't Do thisthis.state.persons[0].name = "Rakesh";
    setPersonsState({
      persons: [
        { name: "Naruto", age: 20 },
        { name: "Vegeta", age: 15 },
        { name: "Goku", age: 20 },
        { name: "Natsu", age: 15 },
      ],

    });
  };

  return (
    <div className="App">
      <h1>Hello I Am React App</h1>
      <p>This is working</p>
      <button onClick={switchButtonHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
        Hobbies: Racing, Art, Dance
      </Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age}/>
    </div>
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello I Am React App'));
  );
};

export default app;
*/