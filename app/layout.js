import Preloader from "@/components/ui/preloader";
import { jostMedium, openSans } from "./fonts";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  metadataBase: new URL("https://divyenghoghari-07.vercel.app"),
  title: {
    default: "Divyen Ghoghari | Software Engineer Portfolio",
    template: "%s | Divyen Ghoghari",
  },
  description:
    "Divyen Ghoghari is a software engineer from Surat, Gujarat, India. Explore his portfolio, projects, skills, and experience in web and software development.",
  keywords: [
    "Divyen Ghoghari",
    "Divyen Ghoghari software engineer",
    "Divyen Ghoghari portfolio",
    "Divyen Ghoghari developer",
    "Divyen Ghoghari Surat",
    "software engineer Surat",
    "full stack developer Gujarat",
  ],
  authors: [{ name: "Divyen Ghoghari", url: "https://divyenghoghari-07.vercel.app" }],
  creator: "Divyen Ghoghari",
  publisher: "Divyen Ghoghari",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://divyenghoghari-07.vercel.app",
    siteName: "Divyen Ghoghari",
    title: "Divyen Ghoghari | Software Engineer Portfolio",
    description:
      "Portfolio of Divyen Ghoghari, a software engineer from Surat, Gujarat. View projects, skills and contact details.",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Divyen Ghoghari - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyen Ghoghari | Software Engineer Portfolio",
    description:
      "Portfolio of Divyen Ghoghari, a software engineer from Surat, Gujarat.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "googled55b3980832dfda1",
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${jostMedium.className} ${openSans.variable} over-hiddenn position-relative`}
                style={{
                    backgroundImage: "url('/images/slider/body-bg.jpg')",
                }}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Person",
                                name: "Divyen Ghoghari",
                                alternateName: ["Divyen Ghoghari Software Engineer"],
                                jobTitle: "Software Engineer",
                                url: "https://divyenghoghari-07.vercel.app",
                                image: "https://divyenghoghari-07.vercel.app/og-image.png",
                                address: {
                                    "@type": "PostalAddress",
                                    addressLocality: "Surat",
                                    addressRegion: "Gujarat",
                                    addressCountry: "IN",
                                },
                                sameAs: [
                                    "https://github.com/[MY_GITHUB_USERNAME]",
                                    "https://www.linkedin.com/in/[MY_LINKEDIN_USERNAME]",
                                    "https://twitter.com/[MY_TWITTER_USERNAME]",
                                    "https://www.instagram.com/[MY_INSTAGRAM_USERNAME]"
                                ],
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                name: "Divyen Ghoghari",
                                url: "https://divyenghoghari-07.vercel.app"
                            }
                        ]),
                    }}
                />
                <Preloader />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
