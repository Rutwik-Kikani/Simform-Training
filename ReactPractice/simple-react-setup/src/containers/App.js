import React, { Component } from "react";
import styles from "./App.module.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <h2>header</h2>
      </header>
      
        <h1 className={styles.natsu}>To Do App</h1>
      <footer>
        <h2>footer</h2>
      </footer>
      </div>
      
    );
  }
}

export default App;
