import React from 'react';
import { NavBar } from '../../components/navbar';
import { PageContainer } from '../../components/pageContainer';
import { TopSection } from './topSection';

function HomePage() {
    return (
        <PageContainer>
            <TopSection>
                <NavBar />
            </TopSection>
        </PageContainer>
    );
}

export default HomePage;
