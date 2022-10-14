import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function Footer() {
  const [rand, setRand] = useState(0)
  const { posts } = useContext(AppContext)

  useEffect(() => {
    setRand(Math.floor(Math.random() * posts.length))
  }, [])

  return (
    <footer className='footer-wrap'>
      <div className='links-box'>
          <h3>Links</h3>
          <Link to='/'>Privacy Policy</Link>  
          <Link to='/'>Terms and Condition</Link>  
          <Link to='/'>Ads Terms and Condition</Link>   
      </div>
      <div className='socials-box'>
        <h3>Social media</h3>
          <Link to='/'>Instagram</Link>  
          <Link to='/'>Twitter</Link>  
          <Link to='/'>Facebook</Link>  
          <Link to='/'>Youtube</Link>   
      </div>
      <div className='about-box'>
        <h3>About</h3>
          <Link to='/'>TechBlog</Link>  
          <Link to='/'>Contact Us</Link>  
          <Link to='/'>Advertise</Link>  
      </div>
      <div className='bulletin-box'>
        <h3>Bullentin</h3>
        {posts.map((post, i) => {
          if (i === rand) {
            const { title, id } = post
            return (<Link key={rand} to={`/post/${id}`}>{ title.rendered }</Link>  )
          }
        })}
        </div>
    </footer>
  )
}

export default Footer