import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'images/sp-1.jpg',
  },
  {
    url: 'images/sp-2.jpg',
  },
  {
    url: 'images/sp-3.jpg',
  },
  {
    url: 'images/sp-4.jpg',
  },
  {
    url: 'images/sp-5.jpg',
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
