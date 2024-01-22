import{Incrementar} from "./Incrementar"
import { useCallback, useState } from "react"
export const CallbackComponent = () => {
    const [counter, setCounter] = useState(0)
    const incrementarPadre=useCallback((val)=>{
        setCounter(contador=>contador+val)
    },[]
    )
  return (
    <>
      <h1>contador:{counter}</h1>
      <Incrementar incrementar={incrementarPadre}></Incrementar>
    </>
  )
}
