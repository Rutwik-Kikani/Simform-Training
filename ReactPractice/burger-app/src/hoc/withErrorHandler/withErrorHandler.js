import axios from 'axios';
import React, { Component } from 'react';

import Model from '../../components/Ui/Model/Model';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent) => {
    return class extends Component{
        state = {
            error: null,
        }
        componentDidMount(){
            axios.interceptors.request.use(req=>{
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
        }
        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        
        render(){
            return (
                <Aux>
                    <Model show>
                        Somthing didn't work!
                    </Model>
                    <WrappedComponent {...this.props} />
                </Aux>
            );        
        }
    
    }
};

export default withErrorHandler;