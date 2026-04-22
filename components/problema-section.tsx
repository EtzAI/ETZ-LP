"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"
import { Clock, UserX, Settings, BarChart3, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const problemas = [
  {
    icon: Clock,
    text: "Atendimento lento ou inexistente fora do horario",
  },
  {
    icon: UserX,
    text: "Leads chegam e ninguem responde",
  },
  {
    icon: Settings,
    text: "Processos manuais e retrabalho",
  },
  {
    icon: BarChart3,
    text: "Falta de controle e dados",
  },
  {
    icon: Users,
    text: "Equipe sobrecarregada",
  },
]

export function ProblemaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const scrollToPricing = () => {
    const element = document.getElementById("pricing")
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
      <div className="bg-[#8B5CF6] absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-30 blur-3xl select-none"></div>
      <div className="via-[#8B5CF6]/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      
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
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-white">Problema</span>
            </button>
          </motion.div>

          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[60px] font-semibold tracking-tighter text-balance mb-12",
              "bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent",
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
                className="flex items-center gap-4 p-4 rounded-xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm hover:border-red-500/40 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <problema.icon className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-lg text-white/80">{problema.text}</span>
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
              onClick={scrollToPricing}
              className="bg-gradient-to-b from-[#8B5CF6] to-[#7C3AED] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] hover:opacity-90 transition-opacity px-8 py-6 text-lg"
            >
              Isso acontece comigo
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
