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
  title: "Pandafy — IA, Automações e Software sob Medida",
  description:
    "Soluções inteligentes em IA, automações e software sob medida para empresas que querem escalar com eficiência, performance e inovação.",
  alternates: {
    canonical: "https://www.pandafy.com.br",
  },
  openGraph: {
    title: "Pandafy — IA, Automações e Software sob Medida",
    description:
      "Soluções inteligentes em IA, automações e software sob medida para empresas que querem escalar com eficiência, performance e inovação.",
    url: "https://www.pandafy.com.br",
    siteName: "Pandafy",
    locale: "pt_BR",
    type: "website",
  },
  generator: "Pandafy",
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.pandafy.com.br/#organization",
      name: "Pandafy",
      url: "https://www.pandafy.com.br",
      description:
        "Soluções inteligentes em IA, automações e software sob medida para empresas que querem escalar com eficiência, performance e inovação.",
      serviceType: ["Agentes de IA", "Automações de processo", "Software sob medida"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.pandafy.com.br/#website",
      url: "https://www.pandafy.com.br",
      name: "Pandafy",
      publisher: { "@id": "https://www.pandafy.com.br/#organization" },
      inLanguage: "pt-BR",
    },
    {
      "@type": "Service",
      "@id": "https://www.pandafy.com.br/#service",
      name: "IA, automações e software sob medida",
      provider: { "@id": "https://www.pandafy.com.br/#organization" },
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
