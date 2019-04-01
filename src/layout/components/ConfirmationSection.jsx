import * as React from 'react';
import styled from 'styled-components';
import GuestForm from '../../guest/containers/GuestForm';

export const ConfirmationSection = ({
    guests,
}) => {
    let content = [];

    for (let i = 0; i < guests.length; i += 2) {
        const { id, firstName, gender, menu, allergens, song, answer, room } = guests[i];

        content.push(
            <Row key={ i } >
                <Confirmation>
                    <Title>
                        { firstName }
                    </Title>
                    <Subtitle src={ gender === 'Mujer' ? '/assets/img/rose.svg' : '/assets/img/bow-tie.svg'} />
                    <GuestForm
                        form={ id }
                        initialValues={{
                            menu,
                            allergens,
                            song,
                            answer,
                            room,
                        }}
                    />
                </Confirmation>
                { !!guests[i+1] &&
                    <RightConfirmation>
                        <Title>
                            { guests[i+1].firstName }
                        </Title>
                        <Subtitle src={ guests[i+1].gender === 'Mujer' ? '/assets/img/rose.svg' : '/assets/img/bow-tie.svg'} />
                        <GuestForm
                            form={ guests[i+1].id }
                            initialValues={{
                                menu: guests[i+1].menu,
                                allergens: guests[i+1].allergens,
                                song: guests[i+1].song,
                                answer: guests[i+1].answer,
                                room: guests[i+1].room,
                            }}
                        />
                    </RightConfirmation>
                }
            </Row>
        );
    }

    return(
        <Section id={'confirmacion'}>
            <Content>
                { content }
            </Content>
        </Section>
    );
};

const Section = styled.section`
    background-image: url(/assets/img/rsvp.jpg);
    background-size: cover;
    background-position: bottom left;
    background-attachment: fixed;
    
    @media only screen and (max-width: 600px) {
        background-size: auto 600px;
    }
`;

const Content = styled.div`
    margin: 0 auto;
    padding: 30mm 16mm 25mm;
    max-width: 1200px;
    
    @media only screen and (max-width: 1200px) {
        padding: 30mm 5vw 25mm;
    }
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Confirmation = styled.div`
    background-color: #ffffff;
    padding: 15mm 10mm;
    width: 50%;
    margin-bottom: 10mm;
    border-radius: 1%;
    
    @media only screen and (max-width: 1200px) {
        padding: 5vw 3.35vw;
    }
    
    @media only screen and (max-width: 600px) {
        padding: 10vw 5vw;
        width: 100%;
    }
`;

const RightConfirmation = styled.div`
    background-color: #ffffff;
    padding: 15mm 10mm;
    width: 50%;
    margin: 0 0 10mm 10mm;
    border-radius: 1%;
    
    @media only screen and (max-width: 1200px) {
        padding: 5vw 3.35vw;
        margin: 0 0 10mm 10mm;
    }
    
    @media only screen and (max-width: 600px) {
        padding: 10vw 5vw;
        width: 100%;
        margin: 0 0 10mm;
    }
`;

const Title = styled.div`
    text-align: center;
    font: 16mm Alex Brush;
    color: #dcc8b4;
    
    @media only screen and (max-width: 1200px) {
        font-size: 5.1vw;
    }
    
    @media only screen and (max-width: 600px) {
        font-size: 14.6vw;
    }
`;

const Subtitle = styled.img`
    width: 100%;
    height: 12mm;
    margin-bottom: 10mm;
    
    @media only screen and (max-width: 1200px) {
        height: 3.8vw;
    }
    
    @media only screen and (max-width: 600px) {
        height: 10.9vw;
    }
`;
