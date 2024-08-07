import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ambush Opportunity - Register",
    description:
        "ambushopportunity.uk - Register",
    keywords: [
        "ambushopportunity",
        "Ambush Opportunity",
        "yuan",
        "fintech",
        "invest",
        "money"
    ],
    openGraph: {
        url: "https://ambushopportunity.uk/register",
        type: "website",
        title: "ambushopportunity.uk - Acquire Extensive Financial Knowledge",
        description:
            "ambushopportunity.uk - Register",
        images: [
            {
                url: "https://ambushopportunity.uk/assets/images/thumbnail.png",
                width: 1200,
                height: 630,
                alt: "ambushopportunity"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "ambushopportunity.uk - Acquire Extensive Financial Knowledge",
        description:
            "ambushopportunity.uk - Register",
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
        canonical: "https://ambushopportunity.uk/register"
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
