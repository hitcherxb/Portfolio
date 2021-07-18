import React from 'react';
import styled from 'styled-components';
import RightNav from './RightNav.jsx'
import Burger from './Burger'
import { Link } from 'react-router-dom';

const Nav = styled.nav`
justify-content: space-between;
    a{
        text-decoration: none;
    }
    h1{
        font-size:3rem;
        margin-left: 2vw;
        color:black;
    }
    @media (max-width: 900px){
        
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