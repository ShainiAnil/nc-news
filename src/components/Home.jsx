import React, { useEffect, useState } from 'react'
import Articles from './Articles'
import Nav from './Nav'
import { getTopics } from '../utils/api'

const Home = ({isLoading, setIsLoading}) => {
    const[topics,setTopics] =useState([])
    
    useEffect(()=>{
        setIsLoading(true)
        getTopics()
        .then(({data}) => {
            setTopics(data.topics)
            setIsLoading(false)
        })
    },[])
  return (
    <div className='home-container'>
        <h1>Welcome to NC News!!!</h1>
         
        <Articles isLoading={isLoading} setIsLoading = {setIsLoading} />
    </div>
  )
}

export default Home