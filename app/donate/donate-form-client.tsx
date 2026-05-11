"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ImpactCalculator } from "@/components/impact-calculator"
import { getProgramById } from "@/lib/programs-data"

const QUICK_AMOUNTS = [25, 50, 100, 250]

type DonationType = "one-time" | "monthly"
type PaymentMethod = "credit-card" | "paypal" | "bank-transfer"

interface FormErrors {
  name?: string
  email?: string
  amount?: string
}

export function DonateFormClient() {
  const searchParams = useSearchParams()
  const programId = searchParams.get("program")
  const linkedProgram = programId ? getProgramById(Number(programId)) : null

  const [amount, setAmount] = React.useState<number>(50)
  const [customAmount, setCustomAmount] = React.useState("")
  const [isCustom, setIsCustom] = React.useState(false)
  const [donationType, setDonationType] = React.useState<DonationType>("one-time")
  const [paymentMethod, setPaymentMethod] = React.useState<PaymentMethod>("credit-card")
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [submitted, setSubmitted] = React.useState(false)

  function handleQuickSelect(val: number) {
    setAmount(val)
    setCustomAmount("")
    setIsCustom(false)
  }

  function handleCustomChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/[^\d.]/g, "")
    setCustomAmount(raw)
    setIsCustom(true)
    const parsed = parseFloat(raw)
    setAmount(isNaN(parsed) ? 0 : parsed)
  }

  function validate(): boolean {
    const errs: FormErrors = {}
    if (!name.trim()) errs.name = "Name is required"
    if (!email.trim()) errs.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email"
    if (!amount || amount < 1) errs.amount = "Enter an amount of at least $1"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-stone-50 dark:bg-stone-950">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: [0, 1.2, 1], rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", type: "spring", bounce: 0.5 }}
            className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40"
          >
            <svg className="size-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-50"
          >
            Thank You, {name.split(" ")[0]}!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-3 text-stone-500 dark:text-stone-400"
          >
            Your {donationType === "monthly" ? "monthly " : ""}donation of <span className="font-semibold text-emerald-600 dark:text-emerald-400">${amount.toLocaleString()}</span> is making a real difference.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-1 text-sm text-stone-400 dark:text-stone-500"
          >
            A confirmation has been sent to {email}.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="/" className={cn(buttonVariants({ size: "lg" }), "mt-8 bg-emerald-700 text-white hover:bg-emerald-800")}>
              Back to Home
            </a>
          </motion.div>
        </div>
      </section>
    )
  }

  const inputBase = "h-11 w-full rounded-xl border bg-white px-4 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 dark:bg-stone-900 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
  const inputOk = "border-stone-200 dark:border-stone-700"
  const inputErr = "border-red-400 dark:border-red-500"

  return (
    <section className="bg-stone-50 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <form onSubmit={handleSubmit} noValidate className="grid gap-10 lg:grid-cols-5">

          {/* ── Left column: Form ──────────────────────────────── */}
          <div className="space-y-8 lg:col-span-3">

            {/* Linked program banner */}
            {linkedProgram && (
              <div className="flex items-center gap-3 rounded-xl border border-emerald-200/60 bg-emerald-50/50 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
                </span>
                <div>
                  <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Donating to</p>
                  <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">{linkedProgram.title}</p>
                </div>
              </div>
            )}

            {/* ── 1. Donation type toggle ───────────────────────── */}
            <fieldset>
              <legend className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-50">Donation Type</legend>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {(["one-time", "monthly"] as DonationType[]).map((type) => (
                  <button key={type} type="button" onClick={() => setDonationType(type)}
                    className={cn("relative rounded-xl border-2 px-4 py-4 text-left transition-all", donationType === type ? "border-emerald-500 bg-emerald-50/50 shadow-sm dark:border-emerald-400 dark:bg-emerald-950/20" : "border-stone-200 hover:border-stone-300 dark:border-stone-700 dark:hover:border-stone-600")}
                    aria-pressed={donationType === type}
                  >
                    <span className={cn("absolute top-3 right-3 flex size-5 items-center justify-center rounded-full border-2", donationType === type ? "border-emerald-500 bg-emerald-500 dark:border-emerald-400 dark:bg-emerald-400" : "border-stone-300 dark:border-stone-600")}>
                      {donationType === type && <svg className="size-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>}
                    </span>
                    <span className="block text-sm font-semibold text-stone-800 dark:text-stone-200">{type === "one-time" ? "One-Time Gift" : "Monthly Sustainer"}</span>
                    <span className="mt-1 block text-xs text-stone-400 dark:text-stone-500">{type === "one-time" ? "A single donation" : "Recurring monthly impact"}</span>
                    {type === "monthly" && <span className="mt-2 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 uppercase dark:bg-emerald-900/40 dark:text-emerald-400">12× Impact</span>}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* ── 2. Amount selection ───────────────────────────── */}
            <fieldset>
              <legend className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-50">Select Amount</legend>
              {errors.amount && <p className="mt-1 text-xs text-red-500">{errors.amount}</p>}
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {QUICK_AMOUNTS.map((val) => (
                  <button key={val} type="button" onClick={() => handleQuickSelect(val)}
                    className={cn("rounded-xl border-2 py-3 text-center font-heading text-lg font-bold transition-all", !isCustom && amount === val ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm dark:border-emerald-400 dark:bg-emerald-950/30 dark:text-emerald-400" : "border-stone-200 text-stone-700 hover:border-stone-300 dark:border-stone-700 dark:text-stone-300 dark:hover:border-stone-600")}
                    aria-pressed={!isCustom && amount === val}
                  >
                    ${val}
                  </button>
                ))}
              </div>
              <div className="relative mt-3">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400 font-medium">$</span>
                <input id="custom-amount" type="text" inputMode="decimal" placeholder="Custom amount" value={customAmount}
                  onChange={handleCustomChange} onFocus={() => setIsCustom(true)}
                  className={cn(inputBase, isCustom ? "border-emerald-400 ring-2 ring-emerald-400/20 dark:border-emerald-500" : inputOk, "pl-8")}
                  aria-label="Enter custom donation amount"
                />
              </div>
            </fieldset>

            {/* ── 3. Donor info ─────────────────────────────────── */}
            <fieldset>
              <legend className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-50">Your Information</legend>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="donor-name" className="mb-1.5 block text-sm font-medium text-stone-600 dark:text-stone-400">Full Name <span className="text-red-400">*</span></label>
                  <input id="donor-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" className={cn(inputBase, errors.name ? inputErr : inputOk)} aria-required="true" aria-invalid={!!errors.name} />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="donor-email" className="mb-1.5 block text-sm font-medium text-stone-600 dark:text-stone-400">Email <span className="text-red-400">*</span></label>
                  <input id="donor-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" className={cn(inputBase, errors.email ? inputErr : inputOk)} aria-required="true" aria-invalid={!!errors.email} />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>
            </fieldset>

            {/* ── 4. Payment method ─────────────────────────────── */}
            <fieldset>
              <legend className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-50">Payment Method</legend>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {([
                  { value: "credit-card" as PaymentMethod, label: "Credit Card", icon: "💳" },
                  { value: "paypal" as PaymentMethod, label: "PayPal", icon: "🅿️" },
                  { value: "bank-transfer" as PaymentMethod, label: "Bank Transfer", icon: "🏦" },
                ]).map((m) => (
                  <button key={m.value} type="button" onClick={() => setPaymentMethod(m.value)}
                    className={cn("flex flex-col items-center gap-1.5 rounded-xl border-2 py-4 transition-all", paymentMethod === m.value ? "border-emerald-500 bg-emerald-50/50 shadow-sm dark:border-emerald-400 dark:bg-emerald-950/20" : "border-stone-200 hover:border-stone-300 dark:border-stone-700 dark:hover:border-stone-600")}
                    aria-pressed={paymentMethod === m.value}
                  >
                    <span className="text-xl">{m.icon}</span>
                    <span className="text-xs font-medium text-stone-700 dark:text-stone-300">{m.label}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* ── 5. Submit ─────────────────────────────────────── */}
            <div>
              <button type="submit" className={cn(buttonVariants({ size: "lg" }), "w-full bg-emerald-700 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all hover:bg-emerald-800 hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-emerald-400/50 sm:text-lg")}>
                {donationType === "monthly" ? "Start Monthly Donation" : "Donate"} {amount > 0 ? `— $${amount.toLocaleString()}` : "Now"}
                {donationType === "monthly" && amount > 0 ? "/mo" : ""}
              </button>
              <p className="mt-3 text-center text-xs text-stone-400 dark:text-stone-500">
                Your donation is tax-deductible. You will receive a receipt via email.
              </p>
            </div>
          </div>

          {/* ── Right column: Sidebar ──────────────────────────── */}
          <aside className="lg:col-span-2" aria-label="Donation summary and impact">
            <div className="sticky top-20 space-y-6">

              {/* Impact Calculator */}
              <ImpactCalculator amount={amount} isMonthly={donationType === "monthly"} category={linkedProgram?.category} />

              {/* Trust badges */}
              <div className="rounded-2xl border border-stone-200/80 bg-white p-5 dark:border-stone-800/80 dark:bg-stone-900">
                <h3 className="mb-4 text-sm font-semibold text-stone-700 dark:text-stone-300">Safe & Secure</h3>
                <div className="space-y-3">
                  {[
                    { icon: "🔒", label: "256-bit SSL Encryption" },
                    { icon: "🛡️", label: "PCI-DSS Compliant" },
                    { icon: "✅", label: "100% Tax Deductible" },
                    { icon: "📧", label: "Instant Receipt via Email" },
                  ].map((badge) => (
                    <div key={badge.label} className="flex items-center gap-2.5">
                      <span className="text-base">{badge.icon}</span>
                      <span className="text-xs text-stone-500 dark:text-stone-400">{badge.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 border-t border-stone-100 pt-4 dark:border-stone-800">
                  {["Visa", "MC", "Amex", "PayPal"].map((brand) => (
                    <span key={brand} className="flex h-7 items-center rounded border border-stone-200 bg-stone-50 px-2 text-[10px] font-bold text-stone-500 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              {/* Donor assurance */}
              <div className="rounded-2xl border border-stone-200/80 bg-white p-5 dark:border-stone-800/80 dark:bg-stone-900">
                <h3 className="mb-2 text-sm font-semibold text-stone-700 dark:text-stone-300">Our Promise</h3>
                <p className="text-xs leading-relaxed text-stone-400 dark:text-stone-500">
                  Every dollar you donate goes directly to funding programs. We maintain full financial
                  transparency and publish annual impact reports. Kindred is a registered 501(c)(3) nonprofit organization.
                </p>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </section>
  )
}
