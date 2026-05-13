import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display-google",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-google",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Etz — IA, Automações e Software sob Medida",
  description:
    "Soluções inteligentes em IA, automações e software sob medida para empresas que querem escalar com eficiência, performance e inovação.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.etzai.com.br",
  },
  openGraph: {
    title: "Etz — IA, Automações e Software sob Medida",
    description:
      "Soluções inteligentes em IA, automações e software sob medida para empresas que querem escalar com eficiência, performance e inovação.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.etzai.com.br",
    siteName: "Etz",
    locale: "pt_BR",
    type: "website",
  },
  generator: "Etz",
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.etzai.com.br"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Etz",
      url: siteUrl,
      description:
        "Soluções inteligentes em IA, automações e software sob medida para empresas que querem escalar com eficiência, performance e inovação.",
      serviceType: ["Agentes de IA", "Automações de processo", "Software sob medida"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Etz",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "pt-BR",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "IA, automações e software sob medida",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "BR",
      serviceType: "Agentes de IA, automações de processo e software sob medida",
      description:
        "Desenvolvimento de agentes de IA, automações de processo e software sob medida para empresas de 10 a 500 pessoas.",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}
        style={{
          // Mapeia a variável usada como `--font-sans-google` no globals.css
          ["--font-sans-google" as never]: GeistSans.style.fontFamily,
        }}
      >
        {children}
      </body>
    </html>
  )
}
