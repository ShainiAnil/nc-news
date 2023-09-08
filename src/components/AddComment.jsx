import React, { useState } from 'react'
import "../components/AddComment.css"
import { postComments } from '../utils/api'

const AddComment = ({comments,setComments,username,article_id,setError}) => { 
  const[comment, setComment] = useState("")
  const [message, setMessage] = useState("")
  const changeHandler = (event) =>{
    setComment(event.target.value)
   
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    const newComment = {}
    if(comment.length < 5){
      setMessage('Text is too short')
    }
    else{setMessage('')}
    newComment.username = username;
    newComment.body = event.target.inputComment.value
    
    const newCommentCopy = {...newComment,comment_id:Date.now(),author:username }
    
    if(comment.length > 5){
      setComments((prev) => ([newCommentCopy,...comments]
        ));
        setComment("")
        setMessage("Comment added successfully!")
      postComments(article_id,newComment)

        .catch((error) => {
            setError(error)
        })
    }
    
   
  }
  return (
    <div className='add-comment'>
       
        <form className='form-data' onSubmit={handleSubmit}>
            <div className="display-item">
              <label htmlFor="input-textarea">Add comment: 
            
              <textarea className="comment"   id="input-textarea" name="inputComment" onChange={changeHandler} value={comment}></textarea></label>
              {message &&<span className={message==='Text is too short'?'error-msg':'success-msg'}>{message}</span>}
            </div>
            <div className="display-item">
              <button>Submit</button>
              <button type='reset' onClick={(()=>setComment(""))}>Reset</button>
            </div>
            
        </form>
        
    </div>
  )
}

export default AddComment