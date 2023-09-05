import React from 'react'
import { convertDate } from '../utils/util'

const ArticleCard = ({article}) => {
    return (
        <li key={article.title} className='article-Card'>
            <img src={article.article_img_url} alt={article.description}/>
            <div className='display'>
                <p><span className='heart'>&#10084;</span>{article.votes}</p>
                <p>{convertDate(article.created_at)}</p>
            </div>
            <h4 className='article-title'>{article.title}</h4>
            <h5>by {article.author}</h5>
            <button className="btn-read">read more</button> 
        </li>
      )
}

export default ArticleCard