import React, { useState } from 'react'
import styled from 'styled-components'
import { menuItems } from '../../config'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { MainLayout } from '../../styles'
import { getToken } from '../../utils/localStorageManipulation'

const MenuStyled = styled.div`
    display: flex;

    .navigation {
        display: flex;
        flex-direction: column;
        background-color: var(--color-gray);
        height: 100vh;
        width: 15rem;
        color: white;
    }
    
    .user-info {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin: 3rem auto 5rem;
        gap: 20px;
    }

    .user-info img {
        width: 40%;
        border-radius: 50%;
        object-fit: contain;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        gap: 10px;
    }

    .menu-item {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 1rem;
        border-radius: 5px;
        cursor: pointer;
    }

    ul a {
        width: 75%;
        text-decoration: none;
        color: white;
    }

    .menu-item.active {
        color: var(--color-green);
        background-color: var(--color-dark-gray);
    }

 `
export const Menu = () => {
    const [activeItemIndex, setActiveItemIndex] = useState('1');
    const navigate = useNavigate()
    const token = getToken();

    if (!token || token==='EXPIRED') {
        navigate('/auth?mode=login')
    }
  return (
    <MenuStyled>
        <div className='navigation'>
            <div className='user-info'>
                <img src="https://img.freepik.com/premium-vector/influencer-icon-vector-image-can-be-used-digital-nomad_120816-263441.jpg?semt=ais_hybrid" alt="Avatar" />
                <p>Name</p>
                </div>
                <ul>
                {menuItems.map(item=><Link key={item.id} to={`/${item.title.toLowerCase()}`}><div onClick={()=>setActiveItemIndex(item.id)} className={`menu-item ${activeItemIndex === item.id ? 'active' : ''}`}>{item.icon}<li >{item.title}</li></div></Link>)}
                </ul>
        </div>
        <MainLayout>
            <Outlet></Outlet>
        </MainLayout>
    </MenuStyled>
  )
}
