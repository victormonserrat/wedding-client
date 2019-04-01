import * as React from 'react';
import styled from 'styled-components';

export const Title = ({ scrolled, open }) =>
    <Container>
        <Names scrolled={ scrolled } open={ open }>
            ELENA & JAIME
        </Names>
        <Date scrolled={ scrolled } open={ open }>
            21 de septiembre, 2019
        </Date>
    </Container>
;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
`;

const Names = styled.span.attrs(({ scrolled, open }) => ({
    scrolled,
    open,
}))`
    font: 6mm Dosis;
    position: relative;
    
    @media only screen and (max-width: 1024px) {
        top: ${({ open }) => open ? 0 : 2.5}mm;
    }
    
    @media only screen and (min-width: 1025px) {
        top: ${({ scrolled }) => scrolled ? 2.5 : 0}mm;
    }
    
    transition: all 0.25s;
`;

const Date = styled.span.attrs(({ scrolled, open }) => ({
    scrolled,
    open,
}))`
    font: italic 4mm Playfair Display;
    
    @media only screen and (max-width: 1024px) {
        opacity: ${({ open }) => open ? 1 : 0};
    }
    
    @media only screen and (min-width: 1025px) {
        opacity: ${({ scrolled }) => scrolled ? 0 : 1};
    }
    
    transition: all 0.25s;
`;
