import React, { useContext, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from "../context/AppContext"

import TitleWrap from "../components/pages/TitleWrap"
import PagePostWrap from "../components/pages/PagePostWrap"

const Pages = () => {
    let { slug } = useParams()
    let navigate = useNavigate()

    const { loadPosts, posts, setCategory, handlePostClick, categories } = useContext(AppContext)

    useEffect(() => {
        loadPosts()
    }, [])
    
    return (
        <section className='main-view-wrap'>

            {categories.map(category => {
                const { name, description, count, id } = category
                if (name === slug) {
                    return (
                        <TitleWrap key={id} slug={slug} description={description} count={count} />
                    )
                }
            })}

            <PagePostWrap posts={posts}
                handlePostClick={handlePostClick}
                navigate={navigate}
                setCategory={setCategory}
                slug={slug}
            />

        </section>
    )
}

export default Pages