
import React, { useState } from 'react';
import './App.css';
import video from './bg/video.mp4'
import second from './bg/second.mp4'
import indonesia from './bg/indonesia.mp4'

interface VideoSlide {
  src: string;
  autoplay: boolean;
  muted: boolean;
  title: string;

}



interface VideoSliderProps {
  slides: VideoSlide[];

}

function VideoSlider({ slides }: VideoSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handlePrevSlide() {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  }

  function handleNextSlide() {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  }
  function dotIndex(index: number) {
    setActiveIndex(index);
  }


  return (
    <div className="slider">
      <div className="arrow arrow-left" onClick={handlePrevSlide}></div>
      {slides.map((slide, index) => (
        <div key={index} className={index === activeIndex ? 'slide active' : 'slide'}>
          <video src={slide.src} autoPlay={slide.autoplay} muted={slide.muted} loop />
          <h2  className='title-slide'>{slide.title}</h2>
          <div className='dots'>
        
            {slides.map((slide, index ) => (
              <div onClick={() => dotIndex(index)} className={activeIndex === index ? "active" : "dot"}>•</div>
            ))}

          </div>
         
        </div>
        
     
      ))}

      <div className="arrow arrow-right" onClick={handleNextSlide}></div>
    
    </div>
    
  );
}

function App() {
  const slides: VideoSlide[] = [
    { src: video,  autoplay: true, muted: true, title: 'New Zealand' },
    { src: second, autoplay: true, muted: true, title: 'New York' },
    { src: indonesia, autoplay: true, muted: true, title: 'Indonesia' },
  
  ];

  return (
    <div className="App">
      <VideoSlider slides={slides} />
    </div>
  );
}

export default App;

