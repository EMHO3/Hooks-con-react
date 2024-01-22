import { useEffect, useRef } from "react"
import { useForm } from "../hooks/useForm"

export const FormularioComponente = () => {
    const focusRef=useRef()
    console.log(focusRef)
    const inicialForm={
        userName:' ',
        email:'',
        password:''
    }
    const{formState,userName,email,password,onInputChange} =useForm(inicialForm)
    const onSubmit =(event)=>{
        event.preventDefault()
        console.log(formState)
    }
    useEffect(() => {
      focusRef.current.focus()
    }, [])
    
  return (
 <form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="userName">Nombre de usuario</label>
    <input 
      type="text" 
      className="form-control"
      name="userName" 
      placeholder="Ingresa tu nombre de usuario"
      value={userName}
      onChange={onInputChange}
      ></input>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input 
      ref={focusRef}
      type="email" 
      className="form-control"
      name="email" 
      placeholder="Enter email"
      value={email}
      onChange={onInputChange}
    ></input>
  </div>
  <div className="form-group">
    <label htmlFor="Password">Password</label>
    <input 
      type="password" 
      className="form-control"
      name="password" 
      placeholder="Password"
      value={password}
      onChange={onInputChange}
    ></input>
  </div>
  <button 
     type="submit" 
     className="btn btn-primary">Submit 
  </button>
 </form>

  )
}
