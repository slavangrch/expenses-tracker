import React, { ReactNode } from 'react'
import styled from 'styled-components'
// import { NewExpenseForm } from '../NewExpenseForm/NewExpenseForm'


const ModalStyled = styled.div`

    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: var(--color-black);
        opacity: 0.4;
    }
    
    dialog {
        width: 40%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        padding: 1.3rem;
        padding-bottom: 0;
        border: 0;
        border-radius: 5px;
        box-shadow: 10px 5px 50px var(--color-gray);
        background-color: var(--color-light-gray);
    }
`

interface ModalProps {
    children: ReactNode
}
export const Modal: React.FC<ModalProps> = ({children}) => {
  return (
    <ModalStyled>
        <div className="backdrop">Backdrop</div>
        <dialog open>{children}</dialog>
    </ModalStyled>
    
  )
}
