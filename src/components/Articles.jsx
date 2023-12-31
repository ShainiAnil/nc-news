import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import ArticleCard from './ArticleCard'
import { getArticles, getArticlesByTopic } from '../utils/api'

const Articles = ({isLoading,setIsLoading}) => {
    const[articles, setArticles] =useState([])
    
    
    useEffect(()=>{
        setIsLoading(true)
        getArticles()
        .then(({data})=>{ 
        setArticles(data.articles)
        setIsLoading(false)
        })
        
    },[])
    if(isLoading) return <p>Loading...</p>
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