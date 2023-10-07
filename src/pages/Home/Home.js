import style from "@emotion/styled";
import HomeComponent from "../../components/Home/HomeComponent";
import "@fontsource/inter";
import "@fontsource/work-sans";
import { Header } from "../../components/Home/HeaderComponent";
import Component_prueba from "../../components/Component_prueba";


export default function Home(){
    return(
        <div style={{background: "#161A1D", width: 1440, height: 1024, display: "flex", justifyContent: "center",
        alignItems: "center" }}>
          <Header/>
          
          <div style={{width: 960,
                       display: "flex",
                       flexWrap: "wrap",
                       columnGap: 90,
                       rowGap: 60, 
                       paddingTop: 150,
                       justifyContent: "center",
                       }}>
     
            <HomeComponent backgroundImage= "url(/Images/diseño.webp)" text="DISEÑO"/> 
            <HomeComponent backgroundImage= "url(/Images/comparativo.webp)" text="COMPARATIVO"/>
            <HomeComponent backgroundImage= "url(/Images/consultarStock.webp)" text="CONSULTAR STOCK"/>
            <HomeComponent backgroundImage= "url(/Images/cotizacion.webp)" text="COTIZACION"/>
            <HomeComponent backgroundImage= "url(/Images/diseñoRapido.webp)" text="DISEÑO RAPIDO"/>
            <Component_prueba backgroundImage= "url(/Images/diseño.webp)" text="Prueba"/>
          </div>
          
        </div> 
    );
}