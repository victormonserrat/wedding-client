import * as React from 'react';
import { Checkbox } from 'semantic-ui-react';
import styled from "styled-components";

export const RoomField = ({
    input: { checked, onChange },
}) =>
    <>
        <Room
            checked={ checked }
            onChange={ (event, data) => onChange(data.checked) }
            label={ 'Tengo interés en hospedarme en el hotel' }
        />
        <Information>
            El precio de la habitación estándar es de 60€, el de la triple es de 70€ y el de la familiar
            (4 adultos) es de 80€ (IVA incluido) en régimen de solo alojamiento. El desayuno podrá ser contratado en el
            mismo momento.
        </Information>
    </>
;

export const Room = styled(Checkbox)`
    margin-bottom: 5mm;
`;

export const Information = styled.div`
    margin-bottom: 8mm;
    color: #c7c7c7;
    text-align: justify;
`;
