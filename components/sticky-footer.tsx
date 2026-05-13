"use client"

import Link from "next/link"

const navColumns = [
  {
    title: "Soluções",
    links: [
      { label: "Agentes de IA", href: "#solucoes" },
      { label: "Automações de processo", href: "#solucoes" },
      { label: "Software sob medida", href: "#solucoes" },
      { label: "Analytics e dashboards", href: "#solucoes" },
    ],
  },
  {
    title: "Navegação",
    links: [
      { label: "Problema", href: "#problema" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Começar", href: "/comecar" },
      { label: "Entrar", href: "/login" },
      { label: "Criar conta", href: "/signup" },
    ],
  },
]

export function StickyFooter() {
  return (
    <footer className="relative bg-[var(--color-forest-600)] px-4 pt-20 pb-10 text-[var(--color-bone-100)]">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <img
            src="/pandafy-logo.png"
            alt="Etz"
            width={120}
            height={120}
            className="h-24 w-24 select-none rounded-[var(--radius-lg)]"
            draggable={false}
          />
          <p className="max-w-xs text-sm leading-6 text-[var(--color-bone-300)] font-[family-name:var(--font-sans)]">
            IA, automações e software sob medida.
          </p>
        </div>

        {navColumns.map((column) => (
          <div key={column.title} className="flex flex-col gap-4">
            <h4 className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[var(--color-mint-300)] font-[family-name:var(--font-mono)]">
              {column.title}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-bone-100)] transition-colors duration-200 hover:text-[var(--color-bamboo-400)] font-[family-name:var(--font-sans)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-[var(--color-forest-500)] pt-6">
        <p className="text-xs text-[var(--color-bone-400)] font-[family-name:var(--font-sans)]">
          © 2025 Etz. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
