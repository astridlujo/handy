import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../BrandLogo';
import { Button } from '../button';
import { Marginer } from '../marginer';

const NavbarContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
`;

const FlexContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const NavBarLink = styled.a`
    font-size: 18px;
    font-weight: 500;
    color: #FFF;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    transition: all 200ms ease-in-out;

    &:hover {
        text-decoration: underline;
    }
`;

const Separator = styled.div`
    min-height: 45%;
    width: 1px;
    background-color: #FFF;
`;

export function NavBar(props) {
    return (
        <NavbarContainer>
            <BrandLogo />
            <FlexContainer>
                <NavBarLink>
                    Specialist Portal
                </NavBarLink>
                <Marginer direction='horizontal' margin={15} />
                <NavBarLink>
                    User Login
                </NavBarLink>
                <Marginer direction='horizontal' margin={15} />
                <Separator />
                <Marginer direction='horizontal' margin={10}/>
                <Button size={15}>Register</Button>
            </FlexContainer>
        </NavbarContainer>
    )
}