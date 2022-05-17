import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from './App'
import {
    createUserWithEmailAndPassword, getAuth
} from 'firebase/auth';
import { firebaseInit } from '.';

const Join = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const auth = getAuth(firebaseInit)

    const Auth = useContext(AuthContext)
    const handleForm = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                if (res.user) Auth.setLoggedIn(true)
            })
            .catch(e => {
                setError(e.message)
            })
    }

    return (
        <div>
            <h1>Join</h1>
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
                    Join with Google
                </button>
                <button type="submit">Join</button>
                <span>{error}</span>
            </form>
        </div>
    )
}

export default Join;