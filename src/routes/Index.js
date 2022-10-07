import React, {useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

//Components
import FirstPost from '../components/home/firstPost'
import SecondPostWrap from '../components/home/secondPostWrap'

const Home = () => {
   let navigate = useNavigate()

   const { loadPosts, posts, setCategory, handlePostClick } = useContext(AppContext)


   useEffect(() => {
      loadPosts()
   }, [])

   return (

      <section className='main-view-wrap'>
         <FirstPost
            posts={posts}
            handlePostClick={handlePostClick}
            navigate={navigate}
         />

         <SecondPostWrap
            title='Latest Updates'
            posts={posts}
            handlePostClick={handlePostClick}
            setCategory={setCategory}
            navigate={navigate}
         />

         <div className='bridge-wrap'>
            <div className='bridge'>
               <p></p>
            </div>
         </div>

         <SecondPostWrap
            title='Trending'
            posts={posts}
            handlePostClick={handlePostClick}
            setCategory={setCategory}
            navigate={navigate}
         />

         <div className='bridge-wrap'>
            <div className='bridge'>
               <p></p>
            </div>
         </div>

      </section>
   )
}


export default Home