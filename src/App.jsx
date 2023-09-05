import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Nav from './components/Nav'
import { getTopics } from './utils/api'

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
      
      <Home />
    </div>
  )
}

export default App
