import React, { useState } from 'react'
import styled from 'styled-components'
import { Form } from "../../styles";
import { Button } from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';

export const RegistarationForm: React.FC = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formObj = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(formObj.entries())

    console.log(formData);

    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      const result = await response.json();
      setError(result.message || 'Validation error')
      return;
    }

    const result = await response.json();
    
    navigate('/auth?mode=login')
  }

  return (
    <Form action="" onSubmit={handleSubmit}>
      <h2>Register</h2>
    {error && error}
    <div className="input-control">
      <input type="text" placeholder="Username" name='username'/>
    </div>
    <div className="input-control">
      <input type="text" placeholder="Email" name='email'/>
    </div>
    <div className="input-control">
      <input type="text" placeholder="Password" name='password'/>
    </div>
    <div className="input-control">
      <input type="text" placeholder="Confirm password" name='confirm-password'/>
    </div>
    <Button background="dark-gray" width='80%' title='Register'></Button>
    <p>Already have an account? <Link to={'/auth?mode=login'}>Login</Link> </p>
  </Form>
  )
}

