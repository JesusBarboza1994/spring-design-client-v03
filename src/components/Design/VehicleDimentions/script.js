import React, { useState, useEffect } from 'react';
import { DivContainer, Next, Lado, SpanDot } from './styles';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <DivContainer>
      <div className="mySlides">
        <Lado>LADO IZQUIERDO</Lado>
        <img src="/Images/Component-58-Izq.webp" align="left" width="90%" />
        
      </div>

      <div className="mySlides">
        <Lado>LADO DERECHO</Lado>
       <img src="/Images/Component-58-Der.webp" align="left" width="90%" />
       
      </div>

      <Next className="prev" onClick={() => plusSlides(-1)}>
        ❮
      </Next>
      <Next className="next" onClick={() => plusSlides(1)}>
        ❯
      </Next>

      <div style={{ textAlign: 'center' }}>
        <SpanDot className="dot" onClick={() => currentSlide(1)}></SpanDot>
        <SpanDot className="dot" onClick={() => currentSlide(2)}></SpanDot>
        
      </div>
    </DivContainer>
  );
};

export default Slideshow;
