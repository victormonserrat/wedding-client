import * as React from 'react';
import styled from 'styled-components';

export const Guests = ({
    guestsLines,
}) =>
    <Lines>
        { guestsLines.map((guestsLine, index) =>
            <div key={ index }>
                { guestsLine }
            </div>
        )}
    </Lines>
;

const Lines = styled.div.attrs(({ children: { length } }) => ({
    length,
}))`
    text-align: center;
    line-height: normal;
    color: #212121;
    font-family: Moon Chin;
    font-size: ${({ length }) => length < 5 ? '16mm' : '14mm'};
    
    @media only screen and (max-width: 164.444444444mm) {
        font-size: ${({ length }) => length < 5 ? '9.75vw' : '8.5vw'};
    }
`;
