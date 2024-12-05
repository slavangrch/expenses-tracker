import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button<StyledButtonProps>`
    background-color: ${(props) => `var(--color-${props.$background})` || 'var(--color-dark-gray)'};
    border: none;
    width: ${(props) => props.$width || "auto"};
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
    $width?: string,
    $background?: string
  }
  
interface ButtonProps {
    title: string,
    width?: string,
    background?: string, 
    onClick?: () => void,
    // type?: "button" | "submit" | "reset"
}

export const Button: React.FC<ButtonProps> = ({title, width, background, onClick}) => { 
  // type="button"
  return (
    <ButtonStyled onClick={onClick} $width={width} $background={background}>{title}</ButtonStyled>
  )
}
