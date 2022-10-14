import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { GoThreeBars, GoX } from 'react-icons/go'

export default function Header() {

   const { loadAppHead } = useContext(AppContext)

   const [opened, setOpened] = useState(false)

   const handleMenu = () => setOpened(!opened)

   useEffect(() => {
      loadAppHead()
   }, [])

   return (
      <header>
         <div className='innerheader'>
            <div className='logowrap'>
               <h1>
                  <Link to="/">Tech<span>Miche</span></Link>
               </h1>
            </div>
            <nav>
               <ul>
                  <li><Link to="/page/trending">Trending</Link></li>
                  <li><Link to="/page/Reviews">Reviews</Link></li>
                  <li><Link to="/page/Howtos">Howto</Link></li>
                  <li><Link to="/page/news">News</Link></li>
               </ul>
            </nav>
            <div className='accountwrap'>
               <button>Get Started</button>
            </div>
            <div className='menuwrap'>
               <p onClick={handleMenu}>
                  {opened ? <GoX /> : <GoThreeBars />}
               </p>
            </div>
         </div>
         <div style={{display: opened ? 'flex' : 'none'}} className='mobile-menu-wrap'>
            <ul>
               <li><Link to="/page/trending">Trending</Link></li>
               <li><Link to="/page/Reviews">Reviews</Link></li>
               <li><Link to="/page/Howtos">Howto</Link></li>
               <li><Link to="/page/news">News</Link></li>

               <p onClick={handleMenu}>Close</p>
            </ul>
         </div>
      </header>
   )
}