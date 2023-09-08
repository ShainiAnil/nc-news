import React, { useState } from 'react'
import { updateArticleVotes } from '../utils/api';

const Vote = ({article_id,setVotes,votes,setError}) => {
    const [disabled,setDisabled] =useState(false)
    const handleLike = ()=>{ 
        
        setVotes(votes +1)
        const updateVotesBy = { inc_votes: 1 } 
        updateArticleVotes(article_id, updateVotesBy)
        .catch((error) => {
            setError(error)
        })
        setDisabled(true)
    }
    const handleDisLike =()=>{ 
        setVotes(votes-1)
        const updateVotesBy = { inc_votes: -1 } 
        updateArticleVotes(article_id, updateVotesBy)
        .catch((error) => {
            setError(error)
        })
        setDisabled(true)
    }
  return (
    <div className='like-dislike'>
        <button className='like-dislike-btn' disabled ={disabled} onClick={handleLike}><span>&#128077;</span>
        </button>
        <button className='like-dislike-btn' disabled ={disabled} onClick={handleDisLike}><span>&#128078;</span></button>
    </div>
  )
}

export default Vote