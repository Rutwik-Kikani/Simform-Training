import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {

    state={
        loadedPost: null,
    }

    componentDidMount(){
        console.log(this.props);
        this.loadData();         
    }
    componentDidUpdate(){
        this.loadData();
    }
    loadData(){
        if(this.props.match.params.id) //if id coming from props is null then not make request.
        {  
            if(!this.state.loadedPost //make request if we don't have loadedpost or 
                || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) //have a loaded post and that post id not match the id coming from props
                {  
                axios.get("/posts/"+this.props.match.params.id)
                .then((response) => {
                        // console.log(response);
                        this.setState({loadedPost: response.data});
                });
            }
        }
    }
    deletePostHandler= () => {
        axios.delete("/posts/"+this.props.match.params.id)
        .then(resp => {
            console.log(resp);
        })
    }

    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = <p style={{textAlign:'center'}}>Loading...!</p>;
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );    
        }
        return post;
    }
}

export default FullPost;