'use client'

import Link from "next/link";
import React from "react";

interface Props {
    children?: React.ReactNode,
    href: string,
    className: string
}
export const LinkWithLocaleAtTheStart: React.FC<Props> = ({ children, href, className }) => {

    const locale = localStorage.getItem('i18nextLng') ?? 'en-US';

    return <Link className={className} href={`/${locale}/${href}`} hrefLang={locale}>{children}</Link>
}