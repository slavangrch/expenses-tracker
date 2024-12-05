import { LoginForm } from "../components/Auth/LoginForm";
import React from 'react'
import { MainAuthLayout } from "../styles";
import { RegistarationForm } from "../components/Auth/RegistarationForm";
import { useSearchParams } from "react-router-dom";

export const Auth: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  
  return (
    <MainAuthLayout>
      {mode==='register'?<RegistarationForm></RegistarationForm>: <LoginForm></LoginForm>}
    </MainAuthLayout>
    
  )
}