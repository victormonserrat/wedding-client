import * as React from 'react';
import styled from 'styled-components';

export const ScrollUpButton = () => {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);

        return () => window.removeEventListener('scroll', handleOnScroll);
    }, []);

    const handleOnScroll = () => {
        if (
            document.body.scrollTop > process.env.REACT_APP_UP_BUTTON_SCROLL_POINT ||
            document.documentElement.scrollTop > process.env.REACT_APP_UP_BUTTON_SCROLL_POINT
        ) {
            setScrolled(true);

            return;
        }

        setScrolled(false);
    };

    const handleOnClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return(
        <>
            <Button
                scrolled={ scrolled }
                onClick={ handleOnClick }
            />
        </>
    );
};

const Button = styled.div.attrs(({ scrolled }) => ({
    scrolled,
}))`
    position: fixed;
    right: 14mm;
    z-index: 1;
    width: 7mm;
    height: 7mm;
    background-image: url(/assets/img/angle-up.svg);
    background-size: cover;
    
    transition: all 0.25s;
    bottom: ${({ scrolled }) => scrolled ? 14 : 7}mm;
    opacity: ${({ scrolled }) => scrolled ? 1 : 0};
    
    @media only screen and (max-width: 1024px) {
        width: 6mm;
        height: 6mm;
        right: 6mm;
        
        bottom: ${({ scrolled }) => scrolled ? 8 : 0}mm;
    }
`;
