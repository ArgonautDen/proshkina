import type { Metadata, Viewport } from "next";
import { mfevolt } from "./fonts";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import "./globals.css";

const TITLE = "Прошкина Дарья Владиславовна — ветеринарный врач-невролог";
const DESCRIPTION =
  "Дарья Владиславовна Прошкина — ветеринарный врач-невролог. Онлайн-консультации по неврологии для владельцев животных и коллег-ветеринаров, очный приём в Европейском Ветеринарном Центре (EVC), Москва.";
const KEYWORDS = [
  "ветеринарный врач",
  "ветеринарный невролог",
  "онлайн консультация ветеринара",
  "невролог для животных",
  "невролог для собак",
  "невролог для кошек",
  "ветеринарная неврология",
  "консультация ветеринара онлайн",
  "Прошкина Дарья",
  "EVC",
  "Европейский Ветеринарный Центр",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Прошкина Дарья Владиславовна",
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: "Прошкина Дарья Владиславовна" }],
  creator: "Прошкина Дарья Владиславовна",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/hero-proshkina.png",
        width: 2048,
        height: 1152,
        alt: "Прошкина Дарья Владиславовна — ветеринарный врач-невролог",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero-proshkina.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#3d5f8a",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Прошкина Дарья Владиславовна",
  jobTitle: "Ветеринарный врач-невролог",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/face-proshkina.jpeg`,
  knowsAbout: [
    "Ветеринарная неврология",
    "Диагностика заболеваний нервной системы у животных",
    "Онлайн-консультации ветеринарного врача",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Российский государственный аграрный университет — МСХА им. К.А. Тимирязева",
  },
  worksFor: {
    "@type": "MedicalOrganization",
    name: "Европейский Ветеринарный Центр (EVC)",
    url: "https://evc.ru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Мукомольный проезд, д. 2, стр. 1",
      addressLocality: "Москва",
      addressCountry: "RU",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${mfevolt.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
