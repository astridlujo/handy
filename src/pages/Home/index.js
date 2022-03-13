import React from 'react';
import { NavBar } from '../../components/navbar';
import styled from 'styled-components';
import { deviceSize } from "../../components/responsive";
import { PageContainer, InnerPageContainer } from '../../components/pageContainer';
import { TopSection } from './topSection';
import { ServiceCard } from '../../components/ServiceCard';

const TitleText = styled.h1`
    font-weight: 900;
    color: black;
`;

const HomeContentContainer = styled.div`
    width: 100%;
    max-width: ${deviceSize.laptop}px;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
`;

const service = { 
    "id": 1, "title": "House cleaning service",
    "thumbnailUrl": "http://localhost:9000/house_cleaning.jpeg", "rate": 50,
    "rating": 4, "specialist": { "id": 1, "fullName": "Sheldon Cooper" }
}

function HomePage() {
    return (
        <PageContainer>
            <TopSection>
                <NavBar />
            </TopSection>

            <InnerPageContainer>
                <HomeContentContainer>
                    <TitleText>Some of our Top Rated Services</TitleText>
                    <ServiceCard {...service}/>
                </HomeContentContainer>
            </InnerPageContainer>
        </PageContainer>
    );
}

export default HomePage;
