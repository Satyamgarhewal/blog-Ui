import React from 'react'
import axios from'axios'
// import {BrowserRouter, Router, Link} from 'react-router-dom'

import PostList from './PostList'
class Post extends React.Component{
    
    constructor(){
        console.log('constructor')
        super()
        this.state={
            posts:[]
        }
        console.log('inside Posts')
    }
    
    componentDidMount(){
        console.log('component did mount')
        const url="http://jsonplaceholder.typicode.com/posts"
        axios.get(url)
        .then(response=>{
            console.log("axios success")
            const posts =response.data
            this.setState({posts})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render()
    {
        console.log('render')
        // console.log(posts)
        return (
            <div>
                
                
                {
                   
                    this.state.posts.map(post=>{
                   return <PostList userId ={post.userId} id={post.id} key={post.id} title={post.title} body={post.body} />
                    
                })

               
            
                }
              
            </div>
        )
    }
}
export default Post