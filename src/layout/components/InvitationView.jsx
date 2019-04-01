import * as React from 'react';
import { Background } from '../../invitation/components/Background';
import { Card } from '../../invitation/components/Card';
import { Invitation } from '../../invitation/components/Invitation';
import { Front } from '../../invitation/components/Front';
import { FrontContent } from '../../invitation/components/FrontContent';
import Guests from '../../invitation/containers/Guests';
import { TurnMessage } from '../../invitation/components/TurnMessage';
import { Back } from '../../invitation/components/Back';
import { BackContent } from '../../invitation/components/BackContent';
import Comment from '../../invitation/containers/Comment';
import { Text } from '../../invitation/components/Text';
import { Names } from '../../invitation/components/Names';
import { Information } from '../../invitation/components/Information';
import { Location } from '../../invitation/components/Location';
import { Time } from '../../invitation/components/Time';
import { Separator } from '../../invitation/components/Separator';
import { Date } from '../../invitation/components/Date';

export const InvitationView = () => {
    const [flipped, setFlipped] = React.useState(false);

    const handleOnClick = () => setFlipped(!flipped);

    return(
        <Background>
            <Card>
                <Invitation
                    flipped={ flipped }
                    onClick={ handleOnClick }
                >
                    <Front>
                        <FrontContent>
                            <Guests />
                            <TurnMessage>Dar la vuelta</TurnMessage>
                        </FrontContent>
                    </Front>
                    <Back>
                        <BackContent>
                            <Comment />
                            <Text>
                                NUESTRA BODA
                            </Text>
                            <Names>
                                Elena & Jaime
                            </Names>
                            <Information>
                                <Location>
                                    <div>Ntra. Sra. de</div>
                                    <div>la Asunción</div>
                                    <Time>12:00</Time>
                                </Location>
                                <Separator />
                                <Date>
                                    <div>21 sept. 2019</div>
                                </Date>
                                <Separator />
                                <Location>
                                    <div>Ayre Hotel</div>
                                    <div>Córdoba</div>
                                    <Time>14:00</Time>
                                </Location>
                            </Information>
                            <Text>
                                SE RUEGA<br/>CONFIRMACIÓN
                            </Text>
                        </BackContent>
                    </Back>
                </Invitation>
            </Card>
        </Background>
    );
};
