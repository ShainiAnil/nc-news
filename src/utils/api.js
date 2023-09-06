import axios from 'axios';

const ncNews = axios.create({baseURL:"https://news-api-vfij.onrender.com/api"})

export const getArticles = () =>{ 
   return ncNews.get("/articles")
}
export const getTopics = () =>{ 
    return ncNews.get("/topics")
}
export const getArticleById = (id) =>{
   return ncNews.get(`/articles/${id}`)
}
export const getCommentsByArticle = (id) =>{
   return ncNews.get(`/articles/${id}/comments`)
}