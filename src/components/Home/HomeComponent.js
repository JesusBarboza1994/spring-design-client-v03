import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { fonts } from "../../styles/typography";
import {ContainerStyle, ButtonStyle} from "./style";


function HomeComponent ({backgroundImage,text}){
 

 return (
    <ContainerStyle style={{ backgroundImage: `url(${backgroundImage})`}}>
        <ButtonStyle>{text}</ButtonStyle>
    </ContainerStyle>
 );
}
export default HomeComponent;