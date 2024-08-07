'use client'
import { isSupportedLocale, SupportedLocale } from "@/helpers/langHelper";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function PublicRouteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname()
    const router = useRouter();
    const { i18n } = useTranslation();
    useEffect(() => {
        let queries = pathname.split('/');
        let lang = queries[1] as SupportedLocale;
        if (!isSupportedLocale(lang)) {
            lang = 'en-US'
            queries[1] = lang;
        }
        router.push(queries.join('/'))
        i18n.changeLanguage(lang);
    }, [i18n, pathname, router])
    return (
        <>
            {children}
        </>
    )
}