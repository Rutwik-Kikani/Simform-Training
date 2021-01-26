import React, { Component } from 'react';
// import styles from './App.module.css';

//? import components
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder/>
      </Layout>
    );
  }
}

export default App;
