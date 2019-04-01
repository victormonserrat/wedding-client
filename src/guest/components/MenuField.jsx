import * as React from 'react';
import styled from 'styled-components';
import { Select } from 'semantic-ui-react';

export const MenuField = ({
    input: { value, onChange },
}) =>
    <Menu
        value={ value }
        options={ menus }
        onChange={ (event, data) => onChange(data.value) }
        fluid
        selection
    />
;

export const Menu = styled(Select)`
    margin-bottom: 5mm;
`;

const menus = [
    { text: 'Original', value: 'Original' },
    { text: 'Vegetariano', value: 'Vegetariano' },
    { text: 'Vegano', value: 'Vegano' },
    { text: 'Infantil', value: 'Infantil' },
    { text: 'Ninguno', value: 'Ninguno' },
];
