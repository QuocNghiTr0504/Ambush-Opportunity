import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from 'react';
import { Notification } from '@/components/notifications/notification';
import TopProgressBar from '@/components/progress/TopProgressBar';
import ClientProvider from "@/redux/providers/clientProvider";
import './globals.css'
import TranslationProvider from "@/providers/TranslationProvider";
import type { Viewport } from "next";
import { SupportedLocale } from "@/helpers/langHelper";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};
export const metadata: Metadata = {
  metadataBase: new URL("https://ambushopportunity.uk"),
  openGraph: {
    siteName: "PT Landingpage",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
    types: {
      "application/rss+xml": "https://ambushopportunity.uk/rss.xml"
    },
    languages: {
      'en-US': 'https://ambushopportunity.uk/en-US',
      'vi-VN': 'https://nextjs.org/vi-VN',
      'zh-CN': 'https://nextjs.org/zh-CN',
    },
  },
  applicationName: "PT Landingpage",
  appleWebApp: {
    title: "PT Landingpage",
    statusBarStyle: "default",
    capable: true
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      }
      // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: [
      {
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png"
      },
      {
        url: "/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png"
      }
    ]
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

  return (
    <ClientProvider>
      <TranslationProvider>
        <html lang={'en-US'}>
          <body style={{ background: 'white' }} className={inter.className}>
            {children}
            <Notification />
            <TopProgressBar />
          </body>
        </html>
      </TranslationProvider>

    </ClientProvider>
  );
}
