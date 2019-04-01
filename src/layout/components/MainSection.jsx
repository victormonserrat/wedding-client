import * as React from 'react';
import styled from 'styled-components';

export const MainSection = () => {
    const weddingDate = new window.Date(process.env.REACT_APP_WEDDING_DATE);

    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        if (weddingDate - new window.Date() < 0) {
            return;
        }

        const interval = setInterval(tick, 1000);
        tick();

        return () => clearInterval(interval);
    }, []);

    const tick = () => {
        const date = new window.Date();

        if (weddingDate - date < 0) {
            return;
        }

        let remaining = Math.floor((weddingDate - date) / 1000);
        const days = Math.floor(remaining / 86400);
        setDays(days);
        remaining -= days * 86400;
        const hours = Math.floor(remaining / 3600);
        setHours(hours);
        remaining -= hours * 3600;
        const minutes = Math.floor(remaining / 60);
        setMinutes(minutes);
        remaining -= minutes * 60;
        setSeconds(remaining);
    };

    return(
        <Section id={'principal'}>
            <Content>
                <Wedding>
                    <Promised>
                        <Avatar src={'/assets/img/elena-ollie.jpg'}/>
                        <Name>Elena<br/>Díaz Crespo</Name>
                    </Promised>
                    <Information>
                        <Flowers src={'/assets/img/flowers.gif'}/>
                        <Date>21 de septiembre de 2019</Date>
                        <Location>Parroquia Nuesta Señora de la Asunción,<br/>Córdoba</Location>
                    </Information>
                    <Promised>
                        <Avatar src={'/assets/img/jaime-ollie.jpg'}/>
                        <Name>Jaime<br/>Monserrat Villatoro</Name>
                    </Promised>
                </Wedding>
                <Countdown>
                    { days > 0 &&
                        <Measure>
                            { days }
                            <Unity>
                                { days > 1 ? 'Días' : 'Día' }
                            </Unity>
                        </Measure>
                    }
                    { hours > 0 &&
                        <Measure>
                            { hours }
                            <Unity>
                                { hours > 1 ? 'Horas' : 'Hora' }
                            </Unity>
                        </Measure>
                    }
                    { minutes > 0 &&
                        <Measure>
                            { minutes }
                            <Unity>
                                { minutes > 1 ? 'Minutos' : 'Minuto' }
                            </Unity>
                        </Measure>
                    }
                    { seconds > 0 &&
                        <Measure>
                            { seconds }
                            <Unity>
                                { seconds > 1 ? 'Segundos' : 'Segundo' }
                            </Unity>
                        </Measure>
                    }
                </Countdown>
            </Content>
        </Section>
    );
};

const Section = styled.section`
    background-color: #ffffff;
`;

const Content = styled.div`
    margin: 0 auto;
    padding: 50mm 16mm 30mm;
    max-width: 1200px;
    
    @media only screen and (max-width: 1200px) {
        padding: 50mm 5vw 30mm;
    }
    
    @media only screen and (max-width: 992px) and (orientation: landscape) {
        padding: 30mm 5vw;
    }
    
    @media only screen and (max-width: 600px) {
        padding: 30mm 5vw;
    }
`;

const Wedding = styled.div`
    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Promised = styled.div`
    width: 25%;
    
    @media only screen and (max-width: 600px) {
        width: 70%;
    }
`;

const Avatar = styled.img`
    width: 100%;
    border-radius: 100%;
`;

const Name = styled.div`
    text-align: center;
    font: italic 7mm Playfair Display;
    color: #212121;
    margin-top: 10mm;
    
    @media only screen and (max-width: 1200px) {
        font-size: 2.2vw;
    }
    
    @media only screen and (max-width: 600px) {
        font-size: 6.4vw;
    }
`;

const Information = styled.div`
    width: 50%;
    text-align: center;
    
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin: 15mm 0;
    }
`;

const Flowers = styled.img`
    width: 60%;
    
    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`;

const Date = styled.div`
    font: italic 6mm Playfair Display;
    color: #212121;
    margin-top: 5mm;
    
    @media only screen and (max-width: 1200px) {
        font-size: 2vw;
    }
    
    @media only screen and (max-width: 600px) {
        font-size: 5.5vw;
    }
`;

const Location = styled.div`
    font: 4mm Open Sans;
    color: #212121;
    margin-top: 5mm;
    
    @media only screen and (max-width: 1200px) {
        font-size: 1.6vw;
    }
    
    @media only screen and (max-width: 600px) {
        font-size: 3.6vw;
    }
`;

const Countdown = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10mm;
    text-align: center;
    
    @media only screen and (max-width: 600px) {
        margin-top: 15mm;
    }
`;

const Measure = styled.div`
    margin: 0 5mm;
    font: 10mm Playfair Display;
    color: #212121;
    
    @media only screen and (max-width: 1200px) {
        font-size: 3.2vw;
    }
    
    @media only screen and (max-width: 600px) {
        font-size: 9.2vw;
    }
`;

const Unity = styled.div`
    font: italic 4mm Playfair Display;
    color: #212121;
    
    @media only screen and (max-width: 1200px) {
        font-size: 1.3vw;
    }
    
    @media only screen and (max-width: 600px) {
        font-size: 3.65vw;
    }
`;
