import React, { useState, useEffect } from "react";
import {
  Container,
  MySlides,
  ArrowButton,
  CaptionContainer,
  Row,
  Column,
  Wrapper,
  Demo,
  Imagen,
  Carusel,
  MainImage,
  Button,
  ImgContainer,
  IconContainer,
} from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { colors } from "../../../styles/colors";
import { PiUpload } from "react-icons/pi";
import {RiCloseLine} from "react-icons/ri"
import { MdAddCircleOutline } from "react-icons/md";
const Galery = ({ setCounter, counter }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (images.length > 0) {
      setCounter({ ...counter, Galery: { quantity: 1, counter: 1 } });
    }else{
      setCounter({ ...counter, Galery: { quantity: 1, counter: 0 } });
    }
  }, [images])
  function deleteImage(event,index){
    setImages(images.filter((_img, i)=>i !== index))
    setCurrentImageIndex(0)
  }
  function handleFileSelect(event){
    setCurrentImageIndex(0)
    const files = event.target.files;
    // setFormdata({...formdata, "images":files});
    const imgsPrev = [];
    const imagesQuantity = files.length <= 10 ? files.length : 10;
    for (let i = 0; i < imagesQuantity; i++) {
      const file = files[i];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        imgsPrev.push(reader.result);
        setImages([...images, ...imgsPrev]);
        
      }
      reader.readAsDataURL(file);
    }
  }

  return (
    <Wrapper>
      {images.length === 0 ? <label htmlFor='images'
       style={{ cursor: 'pointer',
                backgroundColor: colors.cell,
                color: 'black',
                height: 50,
                width: 180,
                borderRadius: 30,
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                
    }}>
            <PiUpload size={30}/>
            <input 
                id="images" 
                type="file" 
                accept='image/*'
                multiple
                style={{ display: 'none', }}
                onChange={handleFileSelect}/>
        Subir imagen        
     </label>
      : (
        <div
          style={{
            margin: "auto",
            maxWidth: 1400,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            {images.length !== 0 && (
              <MainImage src={images[currentImageIndex]} alt="imagen" />
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaAngleLeft
              style={{ cursor: "pointer", color: "black" }}
              size={40}
              onClick={() =>
                setCurrentImageIndex(
                  currentImageIndex === 0
                    ? images.length - 1
                    : currentImageIndex - 1
                )
              }
            />

            <Carusel>
              <ImgContainer style={{ cursor: "pointer" , justifyContent: 'center', alignItems: 'center'}}>
              <label htmlFor='image'>
            <MdAddCircleOutline style={{cursor: 'pointer', color: colors.secondary.dark, scale: "4"}}/>
            <input 
                id="image" 
                type="file" 
                accept='image/*'
                multiple
                style={{ display: 'none', }}
                onChange={handleFileSelect}/>   
                </label>
              </ImgContainer>
              {images.map((image, index) => (
                <ImgContainer>
                  <IconContainer onClick={(e)=>deleteImage(e, index)}>
                    <RiCloseLine style={{cursor: 'pointer', color: 'black', zIndex:2}}/>
                  </IconContainer>
                  <Demo 
                    key={index}
                    src={image}
                    alt="imagen"
                    onClick={() => setCurrentImageIndex(index)}
                  />
                </ImgContainer>
              ))}
            </Carusel>

            <FaAngleRight
              style={{ cursor: "pointer", color: "black" }}
              size={40}
              onClick={() =>
                setCurrentImageIndex(
                  currentImageIndex === images.length - 1
                    ? 0
                    : currentImageIndex + 1
                )
              }
            />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Galery;
