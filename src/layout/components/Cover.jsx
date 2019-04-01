import * as React from 'react';
import styled from 'styled-components';

export const Cover = () =>
    <Background>
        <Button href={ '#principal' } />
    </Background>
;

export const Background = styled.div`
    height: 100vh;
    background-image: url(/assets/img/cover.jpg);
    background-size: cover;
    background-position: left;
    
    display: flex;
    justify-content: center;
    position: relative;
`;

const Button = styled.a`
    position: absolute;
    bottom: 14mm;
    width: 7mm;
    height: 7mm;
    background-image: url(/assets/img/angle-up.svg);
    background-size: cover;
    transform: rotate(180deg);
    cursor: default;
    
    @media only screen and (max-width: 1024px) {
        bottom: 8mm;
        width: 6mm;
        height: 6mm;
    }
`;