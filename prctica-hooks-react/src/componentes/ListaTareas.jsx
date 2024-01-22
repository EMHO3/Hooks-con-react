const initialState=[{
    id:1,
    tarea:'Explicar Reducers',
    finalizada:false
}]
const nuevaTarea={
    id:2,
    tarea:'Explicar useReducer',
    finalizada:false
}
const agregarTarea={
    type:"[Tareas] Agregar tarea",
    payload:nuevaTarea
}

const tareaReducer=(state=initialState,action={})=>{
    if(action.type==="[Tareas] Agregar tarea"){
        return[...state,action.payload]
    }
    return state
}
console.log(tareaReducer(initialState,agregarTarea))









export const ListaTareas = () => {
  return (
    <>
    </>
  )
}
