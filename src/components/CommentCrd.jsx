import React, { useEffect, useState } from 'react'
import { getCommentsByArticle } from '../utils/api'
import "../components/CommentCard.css"

const CommentCrd = ({article_id,comments,setComments}) => {
  
   
  return (
    comments.length>0?
    <div className='comment-card'>
       
        <h3>Comments:</h3>
        {  
            comments.map(comment =>{
                return(<div key = {comment.comment_id} className='comment'>
                    <p>{comment.body}</p>
                    <div className='display-content'>
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