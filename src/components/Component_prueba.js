import { useState } from "react";
import style from "@emotion/styled";


function Component_prueba (props){
 const { backgroundImage, text } = props;

 /*const [isHovered, setIsHovered] = useState(false);
     
 const handleMouseEnter = () => {
   setIsHovered(true);
 };
 const handleMouseLeave = () => {
   setIsHovered(false);
 }; */

 
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
      setIsClicked(true);

        // Simulación de efecto de clic con un retraso
      setTimeout(() => {
        setIsClicked(false);
      }, 300);
    };

   const buttonStyle = {
    width: 250,
    height: 230,
    borderRadius: 25,
    backgroundImage,
    backgroundSize: "cover", 
    borderRadius: 25,
    //border: "none",
    boxShadow: isClicked ? "2px 3px 0px 0px rgba(128, 128, 128, 0.75)": "2px 4px 0px 0px rgba(255, 255, 255, 0.30)",
    transform: isClicked ? "translateY(3px)": "none",
    //fontWeight: isHovered ? "bold" : "normal",
    //color:  isHovered ? "#BA181B" : "white",
    color: "white",
    letterSpacing: 1,
    text,
    fontSize: 20,
    cursor: "pointer",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
 }
 
 

 return (
    <div >
        <button style={buttonStyle} onClick={handleClick}>{text}</button>
    </div>
 );
}

export default Component_prueba;