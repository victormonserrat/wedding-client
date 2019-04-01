import * as React from 'react';
import { Cover } from './Cover';
import { MainSection } from './MainSection';
import { InformationSection } from './InformationSection';
import ConfirmationSection from '../containers/ConfirmationSection';

export const HomeView = () =>
    <>
        <Cover />
        <MainSection />
        <InformationSection />
        <ConfirmationSection />
    </>
;