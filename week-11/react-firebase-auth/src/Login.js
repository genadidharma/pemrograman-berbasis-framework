import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from './App'
import {
    signInWithEmailAndPassword, getAuth
} from 'firebase/auth';
import { firebaseInit } from '.';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const auth = getAuth(firebaseInit)

    const Auth = useContext(AuthContext)
    const handleForm = e => {
        e.preventDefault()
        console.log(Auth)

        signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            if(res.user) Auth.setLoggedIn(true)
        })
        .catch(e => {
            setError(e.message)
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email" />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    placeholder="password" />
                <hr />
                <button className="googleBtn">
                    <img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                        alt="logo" />
                    Login with Google
                </button>
                <button type="submit">Login</button>
                <span>{error}</span>
            </form>
        </div>
    )
}

export default Login;