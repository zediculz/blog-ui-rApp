import React, { createContext, useState, useEffect } from 'react'


export const AppContext = createContext()

const AppContextProvider = ({ children }) => {

   const [posts, setPosts] = useState([])
   const [post, setPost] = useState([])
   const [categories, setCategories] = useState([])

   const loadAppHead = async e => {
      let req = await fetch('http://localhost:10013/wp-json')
      let res = await req.json()
   }

   const loadPosts = async e => {
      let req = await fetch('http://localhost:10013/wp-json/wp/v2/posts?_embed&per_page=20')
      let res = await req.json()
      setPosts(res)
   }

   const manageRoute = (location, navigate, path, gameId) => {
      //check the initial state
      const { state } = location

      //update and return state
      navigate(`/${path}`, { state })
   }

   const setCategory = id => {
      if (id === 1) {
         return 'Reviews'
      } else if (id === 2) {
         return 'Howtos'
      } else if (id === 3) {
         return 'news'
      } else if (id === 4) {
         return 'trending'
      } else if (id === 21) {
         return 'bulletin'
      }

      else {
         return 'uncategorized'
      }
   }

   const handlePostClick = (navigate, e) => {
      console.log('clicked', e)
      navigate(`/post/${e}`)
   }

   const loadCat = async e => {
      let req = await fetch('http://localhost:10013/wp-json/wp/v2/categories')
      let res = await req.json()
      setCategories(res)
   }

   const loadSinglePost = async id => {
      let req = await fetch(`http://localhost:10013/wp-json/wp/v2/posts/${id}`)
      let res = await req.json()
      setPost(res)
   }

   useEffect(() => {
      loadCat()
   }, [])

   return (
      <AppContext.Provider
         value={{ loadAppHead, loadPosts, posts, setCategory, handlePostClick, categories }}>
         {children}
      </AppContext.Provider>
   )
}

export default AppContextProvider