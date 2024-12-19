import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BASE_URL, menuItems } from '../../config'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { MainLayout } from '../../styles'
import { clearLocalStorage, getToken } from '../../utils/localStorageManipulation'
import { Button } from '../Button/Button'

const MenuStyled = styled.div`
    display: flex;

    .navigation {
        display: flex;
        flex-direction: column;
        background-color: var(--color-gray);
        height: 100vh;
        width: 15rem;
        color: white;
        justify-content: space-between;
        padding: 2rem 0;
    }
    
    .user-info {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin: 2rem auto 0;
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

    .logout-btn {
        text-align: center;
        margin-bottom: -10px;
    }
    

 `
export const Menu = () => {
    const location = useLocation()
    const [activeItemIndex, setActiveItemIndex] = useState('');
    const navigate = useNavigate()
    const token = getToken();
    const username = localStorage.getItem('username')

    function logoutHandler() {
        // const response = await fetch(`${BASE_URL}/logout`)
        // if (!response.ok) {
        //     return;
        // }
        clearLocalStorage()
        navigate('/auth?mode=login')
    }


    useEffect(() => {
        menuItems.map(item=>{
            if (`/${item.title.toLowerCase()}` === location.pathname) {
                setActiveItemIndex(item.id)
            }
        })
    }, [location])

    useEffect(()=> {
        if (!token || token==='EXPIRED') {
            navigate('/auth?mode=login')
        }
    }, [token])

  return (
    <MenuStyled>
        <div className='navigation'>
            <div className='user-info'>
                <img src="https://img.freepik.com/premium-vector/influencer-icon-vector-image-can-be-used-digital-nomad_120816-263441.jpg?semt=ais_hybrid" alt="Avatar" />
                <p>{username? username.charAt(0).toUpperCase()+username.slice(1): 'No name'}</p>
            </div>
            <ul>
            {menuItems.map(item=><Link key={item.id} to={`/${item.title.toLowerCase()}`}><div onClick={()=>setActiveItemIndex(item.id)} className={`menu-item ${activeItemIndex === item.id ? 'active' : ''}`}>{item.icon}<li >{item.title}</li></div></Link>)}
            </ul>
            <div className='logout-btn'><Button onClick={logoutHandler} width='150px' background='dark-green' title='Logout'></Button></div>
        </div>
        <MainLayout>
            <Outlet></Outlet>
        </MainLayout>
    </MenuStyled>
  )
}
