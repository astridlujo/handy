import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Marginer } from '../marginer';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 300px;
    min-height: 250px;
    /* height: 500px; */
    background-color: #FFF;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.17);
    margin-bottom: 1.3em ;
`;

const DivContainer = styled.div`
    width: 100%;
`;

const ServiceImage = styled.div`
    width: 100%;
    height: 25em;

    img {
        width: 100%;
        height: 100%;
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    padding: 15px;
`;

const InfoContainer = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(15, 15, 15, 0.20);
    padding: 0 10px;
`;

const Title = styled.h2`
    margin: 0;
    font-size: 25px;
    font-weight: 500;
    color: black;
`;

const SpecialistName = styled.h4`
    margin: 0;
    color: #3A3B3C;
    font-size: 18px;
    font-weight: 400;

`;

const RatingContainer = styled.div`
    display: flex;
    color: #FFE900;

`;

const PriceContainer = styled.div`
    display: flex;
`;

const StartingAtText = styled.h6`
    margin: 0;
    color: #B1B1B1;
    font-weight: 400;
`;

const PriceText = styled.div`
    margin: 5px;
    color: #3A3B3C;
    font-weight: 500;
`;

export const ServiceCard = (props) => {

    const { thumbnailUrl, specialist, id, title, rate, rating } = props

    return (
        <CardContainer>
            <DivContainer>
                <ServiceImage>
                    <img src={thumbnailUrl} alt="Service" />
                </ServiceImage>
            </DivContainer>

            <ContentContainer>
                <Title>{title}</Title>
                <Marginer direction="vertical" margin={10}/>
                <SpecialistName>{specialist.fullName}</SpecialistName>
                
                <InfoContainer>
                    <RatingContainer>
                        <FontAwesomeIcon icon={faStar} size="sm" />
                        {rating}
                    </RatingContainer>

                    <PriceContainer>
                        <StartingAtText>STARTING AT: </StartingAtText>
                        <PriceText>${rate}/hr</PriceText>
                    </PriceContainer>
                </InfoContainer>
            </ContentContainer>
        </CardContainer>
    );
};
