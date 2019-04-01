import * as React from 'react';
import { Background } from '../../menu/components/Background';
import { Card } from '../../menu/components/Card';
import { Menu } from '../../menu/components/Menu';
import { Front } from '../../menu/components/Front';
import { TurnMessage } from '../../menu/components/TurnMessage';
import { Back } from '../../menu/components/Back';

export const MenuView = () => {
    const [flipped, setFlipped] = React.useState(false);

    const handleOnClick = () => setFlipped(!flipped);

    return(
        <Background>
            <Card>
                <Menu
                    flipped={ flipped }
                    onClick={ handleOnClick }
                >
                    <Front>
                        <TurnMessage>
                            Dar la vuelta
                        </TurnMessage>
                    </Front>
                    <Back />
                </Menu>
            </Card>
        </Background>
    );
};
