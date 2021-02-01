import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component {
    state={
        posts:[],
        postSelectedId:null,
        error: false,
    }
    componentDidMount(){
        axios.get("/posts")
        .then(response => {
            // console.log(response);
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return{
                    ...post,
                    author:'Rk'
                }
            }) 
            this.setState({posts: updatedPosts})
        })
        .catch(err => {
            // console.log(err);
            this.setState({error: true});
        })
    }

    postSelectedHandler = (id) => {
        console.log(id)
        console.log('[Blog.js] postSelectedHandler');
        this.setState({postSelectedId: id});
        
    }

    render () {
        let posts = <p style={{textAlign: "center"}}>Somthing went wrong!! </p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return<Post key={post.id} 
                    title={post.title} 
                    author={post.author} 
                    clicked={() => this.postSelectedHandler(post.id)}/>
            });
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.postSelectedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;