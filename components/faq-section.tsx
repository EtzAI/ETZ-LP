"use client"

import { useState } from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { motion, AnimatePresence } from "framer-motion"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "Que tipo de solução a Etz.org desenvolve para empresas?",
      answer:
        "Desenvolvemos soluções sob medida em software, automações, agentes de IA, dashboards operacionais e landing pages orientadas a conversão. O foco é resolver gargalos reais do negócio com tecnologia aplicável ao dia a dia da empresa.",
    },
    {
      question: "Vocês trabalham com projetos personalizados?",
      answer:
        "Sim. Cada projeto é desenhado com base no momento da empresa, nos sistemas já utilizados e nas metas de operação, vendas ou atendimento. Não entregamos pacotes genéricos quando o desafio pede algo específico.",
    },
    {
      question: "A Etz.org consegue integrar com ferramentas que já usamos hoje?",
      answer:
        "Sim. Podemos integrar a solução com CRMs, ERPs, plataformas de atendimento, automação de marketing, APIs internas e outras ferramentas que já fazem parte da operação da sua empresa.",
    },
    {
      question: "Quanto tempo leva para implementar um projeto?",
      answer:
        "O prazo varia conforme a complexidade, o número de integrações e a maturidade do processo atual. Em geral, começamos por um diagnóstico rápido, priorizamos entregas de maior impacto e estruturamos um cronograma claro desde o início.",
    },
    {
      question: "Como funciona o suporte depois da entrega?",
      answer:
        "Acompanhamos a implantação, ajustamos pontos finos e damos suporte para garantir estabilidade e resultado. Dependendo do projeto, também podemos seguir com evolução contínua, manutenção e novas automações.",
    },
  ]

  return (
    <section id="faq" className="relative overflow-hidden pb-120 pt-24">
      {/* Background blur effects */}
      <div className="bg-primary/20 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>
      <div className="bg-primary/20 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>

      <div className="z-10 container mx-auto px-4">

        <motion.h2
          className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Perguntas frequentes sobre{" "}
          <span className="bg-gradient-to-b from-[#0D261F] via-[#1C4259] to-[#60BFA4] bg-clip-text text-transparent">
            nossas soluções
          </span>
        </motion.h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="cursor-pointer rounded-2xl border border-[#1C4259]/10 bg-gradient-to-b from-white to-[#f8fcfa] p-6 shadow-[0_12px_32px_rgba(28,66,89,0.06)] transition-all duration-300 hover:border-[#60BFA4]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggleItem(index)
                }
              }}
              {...(index === faqs.length - 1 && { "data-faq": faq.question })}
            >
              <div className="flex items-start justify-between">
                <h3 className="m-0 font-medium pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className=""
                >
                  {openItems.includes(index) ? (
                    <MinusIcon className="text-primary h-6 w-6 flex-shrink-0 transition duration-300" />
                  ) : (
                    <PlusIcon className="text-primary h-6 w-6 flex-shrink-0 transition duration-300" />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    className="mt-4 text-muted-foreground leading-relaxed overflow-hidden"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
