
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const defaultPages: Array<{
        url: string;
        lastModified: Date;
        changeFrequency: "daily" | "monthly" | "always" | "hourly" | "weekly" | "yearly" | "never";
        priority: number;
    }> = [
            {
                url: "https://ambushopportunity.uk",
                lastModified: new Date(),
                changeFrequency: "daily",
                priority: 1
            },
            {
                url: "https://ambushopportunity.uk/about",
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.9
            },
            {
                url: "https://ambushopportunity.uk/contact",
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.9
            },
            {
                url: "https://ambushopportunity.uk/register",
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.9
            },
            {
                url: "https://ambushopportunity.uk/login",
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.9
            }
            // other pages
        ];


    const sitemap = [
        ...defaultPages
    ];

    return sitemap;
}