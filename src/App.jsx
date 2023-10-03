import { useState, useEffect} from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Nav from './components/Nav'
import { getArticles, getTopics } from './utils/api'
import { Routes, Route, Link,useParams } from 'react-router-dom'
import Article from './pages/Article'
import Topic from './pages/Topic'



function App() {
  const [topics, setTopics] = useState([])
  const[articles, setArticles] = useState([])
  const[isLoading, setIsLoading] = useState(true)
  
  
  useEffect(()=>{
    setIsLoading(true)
    getTopics()
    .then(({data})=>{ 
        setTopics(data.topics)
    })
    // getArticles()
    //   .then(({data})=>{ 
    //     setArticles(data.articles)
    //     setIsLoading(false)
    // })
  },[])
  return (
    <div className='App'>
     
      <Header topics={topics}/>
      {/* <Nav topics={topics}/>  */}
      <Routes>
        <Route path='/' element = {<Home isLoading={isLoading} setIsLoading = {setIsLoading} />}/>

        
      <Route path="/:topic/articles" element={<Topic />}/>
      <Route path="/articles/:article_id" element={<Article/>}/>
      </Routes>
      
    </div>
  )
}

export default App
