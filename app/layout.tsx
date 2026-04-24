import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

export const metadata: Metadata = {
  title: "Etz.org",
  description: "Soluções inteligentes em IA, automações e software sob medida.",
  generator: "Codex",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
