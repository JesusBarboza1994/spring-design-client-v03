import { useState } from "react";
import {ElementStyle, DivStyle} from "./styles";
import { useNavigate } from "react-router-dom";


function HomeComponent ({backgroundImage,text}){
 
 const navigate = useNavigate();
 const navigateToNewPage = () => {
    navigate (`/design`);
 } 

 return (
    <ElementStyle style={{ backgroundImage: `url(${backgroundImage})`}} onClick={navigateToNewPage}>
        <DivStyle>{text}</DivStyle>
    </ElementStyle>
 );
}
export default HomeComponent;