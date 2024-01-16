import React, { useState, useEffect } from "react";
import { Container, MySlides, ArrowButton, CaptionContainer, Row, Column, Wrapper, Demo, Imagen, Carusel, MainImage, Button } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { PiUpload } from "react-icons/pi";
import { Modal, Modal_element } from "./Modal";

const Galery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ["/Images/39.jpg", "/Images/40.jpg", "/Images/41.jpg", "/Images/42.jpg", "/Images/43.jpg", "/Images/44.jpg"];

  
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return(
    <Wrapper>
    <div>
     <Button onClick={openModal}><PiUpload size={35}/></Button>
     <Modal_element isOpen={isModalOpen} onClose={closeModal}>
        <h2>Contenido del Modal</h2>
        <p>Este es un modal simple en React.</p>
      </Modal_element>
      
      
    </div>

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
    </Wrapper>
    
  )
}

export default Galery;