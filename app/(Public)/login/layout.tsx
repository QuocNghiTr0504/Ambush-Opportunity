import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ambush Opportunity - Login",
    description:
        "ambushopportunity.uk - Login",
    keywords: [
        "ambushopportunity",
        "Ambush Opportunity",
        "yuan",
        "fintech",
        "invest",
        "money"
    ],
    openGraph: {
        url: "https://ambushopportunity.uk/login",
        type: "website",
        title: "ambushopportunity.uk - Acquire Extensive Financial Knowledge",
        description:
            "ambushopportunity.uk - Login",
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
            "ambushopportunity.uk - Login",
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
        canonical: "https://ambushopportunity.uk/login"
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
