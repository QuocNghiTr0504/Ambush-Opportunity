'use client';

import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/helpers/i18n';
import { LanguageProvider } from '@/contexts/TranslationContext';

interface TranslationProviderProps {
    children: ReactNode;
}


const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {

    return (<LanguageProvider i18n={i18n}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LanguageProvider>)
};

export default TranslationProvider;
