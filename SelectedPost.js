import React from 'react'
import axios from 'axios';

import {Link} from 'react-router-dom'
class SelectedPost extends React.Component{
    constructor(){
        super()
        this.state={
            post:{},
            author:[],
            comments:[]
        }

    }
    componentDidMount(){
        console.log('Inside Selected Post')
        console.log('Component did mount')
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            console.log('axios.success')
            const post = response.data
            console.log(post)
            this.setState({post})
            
            console.log('axios author call')
            const userId = this.state.post.userId
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response=>{
                console.log('axios author success')
                const author= response.data
                console.log(author)
                this.setState({author})
            })
            .catch(err=>{
                console.log(err)
            })

            console.log('axios comment call')
            const postId=this.state.post.id
            console.log(postId)
            axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments?postId=${postId}`)
            .then(response=>{
                const comments=response.data
                this.setState({comments})
            })
            .catch(err=>{
                console.log(err)
            })
            
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){   
        const {title,id, body} = this.state.post
        console.log(this.state.author)
        return(
            <div>
                    <h2 key ={id}>{title}</h2>
                    <p>{body}</p>
                 <h2  data-toggle="tooltip"  data-placement="top"  title="More posts by the author"> Author-&nbsp;<Link to={`/authors-posts/${this.state.post.userId}`} >{this.state.author.name}</Link></h2>
                    <h3>Comments</h3>
                    {this.state.comments.map(comment=>{
                        return <p key={comment.id}>Name-&nbsp;{comment.name}<br/>Email-&nbsp;{comment.email}<br/>Comment-&nbsp;{comment.body}</p>
                    })}
                
            </div>
        )
    }
}
export default SelectedPost 