import React, { useState } from 'react'
import { Alert, Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { GoogleButton } from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {logIn,googleSignIn}=useUserAuth()
  const [error, setError] = useState('')
  const navigate = useNavigate();


    const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const passChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit =async (e) => {
     e.preventDefault()
  setError('')
    try {
      await logIn(email, password);
      navigate('/home')
    }
    catch (err) {
      setError(err.message);
    }
  }

  const handleGoogle = async(e) => {
    e.preventDefault()
     try {
      await googleSignIn();
      navigate('/home')
    }
    catch(err) {
      setError(err.message);
    }
  }
  return (
    <>
      <div className='m-5'>
        <h3>Firebase Auth login</h3>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <FormGroup className='mb-3' controlId='email'>
            <FormControl type='email' placeholder='Email'onChange={emailChange} />
          </FormGroup>
          <FormGroup className='mb-3'  controlId='password'>
            <FormControl type='password' placeholder='Password' onChange={passChange} />
          </FormGroup>
          <div>
            <Button variant='primary' type='Submit'>Log In</Button>
          </div>

        </Form>
        <hr />

        <GoogleButton onClick={handleGoogle} className='w-100 g-btn mb-3' type='dark'></GoogleButton>



        <div>
          Don't have an account?
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>

    </>
  )
}

export default Login
