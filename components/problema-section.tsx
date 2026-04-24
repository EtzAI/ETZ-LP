"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"
import { BarChartIcon, ClockIcon, GearIcon, GroupIcon, PersonIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

const problemas = [
  {
    icon: ClockIcon,
    text: "Atendimento lento ou inexistente fora do horario",
  },
  {
    icon: PersonIcon,
    text: "Leads chegam e ninguem responde",
  },
  {
    icon: GearIcon,
    text: "Processos manuais e retrabalho",
  },
  {
    icon: BarChartIcon,
    text: "Falta de controle e dados",
  },
  {
    icon: GroupIcon,
    text: "Equipe sobrecarregada",
  },
]

export function ProblemaSection() {
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
    <section id="problema" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="bg-[#60BFA4] absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-25 blur-3xl select-none"></div>
      <div className="via-[#60BFA4]/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto text-center">

          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[60px] font-semibold tracking-tighter text-balance mb-12",
              "bg-gradient-to-r from-[#0D261F] via-[#1C4259] to-[#60BFA4] bg-clip-text text-transparent",
              geist.className
            )}
          >
            Seu negocio esta perdendo tempo, dinheiro e oportunidades todos os dias.
          </h2>

          <div className="grid gap-4 md:gap-6 max-w-2xl mx-auto">
            {problemas.map((problema, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-4 rounded-xl border border-[#1C4259]/10 bg-white/90 p-4 shadow-[0_10px_30px_rgba(28,66,89,0.06)] backdrop-blur-sm transition-all hover:border-[#60BFA4]/40"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#EEF8F5]">
                  <problema.icon className="h-5 w-5 text-[#1C4259]" />
                </div>
                <span className="text-lg text-[#0D261F]">{problema.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10"
          >
            <Button
              onClick={scrollToPromo}
              className="bg-[#7FF20C] px-8 py-6 text-lg text-[#0D261F] shadow-[0_14px_30px_rgba(127,242,12,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#C1F277]"
            >
              Isso acontece comigo
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
