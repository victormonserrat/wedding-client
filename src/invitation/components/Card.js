import styled from 'styled-components';

export const Card = styled.div`
    perspective: 600mm;
    
    @media only screen and (max-width: 1024px) {
        perspective: 300mm;
    }
`;
