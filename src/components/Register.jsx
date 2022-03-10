import axios from "axios";
import React from "react";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useInput("")
    const [email, setEmail] = useInput("")
    const [password, setPassword] = useInput("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/register', {username, email, password})
        .then((user)=>{
            console.log(user.data.username)
            navigate('/')
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre de usuario<input onChange={setUsername} type="text" placeholder="Tu nombre de usuario" autoFocus></input> </label>
            <label>Email<input onChange={setEmail} type="text" placeholder="Tu email"></input> </label>
            <label>Contraseña<input onChange={setPassword} type="text" placeholder="Tu contraseña"></input></label>
            <input type="submit"/>
        </form>
    )
}
export default Register