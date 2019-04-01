import * as React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

export const AllergensField = ({
    input: { value, onChange },
}) =>
    <Allergens
        value={ value }
        options={ allergens }
        onChange={ (event, data) => onChange(data.value) }
        onLabelClick={ (event, data) => onChange(value.filter(item => item !== data.value)) }
        placeholder={ 'Ninguno' }
        fluid
        multiple
        selection
        selectedLabel={ null }
    />
;

export const Allergens = styled(Dropdown)`
    margin-bottom: 5mm;
`;

const allergens = [
    { text: 'Gluten', value: 'Gluten', image: '/assets/img/gluten.svg' },
    { text: 'Crustáceos', value: 'Crustáceos', image: '/assets/img/crustaceos.svg' },
    { text: 'Huevos', value: 'Huevos', image: '/assets/img/huevos.svg' },
    { text: 'Pescado', value: 'Pescado', image: '/assets/img/pescado.svg' },
    { text: 'Cacahuetes', value: 'Cacahuetes', image: '/assets/img/cacahuetes.svg' },
    { text: 'Soja', value: 'Soja', image: '/assets/img/soja.svg' },
    { text: 'Lácteos', value: 'Lácteos', image: '/assets/img/lacteos.svg' },
    { text: 'Frutos secos', value: 'Frutos secos', image: '/assets/img/frutos-secos.svg' },
    { text: 'Apio', value: 'Apio', image: '/assets/img/apio.svg' },
    { text: 'Mostaza', value: 'Mostaza', image: '/assets/img/mostaza.svg' },
    { text: 'Sésamo', value: 'Sésamo', image: '/assets/img/sesamo.svg' },
    { text: 'Sulfitos', value: 'Sulfitos', image: '/assets/img/sulfitos.svg' },
    { text: 'Moluscos', value: 'Moluscos', image: '/assets/img/moluscos.svg' },
    { text: 'Altramuces', value: 'Altramuces', image: '/assets/img/altramuces.svg' },
];
