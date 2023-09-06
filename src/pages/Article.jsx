import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../utils/api'
import { convertDate } from '../utils/util'
import AddComment from '../components/AddComment'
import CommentCrd from '../components/CommentCrd'



const Article = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [active,setActive] =useState(false)
    
    useEffect(()=>{
        getArticleById(article_id)
        .then(({data}) => {
            setArticle(data.article)
            
        })
    },[])
    const handleClick = ()=>{
        setActive(prev=>!prev)
    }

  return (
    <div className='article-container'>
        <div className='article-desc'>
            <h2>{article.title}</h2>
            <h5>by {article.author}</h5>
            
            <img src={article.article_img_url} alt={article.description}/>
            <p>{article.body}</p> 
            <p className='vote'>Add Vote:<span className={active?'active heart-black': 'heart-black'} onClick={handleClick}>&#9825;</span>{article.votes}</p>   
              
        </div>
         {/* <AddComment /> */}
         <div className='comment-container'>
            
            <CommentCrd article_id = {article_id}/> 
         </div>
    </div>
  )
}

export default Article