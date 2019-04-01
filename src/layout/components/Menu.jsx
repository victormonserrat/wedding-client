import * as React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const Menu = ({
    onLinkClick,
}) =>
    <List>
        <Item>
            <Link
                to={ '/' }
                onClick={() => {
                    window.scrollTo(0, 0);
                    onLinkClick();
                }}
            >
                Inicio
            </Link>
        </Item>
        <Item>
            <Link
                to={ '/invitacion' }
                onClick={() => {
                    window.scrollTo(0, 0);
                    onLinkClick();
                }}
            >
                Invitación
            </Link>
        </Item>
        <Item>
            <Link
                to={ '/#informacion' }
                onClick={() => {
                    onLinkClick();
                }}
            >
                ¿Dónde y cuándo?
            </Link>
        </Item>
        <Item>
            <Link
                to={ '/#confirmacion' }
                onClick={() => {
                    onLinkClick();
                }}
            >
                Confirma tu asistencia
            </Link>
        </Item>
        <Item>
            <Link
                to={ '/menu' }
                onClick={() => {
                    window.scrollTo(0, 0);
                    onLinkClick();
                }}
            >
                Menú
            </Link>
        </Item>
    </List>
;

const List = styled.ul`
    list-style: none;
    text-align: right;
    margin: 0;
    padding: 0;
    
    @media only screen and (min-width: 1025px) {
        display: none;
    }
`;

const Item = styled.li`
    margin-top: 5mm;
    
    @media only screen and (max-height: 600px) and (orientation: landscape) {
        margin-top: 5vh;
    }
`;

const Link = styled(HashLink)`
    font: 7mm Dosis;
    color: #212121;
    cursor: default;
    
    &:hover {
        color: #212121;
    }
    
    @media only screen and (max-height: 600px) and (orientation: landscape) {
        font-size: 7vh;
    }
`;
