import React, { Component } from 'react';

import style from './Model.module.css';

import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class  Model extends Component{
    
    shouldComponentUpdate(nextProps, nextState){
        // console.log('[Model.js] checking for should update or not!!')
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentDidUpdate(){
        // console.log('[Model.js] component updated');
    }

    render(){
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modelClosed}/>
                <div className={style.Modal}
                 style={{
                     transform: this.props.show?'translateY(0)':'translateY(-100vh)',
                     opacity: this.props.show?'1':'0',
                 }}>
                {this.props.children}
            </div>
            </Aux>
            
        );    
    }
}

//*functional component
/**
 const model = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modelClosed}/>
            <div className={style.Modal}
             style={{
                 transform: this.props.show?'translateY(0)':'translateY(-100vh)',
                 opacity: this.props.show?'1':'0',
             }}>
            {props.children}
        </div>
        </Aux>
        
    );
};
*/
export default Model; 