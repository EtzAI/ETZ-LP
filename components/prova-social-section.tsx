"use client"

import React from "react"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"
import { Button } from "@/components/ui/button"

const clientes = [
  {
    id: 1,
    name: "Carlos Silva",
    designation: "CEO, TechStart",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Ana Oliveira",
    designation: "Fundadora, Digital Agency",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Marcos Santos",
    designation: "Diretor, E-commerce Plus",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Julia Costa",
    designation: "CMO, Growth Co",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Pedro Lima",
    designation: "Founder, SaaS Brasil",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Fernanda Reis",
    designation: "Head of Sales, Vendas Pro",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
]

export function ProvaSocialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const scrollToPromo = () => {
    const element = document.getElementById("cta-section")
    if (element) {
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="prova-social" className="relative py-16 sm:py-24 overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
          <button
            type="button"
            className="group relative z-[60] mx-auto inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#60BFA4]/35 bg-white/75 py-1.5 pr-5 pl-2 text-xs font-semibold tracking-[0.02em] text-[#0D261F] shadow-[0_18px_50px_rgba(28,66,89,0.10)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:border-[#7FF20C]/60 hover:bg-white hover:shadow-[0_24px_70px_rgba(96,191,164,0.20)] active:scale-[0.98] md:text-sm"
          >
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(127,242,12,0.24),transparent_30%),linear-gradient(90deg,rgba(96,191,164,0.10),transparent_55%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#7FF20C] to-transparent opacity-70 transition-all duration-700 group-hover:inset-x-3" />
            <span className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#60BFA4] to-transparent opacity-70 transition-all duration-700 group-hover:inset-x-3" />
            <span className="relative flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-[#1C4259] via-[#60BFA4] to-[#7FF20C] text-[11px] font-bold text-white shadow-[0_10px_26px_rgba(96,191,164,0.30)] ring-1 ring-white/70">
              Etz
            </span>
            <span className="relative flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#7FF20C] shadow-[0_0_18px_rgba(127,242,12,0.95)] transition-transform duration-500 group-hover:scale-125" />
              <span className="text-[#0D261F]">Prova Social</span>
            </span>
          </button>
          </motion.div>

          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-balance mb-4",
              "bg-gradient-to-r from-[#0D261F] via-[#1C4259] to-[#60BFA4] bg-clip-text text-transparent",
              geist.className
            )}
          >
            Empresas que já transformaram seus resultados
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Junte-se a dezenas de empresas que já estão escalando seus negócios com a Etz.org
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-row items-center justify-center mb-10 w-full"
          >
            <AnimatedTooltip items={clientes} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2 text-[#1C4259]">
              <span className="text-3xl font-bold">+50</span>
              <span className="text-muted-foreground">empresas atendidas</span>
            </div>
            
            <Button
              onClick={scrollToPromo}
              className="h-14 rounded-lg bg-[#FFF] px-8 text-lg font-bold tracking-[0.01em] text-[#1C4259] shadow-[0_16px_36px_rgba(13,38,31,0.22)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:border-[#C1F277] hover:text-[#FFF] hover:bg-[#12382E] hover:shadow-[0_20px_44px_rgba(13,38,31,0.30),0_0_0_4px_rgba(127,242,12,0.10)] active:translate-y-0 active:scale-[0.98]"

            >
              Quero esses resultados
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
