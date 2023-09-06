import React from 'react'
import { convertDate } from '../utils/util'
import { Link } from 'react-router-dom'
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
            <Link to={`/articles/${article.article_id}`}><button className="btn-read">read more</button></Link>
        </li>
      )
}

export default ArticleCard