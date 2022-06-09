import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Card from 'react-bootstrap/Card';

const slideImages = [
  {
    url: 'images/sp-1.jpg',
    id: 1,
  },
  {
    url: 'images/sp-2.jpg',
    id: 2,
  },
  {
    url: 'images/sp-3.jpg',
    id: 3,
  },
  {
    url: 'images/sp-4.jpg',
    id: 4,
  },
  {
    url: 'images/sp-5.jpg',
    id: 5,
  },
];

const Slideshow = () => {
  return (
    <Card className="card-slide">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <a href="/Search" key={index}>
            <div className="each-slide" key={index}>
              <div
                className="card-img-top-sl"
                style={{ backgroundImage: `url(${slideImage.url})` }}
              ></div>
            </div>
          </a>
        ))}
      </Slide>
    </Card>
  );
};

export default Slideshow;
