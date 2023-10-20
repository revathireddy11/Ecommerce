import { useState } from 'react';
import '../App.css';
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

function Login() {
    const navigate = useNavigate();

    const [userName , setUserName ] = useState('')
    const [password , setPassword ] = useState('')

    function handleLogin() {
        console.log(userName, password)

        const data = { email : userName , password : password }
        axios.post('https://reqres.in/api/login', data)
        .then((res) => {
            console.log(res.data.token, 17)
            if(res.data.token) {
                localStorage.setItem('token', res.data.token)
                navigate('/header')
            }
        })
        .catch((err) => {
            console.log(err, 30)
        })
    }

    return (
        <div class="form">
            <h1 class="form1">LOGIN</h1>
            USERNAME : 
            <input type='text' value={userName} placeholder='username' onChange={(e) => {
                setUserName(e.target.value)
            }}/>
            <br /> <br />
            PASSWORD : 
            <input type='password' value={password} placeholder='password' onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <br /> <br />
            <button onClick={handleLogin} class="login">LOGIN</button>
            <Link to='/home' class="home">Go to Home</Link>
        </div>
    )
}

export default Login;