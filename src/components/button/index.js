import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    color: #FFF;
    padding: 7px 1.5em;
    font-size: ${({ size }) => size ? size + 'px' : '18px'};
    font-weight: 600;
    border-radius: 5px;
    background-color: #2A9D8F;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
        background-color: #3F92AA;
    }
    
    &:focus {
        outline: none;
    }
`;

export function Button(props) {

    const { size } = props;

    return (
        <ButtonWrapper size={size}>
            {props.children}
        </ButtonWrapper>
    )
};