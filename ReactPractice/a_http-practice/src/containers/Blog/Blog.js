import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './Blog.css';

import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
class Blog extends Component {  

    render () {        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true',
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route exact path="/" component={Posts}/>
                <Route exact path="/new-post" component={NewPost}/>

            </div>
        );
    }
}

export default Blog;

/*
syntax for route
<Route path="/" exact render={() => <h1>Home</h1>}/>
<Route path="/" render={() => <h1>Home2</h1>}/>
*/