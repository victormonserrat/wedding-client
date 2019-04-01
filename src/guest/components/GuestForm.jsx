import * as React from 'react';
import styled from 'styled-components';
import { Field, Form } from 'redux-form';
import { Button } from 'semantic-ui-react';
import { MenuField } from './MenuField';
import { AllergensField } from './AllergensField';
import { SongField } from './SongField';
import { ConfirmationField } from './ConfirmationField';
import { RoomField } from './RoomField';

export const GuestForm = ({
    submitable,
    saved,
    handleSubmit,
    handleOnSubmit,
}) =>
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <Label>
            Menú
        </Label>
        <Field
            name={ 'menu' }
            component={ MenuField }
        />
        <Label>
            Alérgenos
        </Label>
        <Field
            name={ 'allergens' }
            component={ AllergensField }
            type={ 'select-multi' }
        />
        <Label>
            Elije una canción para la fiesta
        </Label>
        <Field
            name={ 'song' }
            component={ SongField }
        />
        <Field
            name={ 'answer' }
            component={ ConfirmationField }
            type={ 'checkbox' }
        />
        <Field
            name={ 'room' }
            component={ RoomField }
            type={ 'checkbox' }
        />
        <Submit
            disabled={ !submitable || saved }
            fluid
        >
            { submitable ? saved ? 'Confirmación enviada' : 'Enviar confirmación' : 'Confirma tu asistencia' }
        </Submit>
    </Form>
;

export const Label = styled.div`
    margin: 0 0 2mm;
    font-weight: bold;
`;

export const Submit = styled(Button)`
    background-color: #b4d2c8 !important;
    color: #ffffff !important;
    font-size: 1.1rem !important;
    font-weight: 400 !important;
`;
