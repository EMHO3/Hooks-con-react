export const Incrementar =({ incrementar }) => {
    console.log("Me estpoy redibujando")
    return (
       <button onClick={()=>incrementar(10)}>+1</button>
    )
}

