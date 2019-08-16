import React from 'react'

import{ Link} from 'react-router-dom'

function PostList (props){
    // console.log(props.id)s
    return(
       
        <div>
             {console.log('inside PostList')}
    <p key={props.id}><Link to ={`/posts/${props.id}`}>{props.title}<br/></Link></p>
   
    </div>
    )
}
export default PostList