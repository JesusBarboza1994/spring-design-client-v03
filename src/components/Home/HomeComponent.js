import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { fonts } from "../../styles/typography";
import {ElementStyle, DivStyle} from "./style";


function HomeComponent ({backgroundImage,text}){
 
 return (
    <ElementStyle style={{ backgroundImage: `url(${backgroundImage})`}}>
        <DivStyle>{text}</DivStyle>
    </ElementStyle>
 );
}
export default HomeComponent;