import * as React from 'react';
import { Checkbox } from 'semantic-ui-react';
import styled from "styled-components";

export const ConfirmationField = ({
    input: { checked, onChange },
}) =>
    <Confirmation
        checked={ checked }
        onChange={ (event, data) => onChange(data.checked) }
        label={ 'Confirmo mi asistencia a la celebración' }
    />
;

export const Confirmation = styled(Checkbox)`
    margin-bottom: 2.5mm;
`;
