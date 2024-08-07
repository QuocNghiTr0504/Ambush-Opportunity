import { getLocalizedKeyword, SupportedLocale } from "@/helpers/langHelper";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: SupportedLocale } }): Promise<Metadata> {
    const locale = params.locale;
    return {
        title: "Ambush Opportunity",
        description: "ambushopportunity.uk - Acquire Extensive Financial Knowledge",
        keywords: getLocalizedKeyword(locale),
        openGraph: {
            url: "https://ambushopportunity.uk",
            type: "website",
            title: "ambushopportunity.uk - Acquire Extensive Financial Knowledge",
            description: "ambushopportunity.uk - Acquire Extensive Financial Knowledge",
            images: [
                {
                    url: "https://ambushopportunity.uk/assets/images/thumbnail.png",
                    width: 1200,
                    height: 630,
                    alt: "dminhvu"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: "ambushopportunity.uk - Acquire Extensive Financial Knowledge",
            description: "ambushopportunity.uk - Acquire Extensive Financial Knowledge",
            creator: "@ambushopportunity",
            site: "@ambushopportunity",
            images: [
                {
                    url: "https://ambushopportunity.uk/assets/images/thumbnail.png",
                    width: 1200,
                    height: 630,
                    alt: "ambushopportunity"
                }
            ]
        },
        alternates: {
            canonical: "https://ambushopportunity.uk"
        }
    };
}
export default function Layout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string }
}>) {


    return (
        <>
            {children}
        </>


    );
};
