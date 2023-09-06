import React, { useEffect, useState } from 'react'
import { getCommentsByArticle } from '../utils/api'

const CommentCard = ({article_id}) => {
    const [comments, setComments] =useState([])
    useEffect(()=>{
        getCommentsByArticle(article_id)
        .then(({data}) => {
            setComments(data.comments)
        })
    },[])
    console.log(comments)
  return (
    <div className='comment-card'>
        {  
            comments.map(comment =>{
                return(<div key = {comment.comment_id} className='comment'>
                    <p>{comment.body}</p>
                </div>)
            })

        }
    </div>
  )
}

export default CommentCard