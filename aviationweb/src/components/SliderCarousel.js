import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const YourSlider = () => {
    const [progressBarWidth, setProgressBarWidth] = useState(0);

  const sliderTimer = 5000;
  const beforeEnd = 500;

  const progressBar = () => {
    setProgressBarWidth(0);

    setTimeout(() => {
      setProgressBarWidth(100);
    }, 100);
  };

  const titleAnim = () => {
    const currentSlide = document.querySelector('.slick-current');
    currentSlide.querySelector('h1').classList.add('show');
    setTimeout(() => {
      currentSlide.querySelector('h1').classList.remove('show');
    }, sliderTimer - beforeEnd);
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: sliderTimer,
    speed: 1000,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    beforeChange: () => {
      progressBar();
    },
    afterChange: (index) => {
      titleAnim(index);
    },
  };

  useEffect(() => {
    progressBar();
    titleAnim();
  }, []);
  return (
    <div className="slider-wrap">
      <Slider className="image-slider" {...settings}>
        <div className="img-wrap">
          <h1></h1>
          <img src="https://images.unsplash.com/photo-1627501691850-db08eb81199a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="img-wrap">
          <h1></h1>
          <img src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="img-wrap">
          <h1></h1>
          <img src="https://images.unsplash.com/photo-1623888676435-d3b01b4d1dc0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </Slider>
      <div className="slider-progress">
        <span style={{ width: `${progressBarWidth}%` }}></span>
      </div>
    </div>
  );
};

export default YourSlider;
