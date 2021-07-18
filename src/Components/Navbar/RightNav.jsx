import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const UL = styled.ul`

    list-style: none;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin-right: 3vw;

    a{
        text-decoration: none;
        color: black;
    }

    li{
        padding: 18px 10px;
        font-size: 1.5rem;
        text-decoration: none;
    }


@media (max-width: 900px){
    flex-flow: column nowrap;
    background-color: #F7F2EE;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top:0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    z-index: 1;
    list-style: none;

    li{
        color: #873B36;
        font-size: 3rem;
        margin-top: 5vh;
        text-align: center;
        border-bottom: solid #D09A49 2px;
        text-decoration: none;
    }
    h1{
        text-align: center;
    }
}
`;

function RightNav({ open }) {
    return (
        <UL open={open}>
            <Link to='/Projects' ><li>Projects</li></Link >
            <Link to='/AboutMe' ><li>About Me</li ></Link >
            <Link to='/Contact' ><li>Contact</li ></Link >
        </UL >
    );
}

export default RightNav;