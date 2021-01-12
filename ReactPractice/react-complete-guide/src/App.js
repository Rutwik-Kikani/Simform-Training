import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
    {name:"Rutwik", age:21},
    {name:"Zansi", age:16},
    {name:"Sanket", age:22},
    {name:"Bansi", age:18}
  ],
  otherKey: 'otherValue'
  }
  switchButtonHandler = () => {
    // console.log('was Clicked');
    // Don't Do thisthis.state.persons[0].name = "Rakesh";
    this.setState({
      persons:[
        {name:"Naruto", age:20},
        {name:"Vegeta", age:15},
        {name:"Goku", age:20},
        {name:"Natsu", age:15}
      ]
    })
  }
  render() {
    return (
      <div className="App">
       <h1>Hello I Am React App</h1>
       <p>This is working</p>
       <button onClick={this.switchButtonHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobbies: Racing, Art, Dance</Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
       <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );

  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello I Am React App'));
  }

}

export default App;
