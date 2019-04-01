import * as React from 'react';
import styled from 'styled-components';

export const SongButton = () => {
    const [audio, setAudio] = React.useState();
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const audio = document.getElementById('audio');

        setAudio(audio);
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

    const handleOnClick = () => { audio.paused ? audio.play() : audio.pause() };

    return(
        <>
            <audio
                id={ 'audio' }
                autoPlay
                loop
                src={ `${process.env.REACT_APP_AUDIO_URL}` }
            />
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
    bottom: 14mm;
    z-index: 1;
    width: 7mm;
    height: 7mm;
    background-image: url(/assets/img/music.svg);
    background-size: cover;
    
    transition: all 0.25s;
    right: ${({ scrolled }) => scrolled ? 28 : 14}mm;
    
    @media only screen and (max-width: 1024px) {
        bottom: 8mm;
        width: 6mm;
        height: 6mm;
        
        right: ${({ scrolled }) => scrolled ? 18 : 6}mm;
    }
`;
