import React,{useState, useRef, useCallback, useEffect} from 'react'

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "2rem",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "10px",
  cursor: "pointer",
  fontSize: "15px",
  color: "#fff",
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 1s",
};

const slidesContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
};

const Slider = ({slides, parentWidth}) => {
  const timer= useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].path})`,
    width: `${parentWidth}px`,
  });
  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      goToNext();
    }, 1500);

    return () => clearTimeout(timer.current);
  }, [goToNext]);


  return (
    <div style={slideStyles}>
            <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div style={{...dotStyle, ...(slideIndex === currentIndex ? {color:'#5AC2BC'}:{})}} 
          key={slideIndex} 
          onClick={() => goToSlide(slideIndex)}><i className={`fas fa-circle ${slideIndex === currentIndex ? "activeDot" : ""}`}></i></div>
        ))}
      </div>
    </div>
  )
}

export default Slider
