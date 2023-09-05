import React from 'react'

const Nav = ({topics}) => {
    
  return (
    <nav className='Nav'>
        {
            topics.map(topic =>{
              return <button key={topic.slug}>{topic.slug}</button>

            })
        }
    </nav>
  )
}

export default Nav