import { useEffect, useState } from "react"
import Input from "../../Input"
import { Wrapper } from "./styles"

export function InicialData({ setCounter, counter }) {
    const [inicialData, setInicialData] = useState(localStorage.getItem("InicialData") ? JSON.parse(localStorage.getItem("InicialData")) : {
        correlative: "",
        type: "",
        count: "",
    })

    useEffect(() => {
        let acc = 0
        for (let i in inicialData) {
            if (inicialData[i] !== "") acc += 1
        }
       
    }, [])

    const handleChange = (e) => {
        setInicialData({ ...inicialData, [e.target.id]: e.target.value })
        let acc = 0
        for (let i in inicialData) {
            if (i === e.target.id) {
                if (e.target.value !== "") acc += 1
            } else {
                if (inicialData[i] !== "") acc += 1
            }
        }
        setCounter({ ...counter, InicialData: { quantity: Object.keys(inicialData).length, counter: acc } })
        localStorage.setItem("InicialData", JSON.stringify({ ...inicialData, [e.target.id]: e.target.value }))
        localStorage.setItem("counter", JSON.stringify({ ...counter, InicialData: { quantity: Object.keys(inicialData).length, counter: acc } }))
    }

    return (
        <Wrapper>
            <div>
                <Input title="Correlativo" value={inicialData.correlative} onChange={(e) => handleChange(e)} id="correlative" />
                <Input title="Tipo de Resorte" value={inicialData.type} onChange={(e) => handleChange(e)} id="type" />
                <Input title="Cantidad" value={inicialData.count} onChange={(e) => handleChange(e)} id="count" />
            </div>
        </Wrapper>
    )
}