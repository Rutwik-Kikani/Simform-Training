import React,{Component} from 'react';

import styles from './App.module.css'

import Layout from './hoc/Layout/Layout';
import BurgerBuillder from './containers/BurgerBuilder/BurgerBuillder';
 class App extends Component {
  render(){
    return (
    
     <Layout>
       <BurgerBuillder/>
     </Layout>
    
  );}
}

export default App;
