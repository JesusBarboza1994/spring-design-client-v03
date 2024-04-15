import { useEffect, useState } from "react";
//import { useAuth } from "../../../context/auth-context";
import OriginalSample from "../OriginalSample/OriginalSample";
import Seguimiento from "../Seguimiento/Seguimiento";
import Medidas from "../Medidas/Medidas";

export default function TotalDesign() {

    const[page, setPage] = useState("medidas");

    return(
        <div>

         {page === "medidas" && <Medidas/>}
         {page === "seguimiento" && <Seguimiento/>}
         {/* {page === "modif_OT" && <ModifiedOrder/>} */}
         {page === "resorteOrig" && <OriginalSample/>}
         {/* {page === "resorteModif" && <ModifiedDesign/>} */}

        </div>
    )
}