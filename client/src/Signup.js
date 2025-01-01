import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"


const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit= (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/signup', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=> console.log(err))
    }
  
    return (
    <div class="main">
            <h1>E-commerces</h1>
            <h3>Enter your Signup details</h3>
            <form onSubmit ={handleSubmit}>
                  <label for="first">Username:</label>
                  <input type="text" 
                        name="name" 
                        placeholder="Enter your Username" required
                        onChange={(e) => setName(e.target.value)}/>
                  <label for="first">Email:</label>
                  <input type="email" 
                        name="email" 
                        placeholder="Enter your email" required
                        onChange={(e) => setEmail(e.target.value)}/>
                  <label for="password">Password:</label>
                  <input type="password"
                        name="password"
                        placeholder="Enter your Password" required
                        onChange={(e) => setPassword(e.target.value)}/>
                  <div class="wrap">
                  <button type="submit"> Submit </button> </div>
            </form>
            <p>registered? <Link to="/login" style={{ textDecoration: 'none',color: 'blue' }}> Already an account please Login</Link> </p>
      </div>
  )
}

export default Signup

