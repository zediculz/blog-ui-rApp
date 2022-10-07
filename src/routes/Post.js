import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { AppContext } from "../context/AppContext";

import cimg from '../assets/img.png'

const Post = () => {
    let { id } = useParams()
    const [rand, setRand] = useState(0)
    const [alt, setAlt] = useState(4)

    const {  setCategory, loadPosts, posts } = useContext(AppContext)

    useEffect(() => {
        loadPosts()
        let r = Math.floor(Math.random() * 3)

        if (r === 0) {
            setRand(r)
        } else if (r === 1) {
            setAlt(alt + 1)
            setRand(r)
        } else if (r === 2) {
            setAlt(alt + 2)
            setRand(r)
        }
    }, [])

    return (
        <section className='main-view-wrap'>
            {posts.filter((p, i) => p.id === Number(id)).map(post => {
                
                const { id, title, categories, date, content, _embedded } = post
                
                return (
                    <div key={id} className="post-view-wrap">
                        <div className="post-view-head">
                            <h1>{title.rendered}</h1>
                            <p>{setCategory(categories[0])} <span>{date}</span></p>
                        </div>
                        <div className="post-view-image">
                            <img src={_embedded['wp:featuredmedia'][0].source_url} alt={_embedded['wp:featuredmedia'][0].title.rendered} />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: content.rendered }} className="post-view-content"></div>
                    </div>
                )
            })}

            <div>
                <p></p>
            </div>
            
            <h3 className="related-h3">Related Posts</h3>
            <div className="related-post-wrap">
                {posts.filter((p, i) => p.id !== Number(id)).slice(rand, alt).map(relate => {
                    const { id, title, _embedded } = relate
                    return (
                        <div key={id} className="related-card">
                            <div className="card-img">
                                <img src={_embedded['wp:featuredmedia'][0].source_url} alt={_embedded['wp:featuredmedia'][0].title.rendered} />
                            </div>
                            <div className="card-content">
                                <h3>{ title.rendered}</h3>
                            </div>
                        </div>
                    )

                })}
            </div>
        </section>
    )
}

export default Post