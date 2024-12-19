import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { Form } from "../../styles";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { BASE_URL } from "../../config";
import { setExpirationDate, setToken } from "../../utils/localStorageManipulation";

export const LoginForm: React.FC = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formObj = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(formObj.entries())

    console.log(formData);

    const response = await fetch(`${BASE_URL}/auth/login`, {
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
    setToken(result.token);
    setExpirationDate();
    localStorage.setItem('username', result.user)

    navigate('/dashboard')
  }

  return (
    <Form action="" onSubmit={handleSubmit}>
    <h2>Login</h2>
    {error&&<p>{error}</p>}
    <div className="input-control">
      <input type="text" placeholder="Email" name='email'/>
    </div>
    <div className="input-control">
      <input type="text" placeholder="Password" name='password'/>
    </div>
    {/* <button>Login</button> */}
    <Button background="dark-gray" width='80%' title='Login'></Button>
    <p>Not registered yet? <Link to={'/auth?mode=register'}>Register</Link> </p>
  </Form>
  )
}
