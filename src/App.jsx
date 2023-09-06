import { useState, useEffect} from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Nav from './components/Nav'
import { getTopics } from './utils/api'
import { Routes, Route } from 'react-router-dom'
import Article from './pages/Article'

function App() {
  const [topics, setTopics] = useState([])
  useEffect(()=>{
    getTopics()
    .then(({data})=>{ 
        setTopics(data.topics)
    })
},[])
  return (
    <div className='App'>
     
      <Header/>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path="/articles/:article_id" element={<Article />}/>
      </Routes>
      
    </div>
  )
}

export default App
