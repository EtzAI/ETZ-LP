"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRightIcon, Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import Hero from "@/components/home/hero"
import { ProblemaSection } from "@/components/problema-section"
import Features from "@/components/features"
import { ProvaSocialSection } from "@/components/prova-social-section"
import { NewReleasePromo } from "@/components/new-release-promo"
import { TestimonialsSection } from "@/components/testimonials"
import { FAQSection } from "@/components/faq-section"
import { StickyFooter } from "@/components/sticky-footer"

const navItems = [
  { label: "Problema", target: "problema" },
  { label: "Soluções", target: "solucoes" },
  { label: "Como funciona", target: "como-funciona" },
  { label: "Depoimentos", target: "depoimentos" },
  { label: "FAQ", target: "faq" },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return
    const headerOffset = 120
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" })
  }

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => scrollToSection(elementId), 100)
  }

  return (
    <div className="relative min-h-screen w-full bg-[var(--color-bone-50)]">
      <main className="overflow-x-hidden">
        {/* Desktop Header */}
        <header
          className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full border border-[var(--color-bone-200)] bg-[rgba(255,255,255,0.85)] backdrop-blur-md shadow-[var(--shadow-sm)] md:flex transition-all duration-300 ${
            isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
          } py-2`}
        >
          <a className={`z-50 flex items-center transition-all duration-300 ${isScrolled ? "ml-4" : ""}`} href="/">
            <img
              src="/pandafy-logo-sem-fundo.png"
              alt="Pandafy"
              width={140}
              height={40}
              className="h-10 w-auto select-none"
              draggable={false}
            />
          </a>

          <div className="absolute inset-0 hidden flex-1 items-center justify-center space-x-1 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <button
                key={item.target}
                type="button"
                className="header-chip cursor-pointer"
                onClick={() => scrollToSection(item.target)}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link href="/comecar" className="header-chip header-chip-primary cursor-pointer px-5 font-semibold">
              <span>Falar com especialista</span>
            </Link>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full border border-[var(--color-bone-200)] bg-[rgba(255,255,255,0.9)] backdrop-blur-md shadow-[var(--shadow-sm)] md:hidden px-4 py-3">
          <a className="flex items-center" href="/">
            <img
              src="/pandafy-logo-sem-fundo.png"
              alt="Pandafy"
              width={112}
              height={32}
              className="h-8 w-auto select-none"
              draggable={false}
            />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-bone-200)] bg-white text-[var(--color-forest-600)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-bamboo-400)]/30"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <Cross2Icon className="h-4 w-4" /> : <HamburgerMenuIcon className="h-5 w-5" />}
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] bg-[var(--color-forest-600)]/10 px-3 pt-[5.25rem] backdrop-blur-[10px] md:hidden">
            <div
              id="mobile-navigation"
              className="mx-auto w-full max-w-[24rem] overflow-hidden rounded-[1.75rem] border border-[var(--color-bone-200)] bg-white/95 p-2 shadow-[var(--shadow-lg)] animate-in fade-in-0 slide-in-from-top-3 duration-200"
            >
              <nav className="flex flex-col gap-1.5" aria-label="Menu principal">
                {navItems.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => handleMobileNavClick(item.target)}
                    className="group flex min-h-14 w-full items-center justify-between rounded-2xl px-4 text-left text-base font-semibold text-[var(--color-forest-600)] transition-all duration-200 hover:bg-[var(--color-bone-100)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-bamboo-400)]/30 active:scale-[0.98]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[var(--color-mint-400)] transition-transform duration-200 group-hover:scale-125" />
                      {item.label}
                    </span>
                    <ArrowRightIcon className="h-4 w-4 text-[var(--color-mint-400)] transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                ))}

                <Link
                  href="/comecar"
                  className="mt-2 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-bamboo-400)] px-4 text-base font-semibold text-[var(--color-forest-600)] shadow-[var(--shadow-sm)] transition-all duration-200 hover:bg-[var(--color-bamboo-300)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-bamboo-400)]/30 active:scale-[0.98]"
                >
                  Falar com especialista
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </nav>
            </div>
          </div>
        )}

        <Hero />

        <div id="problema">
          <ProblemaSection />
        </div>

        <div id="solucoes">
          <Features />
        </div>

        <div id="depoimentos-prova">
          <ProvaSocialSection />
        </div>

        <div id="como-funciona">
          <NewReleasePromo />
        </div>

        <div id="depoimentos">
          <TestimonialsSection />
        </div>

        <div id="faq">
          <FAQSection />
        </div>

        <StickyFooter />
      </main>
    </div>
  )
}
