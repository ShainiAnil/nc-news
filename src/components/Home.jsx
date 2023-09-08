import React, { useEffect, useState } from 'react'
import Articles from './Articles'
import Nav from './Nav'
import { getTopics } from '../utils/api'

const Home = () => {
    const[topics,setTopics] =useState([])
    useEffect(()=>{
        // setIsLoading(true)
        getTopics()
        .then(({data}) => {
            setTopics(data.topics)
        })
    },[])
  return (
    <div className='home-container'>
        <h1>Welcome to NC News!!!</h1>
        {/* <Nav topics={topics}/> */}
        <Articles />
    </div>
  )
}

export default Home