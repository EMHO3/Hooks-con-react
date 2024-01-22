import { useForm } from "../hooks/useForm"
import { useReducer } from "react"

const initialState=[{
    id:new Date().getDate(),
    tarea:'Explicar Reducers',
    finalizada:false
}]

const editarTarea={
    tarea:'[TAREA] Editar tarea',
    payload:nuevaTarea
}
const eliminarTarea={
    tarea:'[TAREA] Edliminar tarea',
}
const borrarTarea={
    tarea:'[TAREA] Borrar tarea',
}


const tareaReducer=(state=initialState,action={})=>{
    switch (action.type) {
        case '[TAREAS] Agregar tarea':
            return[...state,action.payload]
        case '[TAREAS] Editar tarea':
            console.log("editar")
        case '[TAREAS] Eliminar tarea':
            console.log("eliminar")
        case '[TAREAS] Borrar tarea':
            console.log("borrar todo")
            return[]            
        default:
            return state

    }
}



export const ListaTareas = () => {
    const [tareasState, dispatch] = useReducer(tareaReducer, initialState)
    const{tarea,formState,onInputChange}= useForm({tarea:''})
    const agregarTarea=(event)=>{
        event.preventDefault()
        if(formState.value=='')return
        console.log(formState)
        const tarea={
            id:new Date().getTime(),
            tarea:formState.tarea,
            finalizada:false
        }
        const action={
            type:'[TAREAS] Agregar tarea',
            payload:tarea
        }
        dispatch(action)
    }
  return (
    <>
       <form onSubmit={agregarTarea}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              name="tarea"  
              placeholder="Ingrese tarea"
              onChange={onInputChange}
              value={tarea}
            />
          </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <hr/>
        <ul>
        {tareasState.map(item=>{
            return(
                <li key={item.id}>
                    {item.tarea}
                    {item.finalizada ?"✅":"❌"}</li>
            )
        })}
        </ul>

    </>
  )
}
