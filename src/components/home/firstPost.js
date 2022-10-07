import React, { useContext } from "react";
import { AppContext } from '../../context/AppContext'

function FirstPost({ posts, handlePostClick, navigate }) {
  const { setCategory } = useContext(AppContext)

  return (
    <div className='first-post-wrap'>
      {posts.filter((post, i) => i === 0).map(post => {
        const { id, title, excerpt, categories, _embedded } = post
        return (
          <div onClick={e => handlePostClick(navigate, id)} key={id} className='first-post-card'>
            <div className='card-img'>
              <img src={_embedded['wp:featuredmedia'][0].source_url} alt={_embedded['wp:featuredmedia'][0].title.rendered} />
            </div>
            <div className='card-content'>
              <span>{setCategory(categories[0])}</span>
              <h2>{title.rendered}</h2>
              <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></p>
            </div>
          </div>
        )
      })}

      <div className='firstFive-post-wrap'>
        {posts.filter((post, i) => i !== 0).slice(0, 4).map(post => {
          const { id, title, categories } = post
          return (
            <div onClick={e => handlePostClick(navigate, id)} key={id} className='postcard'>
              <p>{setCategory(categories[0])} <span></span></p>
              <h2>{title.rendered}</h2>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default FirstPost;