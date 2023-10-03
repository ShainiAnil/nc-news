import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import ArticleCard from '../components/ArticleCard'
import { getArticles, getArticlesByTopic } from '../utils/api'

const Topic = () => {
    const[articles, setArticles] =useState([])
    const {topic} = useParams()
    console.log(topic)
    const[isLoading,setIsLoading] =useState(false)
    useEffect(()=>{
        setIsLoading(true)
        getArticlesByTopic(topic)
        .then(({data})=>{ 
            setArticles(data.articles)
            setIsLoading(false)
        })
    },[topic])
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

export default Topic