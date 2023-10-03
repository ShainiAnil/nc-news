import React from 'react'
import { Link } from 'react-router-dom'
const Header = ({topics}) => {
  return (
    <div className='header'>
        
        <nav>
          <ul className='nav-link'>
            <li>
            <Link to="/"><span>Home</span></Link>
            </li>
            {topics.map(topic =>{
               return (<li key={topic.slug}>
                <Link to={`/${topic.slug}/articles`}><span>{topic.slug}</span></Link>
              </li>)
            })}
            
            
          </ul>
        </nav>
    </div>
  )
}

export default Header