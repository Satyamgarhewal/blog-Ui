import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import {Button} from 'react-bootstrap/Button'

import Post from './Posts'
import PostsShow from './PostsShow'
import AuthorsPosts from './AuthorsPosts'
import SelectedPost from './SelectedPost'

function App(props) {
  return (
    <BrowserRouter>
    <button type="button" class="btn btn-outline-primary"><Link to="/" exact={true} >Home</Link></button>
  
    {/* <Post /> */}
    <Route path="/" exact={true} component={Post}/>
   <Route path = "/posts/:id" component={PostsShow}/> 
   <Route path="/authors-posts/:userId"exact={true} component ={AuthorsPosts}/>
   <Route path="/selected-post/:id" component={SelectedPost}/>
   </BrowserRouter>
  )
}

export default App;
