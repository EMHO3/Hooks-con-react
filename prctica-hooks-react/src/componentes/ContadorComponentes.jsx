import { useCounter } from "../hooks/useCounter"

export const ContadorComponentes = () => {

  const{contador,incrementar,decrementar,resetear}= useCounter(0)

  return (
     <>
       <h1>Contador: {contador}</h1>
       <button className="btn btn-primary" onClick={()=> incrementar()}>+1 </button>
       <button className="btn btn-danger" onClick={()=> resetear()}>Reset </button>
       <button className="btn btn-primary" onClick={()=> decrementar(3,false)}>-1 </button>
     </>
   )
}
