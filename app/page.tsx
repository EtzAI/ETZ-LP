"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Hero from "@/components/home/hero"
import { ProblemaSection } from "@/components/problema-section"
import Features from "@/components/features"
import { ProvaSocialSection } from "@/components/prova-social-section"
import { NewReleasePromo } from "@/components/new-release-promo"
import { FAQSection } from "@/components/faq-section"
import { StickyFooter } from "@/components/sticky-footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return

    const headerOffset = 120
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      scrollToSection(elementId)
    }, 100)
  }

  return (
    <div className="min-h-screen w-full relative bg-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 34% at 50% 0%, rgba(96, 191, 164, 0.2), transparent 60%), radial-gradient(circle at 85% 16%, rgba(193, 242, 119, 0.2), transparent 16%), linear-gradient(180deg, #ffffff 0%, #f8fcfa 45%, #ffffff 100%)",
        }}
      />

      {/* Desktop Header */}
      <header
        className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
        } py-2`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <a
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-4" : ""
          }`}
          href="/"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7FF20C] via-[#C1F277] to-[#60BFA4] shadow-md shadow-[#60BFA4]/25">
            <span className="text-xs font-bold text-[#0D261F]">Etz</span>
          </div>
          <span className="font-bold text-foreground">Etz.org</span>
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium md:flex md:space-x-3">
          <button type="button" className="header-chip cursor-pointer" onClick={() => scrollToSection("features")}>
            <span>Sistema</span>
          </button>
          <button type="button" className="header-chip cursor-pointer" onClick={() => scrollToSection("faq")}>
            <span>FAQ</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/comecar" className="header-chip header-chip-primary cursor-pointer px-5 font-bold">
            <span>Começar</span>
          </Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <a
          className="flex items-center justify-center gap-2"
          href="/"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#7FF20C] via-[#C1F277] to-[#60BFA4] shadow-md shadow-[#60BFA4]/25">
            <span className="text-[10px] font-bold text-[#0D261F]">Etz</span>
          </div>
          <span className="font-bold text-foreground text-sm">Etz.org</span>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-[#1C4259]/12 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("features")}
                className="header-chip w-full justify-start px-4 py-3 text-left text-lg font-medium"
              >
                <span>Sistema</span>
              </button>
              <button
                onClick={() => handleMobileNavClick("faq")}
                className="header-chip w-full justify-start px-4 py-3 text-left text-lg font-medium"
              >
                <span>FAQ</span>
              </button>
              <div className="mt-4 flex flex-col space-y-3 border-t border-border/50 pt-4">
                <Link
                  href="/comecar"
                  className="header-chip header-chip-primary w-full justify-center px-4 py-3 text-lg font-bold"
                >
                  <span>Começar</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* Problema Section */}
      <div id="problema">
        <ProblemaSection />
      </div>

      {/* O Sistema EtzAI Section */}
      <div id="features">
        <Features />
      </div>

      {/* Prova Social Section */}
      <div id="prova-social">
        <ProvaSocialSection />
      </div>

      <NewReleasePromo />

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  )
}
