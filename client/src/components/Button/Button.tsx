import React from 'react'
import styled from 'styled-components'

const ButtonS = styled.button<StyledButtonProps>`
    background-color: var(--color-dark-gray);
    border: none;
    width: ${(props) => props.width || "auto"};
    border-radius: 5px;
    padding: 0.8rem 2rem;
    color: white;
    font-family: inherit;
    margin-bottom: 10px;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;
interface StyledButtonProps {
    width?: string;
  }
  
interface ButtonProps {
    title: string,
    width?: string
}

export const Button: React.FC<ButtonProps> = ({title, width}) => {
  return (
    <ButtonS width={width}>{title}</ButtonS>
  )
}
