'use client'
// src/contexts/LanguageContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { i18n as I18nInstance } from 'i18next';

interface LanguageContextProps {
    language: string;
    changeLanguage: (lng: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
    i18n: I18nInstance;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, i18n }) => {
    const [language, setLanguage] = useState<string>(i18n.language);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };

    useEffect(() => {
        setLanguage(i18n.language);
    }, [i18n]);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
