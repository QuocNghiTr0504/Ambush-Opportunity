import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ambush Opportunity - About",
    description:
        "ambushopportunity.uk - About us",
    keywords: [
        "ambushopportunity",
        "Ambush Opportunity",
        "yuan",
        "fintech",
        "invest",
        "money"
    ],
    openGraph: {
        url: "https://ambushopportunity.uk/about",
        type: "website",
        title: "ambushopportunity.uk - Acquire Extensive Financial Knowledge",
        description:
            "ambushopportunity.uk - About us",
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
        description:
            "ambushopportunity.uk - About us",
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
        canonical: "https://ambushopportunity.uk/about"
    }
};
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <>
            {children}
        </>


    );
};
