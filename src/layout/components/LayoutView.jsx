import * as React from 'react';
import { Header } from './Header';
import { SongButton } from './SongButton';
import { ScrollUpButton } from './ScrollUpButton';

export const LayoutView = () =>
    <>
        <Header />
        <SongButton />
        <ScrollUpButton />
    </>
;
