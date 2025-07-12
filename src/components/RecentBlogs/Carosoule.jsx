import React from 'react';
import './RecentBlogs.css'; // Make sure to import the stylesheet

const Carousel = ({ items }) => {
  // If there are no items, don't render anything
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      {/* Loop through each blog post and create a clickable slide */}
      {items.map(item => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="slide-link"
        >
          <div className="slide">
            <img src={item.image} alt={item.title} className="slide-image" />
            <div className="slide-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Carousel;