import React,  { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import './login.css'
import { Link } from 'react-router-dom'


const Login = () => {
      const [name, setName] = useState()
      const [password, setPassword] = useState()
      const navigate = useNavigate()
      const [error, setError] = useState();

      const handleSubmit= (e) => {
            e.preventDefault()
            axios.post('http://localhost:3001/login', {name, password})
            .then(result => {
                  console.log(result)
                  if(result.data === "Success") {
                        navigate('/product')
                  }else{
                        setError(result.data); 
                  }
            })
            .catch(err=> console.log(err))
        }
      return (
            <div class="main">
                  <h1>E-commerces</h1>
                  <h3>Enter your login credentials</h3>
                  <form onSubmit={handleSubmit}>
                        <label for="name">Username:</label>
                        <input type="text" 
                              name="first" 
                              placeholder="Enter your Username" required
                              onChange={(e) => setName(e.target.value)}/>
                        <label for="password">Password:</label>
                        <input type="password"
                              name="password"
                              placeholder="Enter your Password" required
                              onChange={(e) => setPassword(e.target.value)}/>
                        <div class="wrap">
                              <button type="submit" onclick="solve()">Login</button>     
                        </div>
                        {error && <strong>{error}</strong>}
  
                  </form>
                  <p>Not registered?  <Link to="/signup" style={{ textDecoration: 'none', color: 'blue' }}>Create an account</Link></p>
            </div>
      )
}

export default Login

