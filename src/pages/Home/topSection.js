import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../../components/BrandLogo';
import { Button } from '../../components/button';
import { Marginer } from '../../components/marginer';

import TopSectionBackgroundImage from '../../images/topBackground2.jpg';

const TopSectionContainer = styled.div`
    width: 100%;
    height: 800px;
    background: url(${TopSectionBackgroundImage});
    background-position: 500px -300px;
    background-size: cover; //Fist the image accordingly to fitting space
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(38, 70, 83, 0.4);
    display: flex;
    flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 20%;
    align-items: center;
    justify-content: flex-start;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

const SloganText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: #FFF;
    font-weight: 500;
    font-size: 45px;
`;

export function TopSection(props) {

    const { children } = props;

    return (
    <TopSectionContainer>
        <BackgroundFilter>
            {children}
            <TopSectionInnerContainer>
                <LogoContainer>
                    <BrandLogo logoSize={65} textSize={55}/>
                    <Marginer direction='vertical' margin={8} />
                    <SloganText>Find the Right specialist</SloganText>
                    <SloganText>For the right job</SloganText>
                    <Marginer direction='vertical' margin={15}/>
                    <Button>Join Now</Button>
                </LogoContainer>
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopSectionContainer>
    )
}
