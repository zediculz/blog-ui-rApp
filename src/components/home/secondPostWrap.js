import React from 'react'

function SecondPostWrap({posts, handlePostClick, setCategory, navigate, title}) {
  return (
      <div className='second-post-wrap'>
          <h3>{title}</h3>
          {posts.filter((post, i) => i !== 0).slice(4, posts.length).map(post => {
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
          })}
      </div>
  )
}

export default SecondPostWrap