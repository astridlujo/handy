import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../BrandLogo';

const NavbarContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 15px;
`;

const AccessibilityContainer = styled.div`
    display: flex;
`;

export function NavBar(props) {
    return (
        <NavbarContainer>
            <BrandLogo />
        </NavbarContainer>
    )
}