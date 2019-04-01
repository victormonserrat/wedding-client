import * as React from 'react';
import styled from 'styled-components';

export const MenuIcon = ({ clicked, scrolled, onClick }) =>
    <Icon onClick={ onClick }>
        <TopLine clicked={ clicked } scrolled={ scrolled } />
        <MiddleLine clicked={ clicked } scrolled={ scrolled } />
        <BottomLine clicked={ clicked } scrolled={ scrolled } />
    </Icon>
;

const Icon = styled.div`
    width: 8mm;
    height: 30px;
    
    @media only screen and (min-width: 1025px) {
        display: none;
    }
`;

const TopLine = styled.div.attrs(({ clicked, scrolled }) => ({
    clicked,
    scrolled,
}))`
    position: absolute;
    margin-top: ${({ clicked }) => clicked ? 14 : 6}px;
    width: 8mm;
    height: 2px;
    background-color: ${({ clicked, scrolled }) => clicked || scrolled ? '#212121' : '#fafafa'};
    ${({ clicked }) => clicked && 'transform: rotate(-45deg);'}
    
    transition: all 0.25s;
`;

const MiddleLine = styled.div.attrs(({ clicked, scrolled }) => ({
    clicked,
    scrolled,
}))`
    position: absolute;
    margin-top: 14px;
    width: 8mm;
    height: 2px;
    background-color: ${({ scrolled }) => scrolled ? '#212121' : '#fafafa'};
    ${({ clicked }) => clicked && 'display: none;'}
    
    transition: all 0.25s;
`;

const BottomLine = styled.div.attrs(({ clicked, scrolled }) => ({
    clicked,
    scrolled,
}))`
    position: absolute;
    margin-top: ${({ clicked }) => clicked ? 14 : 22}px;
    width: 8mm;
    height: 2px;
    background-color: ${({ clicked, scrolled }) => clicked || scrolled ? '#212121' : '#fafafa'};
    ${({ clicked }) => clicked && 'transform: rotate(45deg);'}

    transition: all 0.25s;
`;
