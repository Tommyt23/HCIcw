import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    const [username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    
    function handleLogin(e) {
        e.preventDefault()
//        code to handle Login goes here
        props.toggle()
    }
    return (
        <div className={'popup'}>
            <div className={'popup-inner'}>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input type={'text'} value={username} onchange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type={"password"} value={password} onChange={e => setPassword((e.target.value))} />
                    </label>
                    <button type="submit">Login</button>
                </form>
                <button>Sign up instead?</button>
                <button onClick={props.toggle}>Close</button>
            </div>
        </div>
    )
}

export default Login