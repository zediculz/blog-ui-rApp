import React from 'react';

export default function TitleWrap({slug, description, count}) {
  return (
      <div className="page-title-wrap">
          <h1>{slug}</h1>
          <p>{description}</p>
          <span>{count} Total Posts</span>
      </div>
  );
}
