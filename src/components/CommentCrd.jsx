import React, { useEffect, useState } from 'react'
import { deleteComment, getCommentsByArticle } from '../utils/api'
import "../components/CommentCard.css"

const CommentCrd = ({comments,setComments,username,setError}) => {
   const[userMessage, setUserMessage] = useState("")
   
  const handleDelete = (event)=>{
    setError("")
    const id = Number( event.target.value)
    const filteredComments = comments.filter((comment) => comment.comment_id !== id)
    setComments(filteredComments)
    setUserMessage("Comment deleted successfully!")
    deleteComment(id)
        .catch((error) => {
            setError(error)
        })
    }
   
  return (
    comments.length>0?
    <div className='comment-card'>
       
        <h3>Comments:</h3>{userMessage &&<span className={userMessage==='Comment deleted successfully!'?'success-msg':""}>{userMessage}</span>}
        {  
            comments.map(comment =>{
                return(<div key = {comment.comment_id} className='comment'>
                    <p>{comment.body}</p>
                    <div className='display-content'>
                        {
                            comment.author === username?<div className='delete-btn' ><button onClick={handleDelete} value ={comment.comment_id}>&#128465;</button></div>:<></>
                        }
                    <p className='author'>@{comment.author}</p>
                    <div className='like-dislike'><span>&#128077;
                    {comment.votes>0?comment.votes:0}</span>
                    <span>&#128078;
                    {comment.votes<0?-comment.votes:0}</span></div>
                    </div>
                    
                </div>)
            })

        }
    </div>
    :<div className='comment-card'>
        <h4>No comments yet! </h4>
    </div>
  )
}

export default CommentCrd