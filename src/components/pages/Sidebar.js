import React from 'react';
import { Link } from 'react-router-dom';

export default function SidebarWrap() {
  return (
      <section className='sidebar-view-wrap'>
          <div className='sidebar-view'>
              <div className='tags-list'>
                  <p>Tags</p>
                  <ul>
                      <li><Link to='/'>iphone</Link></li>
                      <li><Link to='/'>Trending</Link></li>
                      <li><Link to='/'>andriod</Link></li>
                      <li><Link to='/'>Samsung</Link></li>
                      <li><Link to='/'>reviews</Link></li>
                      <li><Link to='/'>news </Link></li>
                      <li><Link to='/'>how to guides </Link></li>
                      <li><Link to='/'>smart home </Link></li>
                      <li><Link to='/'>laptops </Link></li>
                      <li><Link to='/'>ios </Link></li>

                  </ul>
                  <p>More</p>
                  <ul>
                      <li><Link to='/'>Join techblog Plus</Link></li>
                  </ul>
              </div>
          </div>
      </section>
  );
}
