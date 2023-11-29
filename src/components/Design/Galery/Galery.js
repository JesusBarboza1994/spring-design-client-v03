import React, { useState, useEffect } from "react";
import { Container, MySlides, ArrowButton, CaptionContainer, Row, Column, Demo, Imagen, Carusel, MainImage } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { colors } from "../../../styles/colors";

// const Galery = () => {
//   const [slideIndex, setSlideIndex] = useState(1);

//   const plusSlides = (n) => {
//     showSlides(slideIndex + n);
//   };

//   const currentSlide = (n) => {
//     showSlides(n);
//   };

//   const showSlides = (n) => {
//     let newIndex = n;
//     const slides = document.getElementsByTagName("MySlides");
//     const dots = document.getElementsByTagName("Demo");
//     const captionText = document.getElementById("caption");

//     if (newIndex > slides.length) {
//       newIndex = 1;
//     }

//     if (newIndex < 1) {
//       newIndex = slides.length;
//     }

//     setSlideIndex(newIndex);

//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }

//     for (let i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }

//     slides[newIndex - 1].style.display = "block";
//     dots[newIndex - 1].className += " active";
//     captionText.innerHTML = dots[newIndex - 1].alt;
//   };

//   useEffect(() => {
//     showSlides(slideIndex);
//   }, [slideIndex]);

//   return (
//     <div>
//       <h2 style={{ textAlign: 'center' }}>Slideshow Gallery</h2>
//       <Container>

//         <MySlides>
//           <img src="/Images/39.jpg" style={{ width: "100%" }} />
//         </MySlides>
//         <MySlides>
//           <img src="/Images/40.jpg" style={{ width: "100%" }} />
//         </MySlides>
//         <MySlides>
//           <img src="/Images/41.jpg" style={{ width: "100%" }} />
//         </MySlides>
//         <MySlides>
//           <img src="/Images/42.jpg" style={{ width: "100%" }} />
//         </MySlides>
//         <MySlides>
//           <img src="/Images/43.jpg" style={{ width: "100%" }} />
//         </MySlides>
//         <MySlides>
//           <img src="/Images/44.jpg" style={{ width: "100%" }} />
//         </MySlides>

//         <ArrowButton className="prev" onClick={() => plusSlides(-1)}>
//           ❮
//         </ArrowButton>
//         <ArrowButton className="next" onClick={() => plusSlides(1)}>
//           ❯
//         </ArrowButton>

//         <CaptionContainer>
//           <p id="caption"></p>
//         </CaptionContainer>

//         <Row>
//          <Column>
//              <Demo src="/Images/39.jpg" style={{ width: "100%" }} onClick={() => currentSlide(1)} alt="The Woods"/>
//           </Column>
//           <Column>
//              <Demo src="/Images/40.jpg" style={{ width: "100%" }} onClick={() => currentSlide(2)} alt="The Woods"/>
//           </Column>
//           <Column>
//              <Demo src="/Images/41.jpg" style={{ width: "100%" }} onClick={() => currentSlide(3)} alt="The Woods"/>
//           </Column>
//           <Column>
//              <Demo src="/Images/42.jpg" style={{ width: "100%" }} onClick={() => currentSlide(4)} alt="The Woods"/>
//           </Column>
//           <Column>
//              <Demo src="/Images/43.jpg" style={{ width: "100%" }} onClick={() => currentSlide(5)} alt="The Woods"/>
//           </Column>
//           <Column>
//              <Demo src="/Images/44.jpg" style={{ width: "100%" }} onClick={() => currentSlide(6)} alt="The Woods"/>
//           </Column>

//         </Row>
//       </Container>
//     </div>
//   );
// };
const Galery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ["/Images/39.jpg", "/Images/40.jpg", "/Images/41.jpg", "/Images/42.jpg", "/Images/43.jpg", "/Images/44.jpg"];

  return(
    <div style={{ margin: "auto", maxWidth: 1400, display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", }}>
        
        <MainImage src={images[currentImageIndex]} alt="imagen"/>
       
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <FaAngleLeft style={{ cursor: "pointer", color: "black",}} size={40} onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? (images.length - 1) : (currentImageIndex - 1))}/>
        
        <Carusel>
        
        {images.map((image, index) => (
          <Demo
            key={index}
            src={image}
            alt="imagen"
            onClick={() => setCurrentImageIndex(index)}
          />
         ))}
        
      </Carusel>

        <FaAngleRight style={{ cursor: "pointer",}} size={40} onClick={() => setCurrentImageIndex(currentImageIndex === (images.length - 1) ? 0 : (currentImageIndex + 1))}/>
      </div>
      
    </div>
  )
}

export default Galery;