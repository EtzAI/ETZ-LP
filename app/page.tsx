"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRightIcon, Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"
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

  const mobileNavItems = [
    { label: "Sistema", target: "features" },
    { label: "FAQ", target: "faq" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

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
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#7FF20C] via-[#C1F277] to-[#60BFA4] shadow-md shadow-[#60BFA4]/25">
            <span className="text-xs font-bold text-[#0D261F]">Etz</span>
          </div>
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4e6df] bg-white/80 text-[#0D261F] shadow-sm shadow-[#1C4259]/5 transition-all duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#60BFA4]/20"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <Cross2Icon className="h-4 w-4" /> : <HamburgerMenuIcon className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-[#0D261F]/10 px-3 pt-[5.25rem] backdrop-blur-[10px] md:hidden">
          <div
            id="mobile-navigation"
            className="mx-auto w-full max-w-[24rem] overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/92 p-2 shadow-[0_24px_70px_rgba(13,38,31,0.18)] backdrop-blur-xl animate-in fade-in-0 slide-in-from-top-3 duration-200"
          >
            <div className="mb-1 flex items-center gap-3 rounded-[1.25rem] bg-[#F5FBF8] px-3 py-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7FF20C] via-[#C1F277] to-[#60BFA4] shadow-sm shadow-[#60BFA4]/25">
                <span className="text-[10px] font-bold text-[#0D261F]">Etz</span>
              </div>
              <span className="text-sm font-bold text-[#0D261F]">Etz.org</span>
            </div>

            <nav className="flex flex-col gap-1.5" aria-label="Menu principal">
              {mobileNavItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleMobileNavClick(item.target)}
                  className="group flex min-h-14 w-full items-center justify-between rounded-2xl px-4 text-left text-base font-semibold text-[#1C4259] transition-all duration-200 hover:bg-[#EEF8F5] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#60BFA4]/20 active:scale-[0.98]"
                >
                  <span className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#60BFA4] transition-transform duration-200 group-hover:scale-125" />
                    {item.label}
                  </span>
                  <ArrowRightIcon className="h-4 w-4 text-[#60BFA4] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              ))}

              <Link
                href="/comecar"
                className="mt-2 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7FF20C] to-[#C1F277] px-4 text-base font-bold text-[#0D261F] shadow-[0_14px_34px_rgba(127,242,12,0.28)] transition-all duration-200 hover:shadow-[0_18px_42px_rgba(127,242,12,0.34)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#60BFA4]/24 active:scale-[0.98]"
              >
                Começar
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
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
