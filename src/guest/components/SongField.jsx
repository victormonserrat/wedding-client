import * as React from 'react';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

export const SongField = ({
    input: { value, onChange },
}) =>
    <Song
        value={ value }
        onChange={ (event, data) => onChange(data.value) }
        placeholder={ 'Escribe el nombre o copia un enlace' }
        icon={ 'music' }
        fluid
    />
;

export const Song = styled(Input)`
    margin-bottom: 5mm;
`;
