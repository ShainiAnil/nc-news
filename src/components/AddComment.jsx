import React, { useState } from 'react'
import "../components/AddComment.css"
import { postComments } from '../utils/api'

const AddComment = ({comments,setComments,username,article_id,setError}) => { 
  const[comment, setComment] = useState("")
  const[userMessage,setUserMessage] = useState("")
  const changeHandler = (event) =>{
    setComment(event.target.value)
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    setError("")
    const newComment = {}
    if(comment.length < 5){
      setUserMessage('Text is too short')
    }
    else{setUserMessage('')}
    newComment.username = username;
    newComment.body = event.target.inputComment.value
    
    const newCommentCopy = {...newComment,comment_id:Date.now(),author:username }
    
    if(comment.length > 5){
      setComments((prev) => ([newCommentCopy,...comments]
        ));
        setComment("")
        setUserMessage("Comment added successfully!")
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
              <label htmlFor="input-textarea">Add a comment: 
            
              <textarea className="comment"   id="input-textarea" name="inputComment" onChange={changeHandler} value={comment}></textarea></label>
              {userMessage &&<span className={userMessage==='Text is too short'?'error-msg':'success-msg'}>{userMessage}</span>}
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