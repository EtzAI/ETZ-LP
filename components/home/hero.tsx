"use client"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Hero() {
  const scrollToPromo = () => {
    const element = document.getElementById("cta-section")
    if (!element) return

    const headerOffset = 120
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative isolate min-h-[calc(100dvh-5rem)] overflow-hidden px-4 pt-16 pb-16 sm:px-6 sm:pt-20 lg:px-8 xl:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[34rem] w-[48rem] -translate-x-1/2 rounded-full bg-[#60BFA4]/16 blur-3xl" />
        <div className="absolute right-0 bottom-8 h-[30rem] w-[30rem] rounded-full bg-[#C1F277]/20 blur-3xl" />
        <div className="absolute bottom-0 left-8 h-[18rem] w-[18rem] rounded-full bg-[#1C4259]/6 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 xl:min-h-[calc(100dvh-11rem)] xl:grid-cols-[minmax(0,620px)_minmax(700px,1fr)] xl:gap-12 2xl:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mx-auto flex w-full max-w-[680px] flex-col items-center text-center xl:mx-0 xl:items-start xl:text-left"
        >

          <h1
            id="main-title"
            className={cn(
              "max-w-[560px] text-balance font-semibold leading-[0.98] tracking-[-0.06em] text-[#0D261F]",
              "text-[clamp(2.65rem,9vw,4rem)] sm:text-[clamp(3.4rem,6.8vw,4.45rem)] xl:text-[clamp(3.55rem,3.75vw,4.35rem)]",
              geist.className,
            )}
          >
            Transformamos tecnologia em <span className="text-[#60BFA4]">crescimento real</span> para o seu negocio.
          </h1>

          <p className="mt-6 max-w-[570px] text-base leading-7 text-[#243F38]/78 sm:text-lg sm:leading-8">
            Soluções inteligentes em IA, automações e software sob medida para empresas que querem escalar com
            eficiência, performance e inovação.
          </p>

          <Button
            onClick={scrollToPromo}
            className="mt-9 h-14 rounded-xl bg-[#7FF20C] px-8 text-base font-bold text-[#0D261F] shadow-[0_18px_38px_rgba(127,242,12,0.32)] ring-1 ring-[#C1F277]/70 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:bg-[#C1F277] hover:shadow-[0_24px_52px_rgba(127,242,12,0.38)] active:scale-[0.98] sm:px-10 sm:text-lg"
          >
            Quero escalar meu negocio
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
          className="relative mx-auto flex w-full max-w-[860px] justify-center xl:mr-[-6rem] xl:max-w-none xl:justify-end 2xl:mr-[-8rem]"
        >
          <div className="absolute top-1/2 right-1/2 -z-10 h-[68%] w-[82%] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#60BFA4]/20 blur-3xl xl:right-[42%]" />
          <div className="absolute right-[10%] bottom-[5%] -z-10 h-28 w-[66%] rounded-full bg-[#1C4259]/18 blur-2xl" />
          <img
            src="/phone-image.png"
            alt="Telefone exibindo uma interface com rede tecnologica luminosa"
            width={612}
            height={408}
            draggable={false}
            className="h-auto w-full max-w-[560px] select-none object-contain drop-shadow-[0_34px_60px_rgba(28,66,89,0.22)] sm:max-w-[700px] lg:max-w-[1200px] xl:w-[min(54vw,1200px)] xl:max-w-none 2xl:w-[min(52vw,1200px)]"
          />
        </motion.div>
      </div>
    </section>
  )
}
