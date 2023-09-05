import React, { useEffect, useState } from 'react'
import { getArticles } from '../utils/api'
import ArticleCard from './ArticleCard'

const Articles = () => {
    const[articles, setArticles] = useState([])
    
    useEffect(()=>{
        getArticles()
        .then(({data})=>{ 
            setArticles(data.articles)
        })
    },[])
    return (
        <ul className='article-list'>
        {
            articles.map((article) =>{
                return(
                    <ArticleCard key={article.article_id} article={article}/>
                )
            })
        }
        </ul>
    )
}

export default Articles