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
export const updateArticleVotes = (article_id, updateVotes) => {
   return ncNews.patch(`/articles/${article_id}`, updateVotes)
   .then(({data}) => {
       return data.article;
   })
}

export const postComments = (article_id,newComment) => {
   
   return  ncNews.post(`/articles/${article_id}/comments`,newComment )
   .then(({data}) => {
      return data.comment;
  })
}