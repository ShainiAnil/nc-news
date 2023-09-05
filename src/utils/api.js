import axios from 'axios';
const BASE_URL = "https://news-api-vfij.onrender.com/api";

export const getArticles = () =>{ 
   return axios
   .get(`${BASE_URL}/articles`)
}
export const getTopics = () =>{ 
    return axios
    .get(`${BASE_URL}/topics`)
 }
