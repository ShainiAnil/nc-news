import React, { useEffect, useState } from 'react'
import { getArticles } from '../utils/api'
import ArticleCard from './ArticleCard'

const Articles = () => {
    const[articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)
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