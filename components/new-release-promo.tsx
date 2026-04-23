"use client"

import Link from "next/link"

export function NewReleasePromo() {
  return (
    <section id="cta-section" className="mt-12 w-full">
      <div className="mx-auto max-w-4xl rounded-[40px] border border-[#1C4259]/10 bg-white/80 p-2 shadow-[0_18px_50px_rgba(28,66,89,0.08)]">
        <div className="relative mx-auto h-[400px] max-w-4xl overflow-hidden rounded-[38px] border border-[#1C4259]/10 bg-[linear-gradient(135deg,#1C4259_0%,#60BFA4_62%,#C1F277_100%)] p-2 shadow-sm">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 255, 255, 0.18), transparent 70%)",
            }}
          />

          <div
            className="absolute inset-0 z-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10">
            <div className="mt-8 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">Automatize processos e escale com clareza.</h2>
              <p className="mb-8 text-white/85">Design claro, performance forte e a paleta certa para destacar sua marca.</p>
              <div className="flex items-center justify-center">
                <Link href="/comecar">
                  <div className="group mt-10 flex h-[64px] cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/15 p-[11px] shadow-[0_12px_30px_rgba(13,38,31,0.16)]">
                    <div className="flex h-[43px] items-center justify-center rounded-full border border-[#0D261F]/10 bg-[#7FF20C]">
                      <p className="mr-3 ml-2 flex items-center justify-center gap-2 font-medium tracking-tight text-[#0D261F]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-globe animate-spin"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Começar agora
                      </p>
                    </div>
                    <div className="flex size-[26px] items-center justify-center rounded-full border-2 border-white/40 text-white transition-all ease-in-out group-hover:ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right transition-all ease-in-out group-hover:rotate-45"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
