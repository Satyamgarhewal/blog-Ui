import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


// import AuthorsPosts from './AuthorsPosts'
class PostsShow extends React.Component{
    constructor(){
        super()
        this.state={
            posts:{},
            users:[],
            comments:[]
            
        }
        console.log('Inside Post Show')
        
    }
    componentDidMount(){
        const id =this.props.match.params.id
       
    
        console.log('component did mount')
        console.log(id)
        
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            console.log('axios success')
            const posts =response.data
            console.log('setting state')
            this.setState({posts})
            console.log(this.state.posts)
            const userId = this.state.posts.userId
            console.log(userId)

            axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response=>{
                console.log('2nd axios call success')
                const users = response.data
                this.setState({users})
            })
           .catch(err=>{
               console.log(err)
           })
           console.log('userId calling')
           console.log(this.state.posts)
           const postId = this.state.posts.id
           axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments?postId=${postId}`)
           .then(response=>{
               console.log('axios comment success')
               console.log(postId)
               const comments = response.data
               console.log(comments)
               this.setState({comments})
           })
           .catch(err=>{
               console.log(err)
           })
            
        })
        .catch(err=>{
            console.log(err)
        })
       
       
    }

    render(){
        console.log('render')
        console.log(this.state.posts)
        // console.log(this.state.props.body)
        return(
            <div>
               {    console.log('inside render')}
                   {console.log(this.state.posts.userId)}
                    {console.log(this.state.comments)}

                  
                   
                <h2>{this.state.posts.title}</h2>
                <p>{this.state.posts.body}</p>
                <h3 data-toggle="tooltip"  data-placement="top"  title="More posts by the author">
                    <Link to={`/authors-posts/${this.state.posts.userId}`}>{this.state.users.name}</Link></h3>
                    <h3>Comments </h3>
              {this.state.comments.map(comment=>{
                  return <p key={comment.id}>Name-&nbsp;&nbsp;{comment.name}&nbsp;&nbsp;<br/>Email-&nbsp;&nbsp;{comment.email}<br/>Comment-&nbsp;&nbsp;{comment.body}</p>
                           
              })}
               
            </div>
        )
    }

}
export default PostsShow
