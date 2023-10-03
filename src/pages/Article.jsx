import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById, getCommentsByArticle } from '../utils/api'
import AddComment from '../components/AddComment'
import CommentCrd from '../components/CommentCrd'
import "../pages/Article.css"
import Vote from '../components/Vote'


const Article = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [username, setUsername] = useState("happyamy2016")
    const [userMessage, setUserMessage] = useState("")
    const [comments, setComments] =useState([])
    const [votes, setVotes] = useState(0)
    useEffect(()=>{
        setIsLoading(true)
        getArticleById(article_id)
        .then(({data}) => {
            setArticle(data.article)
            setIsLoading(false)
            setVotes(data.article.votes)
        })
        getCommentsByArticle(article_id)
        .then(({data}) => {
            setComments(data.comments)
        })
    },[])
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
            <div className="vote">Votes:<span className='heart'>&#10084;</span>{votes}</div>
            <Vote article={article} setArticle={setArticle} article_id={article_id} setVotes={setVotes} votes={votes} setError={setError}/>
        </div>
         {<AddComment comments = {comments} setComments = {setComments} username={username} article_id = {article_id} setError={setError} userMessage={userMessage} setUserMessage={setUserMessage}/> }
         <div className='comment-container'>
            
            <CommentCrd article_id = {article_id} comments = {comments} setComments = {setComments} username = {username} setError = {setError} userMessage={userMessage} setUserMessage={setUserMessage}/> 
         </div>
    </div>
  )
}

export default Article