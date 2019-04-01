import styled from 'styled-components';

export const Background = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25mm 0;
    background-image: url(/assets/img/background.jpg);
    background-size: cover;
    background-position: center;
    
    @media only screen and (max-width: 1024px) {
        padding: 18mm 0;
    }
`;
