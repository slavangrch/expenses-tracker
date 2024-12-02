import styled from 'styled-components';

export const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-dark-gray);
`;

export const Form = styled.form`
  width: 45%;
  background-color: var(--color-light-gray);
  box-shadow: 10px 5px 50px var(--color-black);
  border-radius: 9px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: white;

  .input-control {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input {
    width: 75%;
    align-self: center;
    padding: 0.8em;
    border: none;
    border-bottom: 2px solid var(--color-dark-gray);
    font-style: inherit;
    outline: none;
    background-color: inherit;
  }

  input::placeholder {
    color: var(--color-dark-gray);
    font-style: inherit;
  }

  a {
    text-decoration: none;
    color: var(--color-black);
  }
`;
