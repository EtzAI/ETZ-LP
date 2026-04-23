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
              className="group relative z-[60] mx-auto rounded-full border border-[#60BFA4]/30 bg-white px-6 py-1 text-xs text-[#0D261F] shadow-[0_10px_30px_rgba(28,66,89,0.08)] backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#60BFA4] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#60BFA4] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-[#0D261F]">Prova Social</span>
            </button>
          </motion.div>

          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-balance mb-4",
              "bg-gradient-to-r from-[#0D261F] via-[#1C4259] to-[#60BFA4] bg-clip-text text-transparent",
              geist.className
            )}
          >
            Empresas que ja transformaram seus resultados
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Junte-se a dezenas de empresas que ja estao escalando seus negocios com a Etz.org
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
              className="mt-4 bg-[#7FF20C] px-8 py-6 text-lg text-[#0D261F] shadow-[0_14px_30px_rgba(127,242,12,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#C1F277]"
            >
              Quero esses resultados
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
