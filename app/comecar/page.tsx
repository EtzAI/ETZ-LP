"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronRight, MessageCircleMore, PhoneCall, SendHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const serviceOptions = [
  { value: "agentes-ia", label: "Agentes de IA" },
  { value: "automacao", label: "Automação de processos" },
  { value: "landing-page", label: "Landing page inteligente" },
  { value: "dashboard", label: "Dashboard e BI" },
  { value: "software", label: "Software sob medida" },
  { value: "outro", label: "Outro" },
]

const whatsappUrl = ""

export default function ComecarPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [otherReason, setOtherReason] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const isOtherSelected = service === "outro"
  const selectedServiceLabel = useMemo(
    () => serviceOptions.find((option) => option.value === service)?.label ?? "",
    [service],
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf9_52%,#ffffff_100%)] text-[#0D261F]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#1C4259]/10 bg-white px-4 py-2 text-sm font-medium text-[#1C4259] shadow-[0_10px_30px_rgba(28,66,89,0.08)] transition-all hover:-translate-y-0.5 hover:border-[#60BFA4]/30 hover:text-[#0D261F]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a landing
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#60BFA4]/30 bg-white px-4 py-2 text-sm font-semibold text-[#1C4259] shadow-[0_10px_30px_rgba(28,66,89,0.08)]">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7FF20C] via-[#C1F277] to-[#60BFA4] text-xs font-bold text-[#0D261F]">
              Etz
            </div>
            Etz.org
          </div>
        </div>

        <section className="relative overflow-hidden rounded-[36px] border border-[#1C4259]/10 bg-white/80 shadow-[0_24px_80px_rgba(28,66,89,0.08)]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(96, 191, 164, 0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(193, 242, 119, 0.18), transparent 22%)",
            }}
          />

          <div className="relative grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10 xl:p-12">
            <div className="space-y-8">
              <div className="max-w-2xl space-y-4">
                <span className="inline-flex items-center rounded-full border border-[#60BFA4]/30 bg-[#EEF8F5] px-4 py-2 text-sm font-medium text-[#1C4259]">
                  Comece sua conversa com a Etz.org
                </span>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  Conte o que sua empresa precisa e aceleramos o próximo passo.
                </h1>
                <p className="max-w-xl text-base leading-7 text-[#4D6B63] sm:text-lg">
                  Escolha a forma de contato ideal. Você pode preencher um breve formulário de interesse ou iniciar uma
                  conversa imediata pelo canal telefônico da equipe.
                </p>
              </div>

              <div className="rounded-[30px] border border-[#1C4259]/10 bg-white p-6 shadow-[0_16px_48px_rgba(28,66,89,0.06)] sm:p-8">
                <div className="mb-6 space-y-2">
                  <h2 className="text-2xl font-semibold">Formulário de interesse</h2>
                  <p className="text-sm leading-6 text-[#4D6B63]">
                    Preencha seus dados e informe o tipo de solução que você procura.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#0D261F]">
                        Nome
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Seu nome completo"
                        className="h-11 border-[#D4E6DF] bg-white text-[#0D261F] placeholder:text-[#6E8780] focus-visible:border-[#60BFA4]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#0D261F]">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="voce@empresa.com"
                        className="h-11 border-[#D4E6DF] bg-white text-[#0D261F] placeholder:text-[#6E8780] focus-visible:border-[#60BFA4]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#0D261F]">
                        Telefone para contato
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="(11) 99999-9999"
                        className="h-11 border-[#D4E6DF] bg-white text-[#0D261F] placeholder:text-[#6E8780] focus-visible:border-[#60BFA4]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[#0D261F]">Tipo de serviço desejado</Label>
                      <Select value={service} onValueChange={setService} required>
                        <SelectTrigger className="h-11 w-full border-[#D4E6DF] bg-white text-[#0D261F] focus-visible:border-[#60BFA4]">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {isOtherSelected && (
                    <div className="space-y-2">
                      <Label htmlFor="otherReason" className="text-[#0D261F]">
                        Motivo do contato
                      </Label>
                      <Textarea
                        id="otherReason"
                        value={otherReason}
                        onChange={(event) => setOtherReason(event.target.value)}
                        placeholder="Descreva com mais detalhes o que sua empresa precisa."
                        className="min-h-32 border-[#D4E6DF] bg-white text-[#0D261F] placeholder:text-[#6E8780] focus-visible:border-[#60BFA4]"
                        required={isOtherSelected}
                      />
                    </div>
                  )}

                  <div className="flex flex-col gap-3 border-t border-[#E6F0EC] pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-6 text-[#4D6B63]">
                      Ao enviar, sua equipe já pode avançar com um briefing inicial.
                    </p>
                    <Button
                      type="submit"
                      className="h-11 rounded-full bg-[#7FF20C] px-6 text-base font-semibold text-[#0D261F] shadow-[0_14px_30px_rgba(127,242,12,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#C1F277]"
                    >
                      Enviar interesse
                      <SendHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </form>

                {submitted && (
                  <div className="mt-5 rounded-2xl border border-[#60BFA4]/30 bg-[#F5FBF8] p-4 text-sm text-[#1C4259]">
                    <p className="font-semibold">Resumo do interesse preenchido</p>
                    <p className="mt-2">
                      <strong>Nome:</strong> {name}
                    </p>
                    <p>
                      <strong>E-mail:</strong> {email}
                    </p>
                    <p>
                      <strong>Telefone:</strong> {phone}
                    </p>
                    <p>
                      <strong>Serviço:</strong> {isOtherSelected ? "Outro" : selectedServiceLabel}
                    </p>
                    {isOtherSelected && otherReason && (
                      <p>
                        <strong>Motivo:</strong> {otherReason}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <aside className="flex flex-col gap-6">
              <div className="rounded-[30px] border border-[#1C4259]/10 bg-[linear-gradient(145deg,#1C4259_0%,#2C6B6A_45%,#60BFA4_100%)] p-6 text-white shadow-[0_20px_60px_rgba(28,66,89,0.18)] sm:p-8">
                <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
                  Atendimento direto
                </div>
                <h2 className="text-2xl font-semibold">Prefere conversar agora com a equipe?</h2>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  Use o botão abaixo para abrir uma conversa no número de atendimento e falar com alguém imediatamente.
                </p>

                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-between rounded-full border border-white/15 bg-white/12 px-5 py-4 text-left text-white transition-all hover:-translate-y-0.5 hover:bg-white/18"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7FF20C] text-[#0D261F]">
                        <MessageCircleMore className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm text-white/70">Contato imediato</span>
                        <span className="block text-base font-semibold">Abrir conversa no telefone</span>
                      </span>
                    </span>
                    <ChevronRight className="h-5 w-5" />
                  </a>
                ) : (
                  <div className="mt-8 rounded-3xl border border-dashed border-white/25 bg-white/10 p-5 text-sm leading-6 text-white/80">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/12">
                        <PhoneCall className="h-4 w-4" />
                      </span>
                      <span className="font-semibold text-white">Botão de conversa pronto para configuração</span>
                    </div>
                    Falta apenas conectar o número oficial de atendimento para ativar esse redirecionamento.
                  </div>
                )}
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  )
}
