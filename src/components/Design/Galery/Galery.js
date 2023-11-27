import React, { useState, useEffect } from "react";
import { Container, MySlides, ArrowButton, CaptionContainer, Row, Column, Demo } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

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
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <FaAngleLeft onClick={() => setCurrentImageIndex(currentImageIndex - 1)}/>
        <img src={images[currentImageIndex]} style={{ width: "100%" }} alt="imagen"/>
        <FaAngleRight onClick={() => setCurrentImageIndex(currentImageIndex + 1)}/>
      </div>
      <div style={{ display: "flex",  }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            style={{ width: "80px" }}
            alt="imagen"
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Galery;