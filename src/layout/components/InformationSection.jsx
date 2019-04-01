import * as React from 'react';
import styled from 'styled-components';
import { Map } from './Map';

export const InformationSection = () =>
    <Section id={ 'informacion' }>
        <Content>
            <Title>
                Información
            </Title>
            <Locations>
                <Location>
                    <Ceremony />
                    <CeremonyIcon />
                    <Header>
                        Enlace
                    </Header>
                    <Text>
                        La ceremonia tendrá lugar en
                        la <b>Parroquia Nuestra Señora de la Asunción</b> el
                        sábado, 21 de septiembre de 2019 a las <b>12 horas</b>.
                    </Text>
                    <Address>
                        Plaza de la Marina Española, Córdoba.
                    </Address>
                </Location>
                <LastLocation>
                    <Celebration />
                    <CelebrationIcon />
                    <Header>
                        Celebración
                    </Header>
                    <Text>
                        A continuación nos reuniremos todos a las <b>14 horas</b> en
                        el hotel <b>Ayre Hotel Córdoba</b> para disfrutar del banquete.
                        ¡Y de la fiesta!
                    </Text>
                    <Address>
                        Calle Poeta Alonso de Bonilla, 3, Córdoba.
                    </Address>
                </LastLocation>
            </Locations>
        </Content>
        <Map
            googleMapURL={ `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}` }
            loadingElement={ <div style={{ height: '100%' }} /> }
            containerElement={ <div style={{ height: '600px' }} /> }
            mapElement={ <div style={{ height: '100%' }} /> }
        />
    </Section>
;

const Section = styled.section`
    background-color: #fafafa;
`;

const Content = styled.div`
    margin: 0 auto;
    padding: 30mm 16mm 20mm;
    max-width: 1200px;
    
    @media only screen and (max-width: 1200px) {
        padding: 30mm 5vw 20mm;
    }
`;

const Title = styled.div`
    text-align: center;
    font: 16mm Alex Brush;
    color: #212121;
    margin-bottom: 20mm;
    
    @media only screen and (max-width: 1200px) {
        font-size: 5.5vw;
    }
    
    @media only screen and (max-width: 600px) {
        font-size: 14.5vw;
    }
`;

const Locations = styled.div`
    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Location = styled.div`
    margin: 0 10mm 0 0;
    width: 50%;
    background-color: #ffffff;
    position: relative;
    
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin: 0 0 15mm;
    }
`;

const LastLocation = styled.div`
    width: 50%;
    background-color: #ffffff;
    position: relative;
    
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const CeremonyIcon = styled.div`
    position: absolute;
    width: 12mm;
    height: 12mm;
    background-color: #c8b4a0;
    background-image: url(/assets/img/ceremony-icon.svg);
    background-size: 6mm 6mm;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: -6mm;
    border-radius: 100%;
    left: calc(50% - 6mm);
    
    @media only screen and (max-width: 1200px) {
        width: 4vw;
        height: 4vw;
        background-size: 2vw 2vw;
        margin-top: -2vw;
        left: calc(50% - 2vw);
    }
    
    @media only screen and (max-width: 600px) {
        width: 11vw;
        height: 11vw;
        background-size: 5.5vw 5.5vw;
        margin-top: -5.5vw;
        left: calc(50% - 5.5vw);
    }
`;

const Ceremony = styled.div`
    background-image: url(/assets/img/ceremony.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 60mm;
    
    @media only screen and (max-width: 1200px) {
        height: 20vw;
    }
    
    @media only screen and (max-width: 600px) {
        height: 45vw;
    }
`;

const CelebrationIcon = styled.div`
    position: absolute;
    width: 12mm;
    height: 12mm;
    background-color: #c8b4a0;
    background-image: url(/assets/img/celebration-icon.svg);
    background-size: 7mm 7mm;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: -6mm;
    border-radius: 100%;
    left: calc(50% - 6mm);
    
    @media only screen and (max-width: 1200px) {
        width: 4vw;
        height: 4vw;
        background-size: 2.35vw 2.35vw;
        margin-top: -2vw;
        left: calc(50% - 2vw);
    }
    
    @media only screen and (max-width: 600px) {
        width: 11vw;
        height: 11vw;
        background-size: 6.4vw 6.4vw;
        margin-top: -5.5vw;
        left: calc(50% - 5.5vw);
    }
`;

const Celebration = styled.div`
    background-image: url(/assets/img/celebration.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 60mm;
    
    @media only screen and (max-width: 1200px) {
        height: 20vw;
    }
    
    @media only screen and (max-width: 600px) {
        height: 45vw;
    }
`;

const Header = styled.div`
    margin: 6mm 8mm 0;
    font: italic 6mm Dosis;
    color: #212121;
    
    @media only screen and (max-width: 1200px) {
        font-size: 2.4vw;
        margin: 2.4vw 3.2vw 0;
    }
    
    @media only screen and (max-width: 600px) {
        font-size: 5.5vw;
        margin: 5.5vw 7.2vw 0;
    }
`;

const Text = styled.div`
    margin: 4mm 8mm;
    text-align: justify;
    font: 4mm Open Sans;
    color: #212121;
    
    @media only screen and (max-width: 1200px) {
        font-size: 1.6vw;
        margin: 1.6vw 3.2vw;
    }
    
    @media only screen and (max-width: 600px) {
        font-size: 3.6vw;
        margin: 3.6vw 7.2vw;
    }
`;

const Address = styled.div`
    margin: 8mm;
    font: italic 4mm Open Sans;
    color: #212121;
    text-align: right;
    
    @media only screen and (max-width: 1200px) {
        font-size: 1.6vw;
        margin: 3.2vw;
    }
    
    @media only screen and (max-width: 600px) {
        font-size: 3.6vw;
        margin: 7.2vw;
    }
`;
