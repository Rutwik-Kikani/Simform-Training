import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass'
class Person extends Component{

    render(){
    console.log('[Person.js] rendering...');
    return (
        <Fragment>
            
            <p onClick={this.props.click}> I am {this.props.name},Age:{this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}></input>
        
        </Fragment>            
    );
    }
}

export default withClass(Person, classes.Person);
/*
//style.<HTMLComponentName> returns a component with style pass in ``
// const StyleDiv = styled.div` 
// width: 60%;
// margin: 16px auto;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding: 16px;
// text-align: center;

// @media(width : 500px){
//      width : 450px;
// }
// `;

const person = (this.props) => {
    // const rnd = Math.random();
    
    // if( rnd > 0.7){
    //     throw new Error('Somthing went wrong');
    // }

    console.log('[Person.js] rendering...');
    return (
        <div className={classes.Person}>
            <p onClick={this.props.click}> I am {this.props.name},Age:{this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}></input>
        </div>
            
    );
    
};
export default person;
*/