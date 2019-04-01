import * as React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { Logo } from './Logo';
import { Title } from './Title';
import { MenuIcon } from './MenuIcon';

export const Navbar = ({ scrolled, open, onToggleOpen }) =>
    <Container scrolled={ scrolled } open={ open }>
        <Logo scrolled={ scrolled } open={ open } />
        <Title scrolled={ scrolled } open={ open } />
        <Links scrolled={ scrolled }>
            <Link
                to={ '/' }
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                Inicio
            </Link>
            <Link
                to={ '/invitacion' }
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                Invitación
            </Link>
            <Link
                to={ '/#informacion' }
            >
                ¿Dónde y cuándo?
            </Link>
            <Link
                to={ '/#confirmacion' }
            >
                Confirma tu asistencia
            </Link>
            <Link
                to={ '/menu' }
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                Menú
            </Link>
        </Links>
        <MenuIcon clicked={ open } scrolled={ scrolled } onClick={ onToggleOpen } />
    </Container>
;

const Container = styled.div.attrs(({ scrolled, open }) => ({
    scrolled,
    open,
}))`
    width: 100%;
    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 1024px) {
        height: ${({ open }) => open ? 20 : 15}mm;
    }
    
    @media only screen and (min-width: 1025px) {
        height: ${({ scrolled }) => scrolled ? 15 : 20}mm;
    }
    
    transition: all 0.25s, color 0s;
`;

const Links = styled.div.attrs(({ scrolled }) => ({
    scrolled,
}))`
    text-align: right;
    
    @media only screen and (max-width: 1024px) {
        display: none;
    }
    
    a {
        color: ${({ scrolled }) => scrolled ? '#212121' : '#fafafa'} !important;
    }
    
    a:hover {
        color: ${({ scrolled }) => scrolled ? '#212121' : '#fafafa'} !important;
    }
`;

const Link = styled(HashLink)`
    font: 6mm Dosis;
    cursor: default;
    margin-left: 10mm;
`;
