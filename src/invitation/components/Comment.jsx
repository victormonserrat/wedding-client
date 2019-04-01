import * as React from 'react';
import styled from 'styled-components';

export const Comment = ({
    comment,
}) =>
    <Content>
        { comment }
    </Content>
;

const Content = styled.div`
    padding: 0 16%;
    font: 6mm Indie Flower;
    text-align: justify;
    color: #212121;
    
    @media only screen and (max-width: 164.444444444mm) {
        font-size: 3.65vw;
    }
`;
