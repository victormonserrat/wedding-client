import styled from "styled-components";

export const Logo = styled.div.attrs(({ scrolled, open }) => ({
    scrolled,
    open,
}))`
    margin-right: 5mm;
    background-image: url(/assets/img/logo.svg);
    background-size: cover;
    
    @media only screen and (max-width: 1024px) {
        width: ${({ open }) => open ? 10 : 8}mm;
        height: ${({ open }) => open ? 10 : 8}mm;
        ${({ scrolled, open }) => (scrolled || open) && 'filter: invert(100%);'}
    }
    
    @media only screen and (min-width: 1025px) {
        width: ${({ scrolled }) => scrolled ? 8 : 10}mm;
        height: ${({ scrolled }) => scrolled ? 8 : 10}mm;
        ${({ scrolled }) => scrolled && 'filter: invert(100%);'}
    }
    
    transition: all 0.25s;
`;
