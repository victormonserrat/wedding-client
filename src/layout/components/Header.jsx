import * as React from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { Menu } from './Menu';

export const Header = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);

        return () => window.removeEventListener('scroll', handleOnScroll);
    }, []);

    const handleOnScroll = () => {
        if (
            document.body.scrollTop > process.env.REACT_APP_HEADER_SCROLL_POINT ||
            document.documentElement.scrollTop > process.env.REACT_APP_HEADER_SCROLL_POINT
        ) {
            setScrolled(true);

            return;
        }

        setScrolled(false);
    };

    const handleOnToggleOpen = () => {
        setOpen(!open);
    };

    const handleOnClickLink = () => {
        setOpen(false);
    };

    return(
        <Navigation scrolled={ scrolled } open={ open }>
            <Navbar scrolled={ scrolled } open={ open } onToggleOpen={ handleOnToggleOpen } />
            <Menu onLinkClick={ handleOnClickLink } />
        </Navigation>
    );
};

const Navigation = styled.div.attrs(({ scrolled, open }) => ({
    scrolled,
    open,
}))`
    position: fixed;
    z-index: 2;
    width: 100%;
    background-color: rgba(255, 255, 255, ${({ scrolled, open }) => scrolled || open ? 0.9 : 0});
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0 5vw;
    overflow: hidden;
    color: ${({ scrolled, open }) => scrolled || open ? '#212121' : '#fafafa'};
    
    @media only screen and (max-width: 1024px) {
        height: ${({ open }) => open ? '100vh' : '15mm'};
        ${({ scrolled, open }) => (scrolled || open) && 'box-shadow: 0 0 2mm rgba(0, 0, 0, 0.1);'}
    }
    
    @media only screen and (min-width: 1025px) {
        height: ${({ scrolled }) => scrolled ? '15mm' : '20mm'};
        color: ${({ scrolled }) => scrolled ? '#212121' : '#fafafa'};
        ${({ scrolled }) => scrolled && 'box-shadow: 0 0 2mm rgba(0, 0, 0, 0.1);'}
        background-color: rgba(255, 255, 255, ${({ scrolled }) => scrolled ? 0.9 : 0});
    }
    
    transition: all 0.25s, color 0s;
    ${({ scrolled, open }) => open && 'transition: height 0.5s;'}
`;
