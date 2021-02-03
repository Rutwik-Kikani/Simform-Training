import React, { Component } from 'react'
import axios from '../../../axios';
import  {Route} from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css';


class Posts extends Component {
    state={
        posts:[],
    }

    componentDidMount(){
        console.log(this.props);
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
            console.log(err);
            // this.setState({error: true});
        })
    }

    postSelectedHandler = (id) => {
        console.log(id)
        console.log('[Blog.js] postSelectedHandler');
        // this.setState({postSelectedId: id});
        this.props.history.push('/posts/'+id); //or
        // this.props.history.push({pathname: '/'+id});

    }

    render() {
        let posts = <p style={{textAlign: "center"}}>Somthing went wrong!! </p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return(
                    // <Link key={post.id} to={this.props.match.url+post.id}>
                        <Post  key={post.id}
                    title={post.title} 
                    author={post.author} 
                    clicked={() => this.postSelectedHandler(post.id)}/>
                    
                    // </Link>
                    );
                
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route exact path={this.props.match.url+"/:id"} component={FullPost}/>
            </div>
          
        )
    }
}

export default Posts;