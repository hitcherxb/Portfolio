import React from 'react';
import styled from 'styled-components';
import RightNav from './RightNav.jsx'
import Burger from './Burger'
import { Link } from 'react-router-dom';

const Nav = styled.nav`
justify-content: space-between;

height: 10vh;
    a{
        text-decoration: none;
    }
    h1{
        font-size:3rem;
        margin-left: 2vw;
        color:black;
        justify-content: center;
    }
    @media (max-width: 900px){
        justify-content: space-between;
    a{
        text-decoration: none;
    }
    h1{
        font-size:2rem;
        margin-left: 2vw;
        color:black;
        margin-top: 2vh;
    }
    }
`;

function Navbar(props) {
    return (
        <Nav>
            <div className='logo'>
                <Link to='/'><h1 id='name'>Cody Thigpen</h1></Link>
            </div>
            <Burger />
        </Nav>
    );
}

export default Navbar;