import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


const Login = () => {
    const userContext = useContext(AuthContext)
    const navigate = useNavigate()
    const [username, setUsername] = useInput("")
    const [password, setPassword] = useInput("")
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/login',{username, password})
        .then((res)=>{
            userContext.toggleAuth(res.data)
            console.log(res.data.username)
            navigate('/')
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre de usuario<input onChange={setUsername} type="text" placeholder="Tu nombre de usuario" autoFocus></input> </label>
            <label>Tu contraseña<input onChange={setPassword} type="text" placeholder="Tu contraseña"></input></label>
            <input type="submit"/>
        </form>
    )
}
export default Login;