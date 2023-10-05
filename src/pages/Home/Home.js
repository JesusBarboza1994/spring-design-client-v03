import style from "@emotion/styled";
import Home_component from "../../components/Home_component";
import "@fontsource/inter";
import "@fontsource/work-sans";
import { Header } from "../../components/header-component";
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
     
            <Home_component backgroundImage= "url(/Images/diseño.jpg)" text="Diseño"/> 
            <Home_component backgroundImage= "url(/Images/comparativo.jpg)" text="Comparativo"/>
            <Home_component backgroundImage= "url(/Images/consultar_stock.jpg)" text="Consultar stock"/>
            <Home_component backgroundImage= "url(/Images/cotizacion.jpg)" text="Cotizacion"/>
            <Home_component backgroundImage= "url(/Images/diseño_rapido.jpg)" text="Diseño rapido"/>
            <Component_prueba backgroundImage= "url(/Images/diseño.jpg)" text="Prueba"/>
          </div>
          
        </div> 
    );
}