import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import styles from './App.module.css'

import Layout from './hoc/Layout/Layout';
import BurgerBuillder from './containers/BurgerBuilder/BurgerBuillder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

 class App extends Component {
  render(){
    return (
    
     <Layout>
       <Switch>
       {/* <BurgerBuillder/> */}
       {/* <Checkout/> */}
       <Route path="/checkout" component={Checkout}></Route>
       <Route path="/orders" component={Orders}></Route>
       <Route path="/auth" component={Auth}></Route>
       <Route path="/logout" component={Logout}></Route>
       <Route path="/" exact component={BurgerBuillder}></Route>
       </Switch>
     </Layout>
    
  );}
}

export default App;
