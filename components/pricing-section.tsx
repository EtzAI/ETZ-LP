"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { useState } from "react"

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started with v0",
    features: ["5 components per month", "Basic templates", "Community support", "Standard components"],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    annualPrice: 24,
    description: "For professionals building serious projects",
    features: [
      "Unlimited components",
      "Premium templates",
      "Priority support",
      "Advanced animations",
      "Custom themes",
      "Export to GitHub",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Team",
    monthlyPrice: 99,
    annualPrice: 79,
    description: "For teams collaborating on projects",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Shared component library",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated support",
    ],
    popular: false,
    cta: "Contact Sales",
  },
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#60BFA4]/30 bg-white px-4 py-2 shadow-[0_10px_30px_rgba(28,66,89,0.08)] backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-[#60BFA4]" />
            <span className="text-sm font-medium text-[#1C4259]">Pricing</span>
          </motion.div>

          <h2 className="mb-4 bg-gradient-to-r from-[#0D261F] via-[#1C4259] to-[#60BFA4] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Choose your plan
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Start building beautiful components today. Upgrade anytime as your needs grow.
          </p>

          {/* Monthly/Annual Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto flex w-fit items-center justify-center gap-4 rounded-full border border-[#1C4259]/10 bg-white p-1 shadow-[0_10px_30px_rgba(28,66,89,0.08)] backdrop-blur-sm"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual ? "bg-[#1C4259] text-white shadow-lg" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                isAnnual ? "bg-[#1C4259] text-white shadow-lg" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 rounded-full bg-[#7FF20C] px-2 py-0.5 text-xs text-[#0D261F]">
                Save 20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 ${
                plan.popular
                  ? "border-[#60BFA4]/30 bg-gradient-to-b from-[#EEF8F5] to-white shadow-lg shadow-[#60BFA4]/10"
                  : "border-[#1C4259]/10 bg-white shadow-[0_12px_32px_rgba(28,66,89,0.06)] hover:border-[#60BFA4]/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="rounded-full bg-[#7FF20C] px-4 py-2 text-sm font-medium text-[#0D261F]">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="mb-2 text-xl font-bold text-[#0D261F]">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  {plan.price ? (
                    <span className="text-4xl font-bold text-[#0D261F]">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-[#0D261F]">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-lg text-muted-foreground">{isAnnual ? "/year" : "/month"}</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#60BFA4]" />
                    <span className="text-sm text-[#1C4259]">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-[#7FF20C] text-[#0D261F] shadow-lg shadow-[#7FF20C]/20 hover:bg-[#C1F277]"
                    : "border border-[#1C4259]/15 bg-[#1C4259] text-white hover:bg-[#163547]"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="mb-4 text-muted-foreground">Need a custom solution? We're here to help.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-medium text-[#1C4259] transition-colors hover:text-[#60BFA4]"
          >
            Contact our sales team →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
