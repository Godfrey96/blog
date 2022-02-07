import './register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault();
        setError(false)
        try {
            const res = await axios.post('/api/users', {
                username,
                email,
                password
            });
            res.data && window.location.replace('/login')
        } catch (err) {
            setError(true)
        }
    };

    return (
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <form className='registerForm' onSubmit={submitHandler}>
                <label>Username</label>
                <input
                    className='registerInput'
                    type='text'
                    placeholder='Enter your username...'
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    className='registerInput'
                    type='email'
                    placeholder='Enter your email...'
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    className='registerInput'
                    type='password'
                    placeholder='Enter your password...'
                    onChange={e => setPassword(e.target.value)}
                />
                <button className='registerButton'>
                    Register
                </button>
                <button className='registerLoginButton' type='submit'>
                    <Link className='link' to='/login'>
                        Login
                    </Link>
                </button>
                {error && <span style={{ color: 'red', marginTop: '10px' }}>Something went wrong</span>}
            </form>
        </div>
    )
}

export default Register
