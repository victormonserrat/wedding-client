import styled from 'styled-components';

export const Invitation = styled.div.attrs(({ flipped }) => ({
    flipped: flipped ? 180 : 0,
    aspectRatio: process.env.REACT_APP_INVITATION_ASPECT_RATIO,
}))`
    width: 90vw;
    height: calc(90vw * ${({ aspectRatio }) => aspectRatio});
    max-width: 148mm;
    max-height: calc(148mm * ${({ aspectRatio }) => aspectRatio});
    
    transition: transform 0.5s;
    transform-style: preserve-3d;
    
    transform: rotateY(${({ flipped }) => flipped}deg);
`;
