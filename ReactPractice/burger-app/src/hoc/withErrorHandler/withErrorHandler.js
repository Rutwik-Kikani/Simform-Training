
import React, { Component } from 'react';

import Model from '../../components/Ui/Model/Model';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                error: null,
            }
        }
        UNSAFE_componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(
                req => {
                    this.setState({ error: null })
                    return req;
                });
     
            this.resInterceptor = axios.interceptors.response.use(
                res => res, error => {
                    this.setState({ error: error });
                });
    
        }
        
        componentWillUnmount(){
            // console.log('[withErrorHandler.js] willUnMount',this.resInterceptor,this.reqInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        
        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        
        render(){
            return (
                <Aux>
                    <Model show={this.state.error}
                           modelClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Model>
                    <WrappedComponent {...this.props} />
                </Aux>
            );        
        }
    
    }
};

export default withErrorHandler;