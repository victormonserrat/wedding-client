import styled from 'styled-components';

export const Back = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 2%;
    background-image: url(/assets/img/menu-back.jpg);
    background-size: cover;
    background-position: center;
    
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;
