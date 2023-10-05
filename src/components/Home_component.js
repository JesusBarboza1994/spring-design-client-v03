import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";


function Home_component (props){
 const { backgroundImage, text } = props;

 const ContainerStyle = styled.div`
    width: 250px; 
    height: 230px;
    background-image: url(${props.backgroundImage});
    background-size: cover; 
    border-radius: 25px;
    position: relative;
    box-shadow: 3px 3px 2px 0px rgba(128, 128, 128, 0.30);
  `     

 const [isHovered, setIsHovered] = useState(false);
    
 const handleMouseEnter = () => {
   setIsHovered(true);
 };

 const handleMouseLeave = () => {
   setIsHovered(false);
 };

   const ButtonStyle = styled.button`
    width: 250px;
    height: 80px;
    border-radius: 25px;
    position: absolute;
    bottom: 0px;
    background: ${colors.rosado};
    font-weight: isHovered ? "bold" : "normal";
    color: ${colors.white};
    letter-spacing: 1px;
    text,
    text-align: center;
    font-size: ${typography.text.xl};
    cursor: pointer;
  `
 
 

 return (
    <ContainerStyle>
        <ButtonStyle onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{text}</ButtonStyle>
    </ContainerStyle>
 );
}
export default Home_component;