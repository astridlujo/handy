import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    color: #FFF;
    padding: 7px 1.5em;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    background-color: #2A9D8F;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
        background-color: #2A9DAF;
    }
    
    &:focus {
        outline: none;
    }
`;

export function Button(props) {
    return (
        <ButtonWrapper>
            {props.children}
        </ButtonWrapper>
    )
};