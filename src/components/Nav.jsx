import React from 'react'
import {Link} from 'react-router-dom'
const Nav = ({topics}) => {
    
  return (
    <nav className='Nav'>
        {
            topics.map(topic =>{
              return <Link to ={`/articles/${topic.slug}`} key={topic.slug}>
                <button >{topic.slug}</button>
              </Link>

            })
        }
    </nav>
  )
}

export default Nav