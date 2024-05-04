import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import vt_image1 from './assests/v1.jpeg'
import vt_image2 from './assests/Designer (4).png'
import vt_image3 from './assests/Designer (5).png'
import vt_image4 from './assests/Designer (2).png'
import vt_image5 from './assests/Designer (3).png'
import vt_image6 from './assests/Designer.png'
import vt_image7 from './assests/meenakshi.png'

import './ControlledCarousel.css';

export default function ControlledCarousel() {
  let imagetext = "passes";
  return (
    <div className='carousel'>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className="image" src={vt_image6} alt={imagetext} />
          <Carousel.Caption className='caroCaption'>
            {/* <h3>BHU VishwaNath Temple</h3> */}
            <h3>"Peace cannot be kept by force; it can only be achieved by understanding"</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="image" src={vt_image3} alt={imagetext} />
          <Carousel.Caption className='caroCaption'>
            <h3>"We are the same in the End"</h3>
            <p>Shree Kashi Vishwanath Temple</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="image" src={vt_image7} alt={imagetext} />
          <Carousel.Caption className='caroCaption'>
            <h3>"In the end, all that matters is how much love we shared and the memories we created."</h3>
            <p>Meenakshi Temple</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className='image' src={vt_image5} alt={imagetext} />
          <Carousel.Caption className='caroCaption'>
            <h3>"We cannot Take anything with us in the End"</h3>
            <p>Kedarnath Temple</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className='image' src={vt_image2} alt={imagetext} />
          <Carousel.Caption className='caroCaption'>
            <h3>"Both Heaven and Hell is present here."</h3>
            <p>Golden Temple</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className='image' src={vt_image4} alt={imagetext} />
          <Carousel.Caption className='caroCaption'>
            <h3>"Whether it's 10 pointer or 6 pointer, all will lead to Manikarnika."</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
