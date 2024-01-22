import { useMemo, useState } from "react"

export const CalculosPesados = () => {
    const[listaNumeor,setListaNumeor]=useState([1,2,3,4,5,6,7,8,9])
    const[show,setShow]=useState(true)

    const getCalculo=(listaNumeor)=>useMemo(()=>{
        console.log('calculando')
        return listaNumeor.reduce((a,b)=>a*b)
    },[listaNumeor])

    const agregarNumero=()=>{
        setListaNumeor([...listaNumeor ,listaNumeor[listaNumeor.length-1]+1])
    }
  return (
    <>
    <h2>Calculo:</h2>
    <p>{getCalculo(listaNumeor)}</p>
    <button className="btn btn-primary" onClick={()=>setShow(!show)}>{show?'Show':'Hide'}</button>
    <button className="btn btn-primary" onClick={()=>agregarNumero()}>Agreagar Número</button>
    </>
  )
}
