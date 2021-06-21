import React from 'react';
import styled from 'styled-components';
import RightNav from './RightNav.jsx'
import Burger from './Burger'

const Nav = styled.nav`
justify-content: space-between;
    h1{
        font-size:3rem;
        margin-left: 2vw;
    }
    @media (max-width: 900px){
        
    }
`;

function Navbar(props) {
    return (
        <Nav>
            <div className='logo'>
                <h1>Cody Thigpen</h1>
            </div>
            <Burger />
        </Nav>
    );
}

export default Navbar;