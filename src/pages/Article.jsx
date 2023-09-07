import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById, updateArticleVotes } from '../utils/api'
import AddComment from '../components/AddComment'
import CommentCrd from '../components/CommentCrd'
import "../pages/Article.css"


const Article = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [user, setUser] = useState("happyamy2016")
    useEffect(()=>{
        setIsLoading(true)
        getArticleById(article_id)
        .then(({data}) => {
            setArticle(data.article)
            setIsLoading(false)
        })
    },[])

    const handleLike = ()=>{ 
        setArticle((prev) => (
            { ...prev,votes: prev.votes + 1}
        ));
        const updateVotesBy = { inc_votes: 1 } 
        updateArticleVotes(article_id, updateVotesBy)
        .catch((error) => {
            setError(error)
        })
        setDisabled(true)
    }
    const handleDisLike =()=>{ 
        setArticle((prev) => ({...prev,votes: prev.votes - 1}
        ));
        const updateVotesBy = { inc_votes: -1 } 
        updateArticleVotes(article_id, updateVotesBy)
        .catch((error) => {
            setError(error)
        })
        setDisabled(true)
    }
    if(isLoading) return <p>Loading...</p> 
    if (error) {
        return (
            {error} && <p>Whoops! Something went wrong, please try again</p>
        )
    }
  return (
    <div className='article-container'>
        <div className='article-desc'>
            <h2>{article.title}</h2>
            <h5>by {article.author}</h5>
            
            <img src={article.article_img_url} alt={article.description}/>
            <p>{article.body}</p> 
            
                <div className='like-dislike'>
                    <button className='like-dislike-btn' disabled ={disabled} onClick={handleLike}><span>&#128077;</span>{article.votes>0?article.votes:0}
                    </button>
                    <button className='like-dislike-btn' disabled ={disabled} onClick={handleDisLike}><span>&#128078;</span>{article.votes<0?-article.votes:0}</button>
                </div>
             
              
        </div>
         {/* <AddComment /> */}
         <div className='comment-container'>
            
            <CommentCrd article_id = {article_id}/> 
         </div>
    </div>
  )
}

export default Article