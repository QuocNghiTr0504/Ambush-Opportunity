'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
    children?: React.ReactNode,
    href: string,
    className?: string
}

//Its </Link> component, but with the locale at the start of the url
//Example, with href passed in ='/register', and the current select languaged of user is en-US
// then the localized link would be '/en-US/register'
export const LocalizedLink: React.FC<Props> = ({ children, href, className }) => {

    const [locale, setLocale] = useState('en-US');

    useEffect(() => {
        const storedLocale = localStorage.getItem('i18nextLng');
        if (storedLocale) {
            setLocale(storedLocale);
        }
    }, []);
    return <Link className={className} href={`/${locale}/${href}`} hrefLang={locale}>{children}</Link>
}