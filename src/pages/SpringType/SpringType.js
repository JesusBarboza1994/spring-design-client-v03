import HomeComponent from "../../components/Home/HomeComponent";
import { ScreenStyle} from "../../components/Home/style";
import { ElementContainer} from "../../components/SpringType/style";
import { HeaderElement } from "../../components/SpringType/HeaderElement";


export default function SpringType(){
 
  return(
    <ScreenStyle>
      <HeaderElement/>
      
      <ElementContainer>
        <HomeComponent backgroundImage= "/Images/suspension.jpg" text="SUSPENSION"/> 
        <HomeComponent backgroundImage= "/Images/compresion.jpg" text="COMPRESION"/>
        <HomeComponent backgroundImage= "/Images/traccion.jpg" text="TRACCION"/>
        <HomeComponent backgroundImage= "/Images/torsion.jpg" text="TORSION"/>
      </ElementContainer>
      
    </ScreenStyle> 
  );
}