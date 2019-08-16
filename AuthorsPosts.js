import React from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

class AuthorsPosts extends React.Component{
    constructor()
    {
        super()
        this.state={
            posts:[]
        }
        console.log('inside Authors Show')
    }
    componentDidMount(){
        console.log('component did mount')
        const id = this.props.match.params.userId
        console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response=>{
            console.log('axios success')

            const posts = response.data 
            console.log('retrieved posts',posts)    
            this.setState({posts})
           

        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <h1>More posts written by the author.</h1>
               {this.state.posts.map(post=>{
                   return <p key ={post.id}><Link to={`/selected-post/${post.id}`}>{post.title}</Link></p>
               })}
            </div>
        )
    }
}
export default AuthorsPosts