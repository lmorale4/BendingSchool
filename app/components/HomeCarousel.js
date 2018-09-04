import React from 'react';

const HomeCarousel = () => (
  <div id="homeCarousel" className="carousel slide" data-ride="carousel">
    <div className="corouselDiv">
      <ol className="carousel-indicators">
        <li data-target="#homeCarousel" data-slide-to="0" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="http://nick.mtvnimages.com/nick/properties/avatar/avatar-header-image-desktop-v.jpg?quality=0.75"
            alt="First slide"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HomeCarousel;
