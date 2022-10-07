import React from 'react'

const PagePostWrap = ({posts, handlePostClick, navigate, setCategory, slug}) => {
  return (
      <div className='second-post-wrap'>
          <h3>{`latest ${slug} updates`}</h3>
          {posts.map(post => {
              const { categories } = post

              if (setCategory(categories[0]) === slug || setCategory(categories[1]) === slug) {
                  const { id, title, _embedded, excerpt, categories } = post
                 
                  return (
                      <div onClick={e => handlePostClick(navigate, id)} key={id} className='post-card'>
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
              } })}

      </div>
  )
}

export default PagePostWrap