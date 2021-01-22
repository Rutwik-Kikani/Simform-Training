import React, { Component } from "react";
import './App.css';

/*import Component */
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ListItem from '../components/ToDoList/ListItem/ListItem';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
    };
    this.toggleChange = this.toggleChange.bind(this);
  }
  toggleChange (){
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }
  render() {
    return (
      <div className="App">

        <Header />
        <div className="Listbox">
          <ul>
           <ListItem 
              checked={this.state.isChecked} changed={this.toggleChange}></ListItem>
          </ul>
        </div>


        <Footer></Footer>

      </div>

    );
  }
}

export default App;
