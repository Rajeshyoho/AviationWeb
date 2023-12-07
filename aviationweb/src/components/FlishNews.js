import React, { useState, useEffect } from 'react';
import "./HorizontalMarquee.css"
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Container } from 'react-bootstrap';

const BreakingNews = () => {
  const [news, setNews] = useState([
    { title: 'Featured Air Transport News', url: '#1' },
    { title: 'Aviation Week Knowledge Center', url: '#2' },
    { title: 'Featured Defense & Space News', url: '#3' },
    // Add more dummy news items as needed
  ]);

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentNewsIndex((prevIndex) =>
        prevIndex === news.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the transition speed as needed

    return () => clearInterval(intervalId);
  }, [news]);

  const handleNextClick = () => {
    setCurrentNewsIndex((prevIndex) =>
      prevIndex === news.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentNewsIndex((prevIndex) =>
      prevIndex === 0 ? news.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container fluid style={{marginLeft:20,marginTop:5}}>
    <div className="breaking-news-section section">
      <div className="breaking-news-wrapper">
        <h5 className="breaking-news-title">Flash News</h5>
        <div className="breaking-news-content">
          <a
            href={news[currentNewsIndex].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {news[currentNewsIndex].title}
          </a>
        </div>
        <div className="navigation-buttons">
          <button className="change-news-button" onClick={handlePrevClick}>
            <ChevronLeftIcon />
          </button>
          <button className="change-news-button" onClick={handleNextClick}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default BreakingNews;