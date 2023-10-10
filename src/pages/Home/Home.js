
import HomeComponent from "../../components/Home/HomeComponent";
import "@fontsource/inter";
import "@fontsource/work-sans";
import { Header } from "../../components/Home/HeaderComponent";
import { ScreenStyle, ElementContainer } from "../../components/Home/style";
import { LoginComponent } from "../../components/Home/LoginComponent";


export default function Home(){
 
  return(
    <ScreenStyle>
      <Header/>
      
      <ElementContainer>
        <HomeComponent backgroundImage= "/Images/diseño.png" text="DISEÑO"/> 
        <HomeComponent backgroundImage= "/Images/comparativo.png" text="COMPARATIVO"/>
        <HomeComponent backgroundImage= "/Images/consultarStock.png" text="CONSULTAR STOCK"/>
        <HomeComponent backgroundImage= "/Images/cotizacion.png" text="COTIZACION"/>
        <HomeComponent backgroundImage= "/Images/diseñoRapido.png" text="DISEÑO RAPIDO"/>
      </ElementContainer>
      <LoginComponent/>
    </ScreenStyle> 
  );
}