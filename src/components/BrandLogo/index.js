import React from 'react';
import styled from 'styled-components';

import LogoImage from '../../images/logo.png';

const BrandLogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImageContainer = styled.div`
    display: flex;
    align-items: center;
    width: ${({ size }) => (size ? size + "px" : "2em")};
    height: ${({ size }) => (size ? size + "px" : "2em")};

    img {
        width: 100%;
        height: 100%;
    }
`;

const LogoTitle = styled.h2`
    margin: 0;
    font-size: ${({ size }) => size ? size + 'px' : '25px'};
    color: #FFF;
    font-weight: 900;
    margin-left: 7px;
`;

export function BrandLogo(props) {

    const { logoSize, textSize } = props;

    return (
        <BrandLogoContainer>
            <LogoImageContainer size={logoSize}>
                <img src={LogoImage} alt="Handy Logo"/>
                <LogoTitle size={textSize}>handy</LogoTitle>
            </LogoImageContainer>
        </BrandLogoContainer>
    )
}